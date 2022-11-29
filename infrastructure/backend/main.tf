terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.9.0"
    }
  }

  backend "s3" {
    bucket  = "ioet-secret-santa-tfstate"
    key     = "terraform/state/ioet-secret-santa-backend.tfstate"
    region  = "us-east-1"
    encrypt = true
  }
}

provider "aws" {
  region = "us-east-1"
}

resource "aws_ecr_repository" "secret-santa-ecr-repository" {
  name                 = "secret-santa-repository"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }
}

resource "aws_iam_role" "iam_for_lambda" {
  name = "iam_for_lambda"

  assume_role_policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
POLICY
  inline_policy {
    name = "perms"
    policy = jsonencode(
      {
        "Version" : "2012-10-17",
        "Statement" : concat(
          [
            {
              "Effect" : "Allow",
              "Action" : [
                "logs:CreateLogGroup",
                "logs:CreateLogStream",
                "logs:PutLogEvents"
              ],
              "Resource" : "*"
            }
          ]
        )
      }
    )
  }
}

resource "aws_lambda_function" "secret-santa_lambda" {
  function_name = var.function_name
  role          = aws_iam_role.iam_for_lambda.arn
  timeout       = 15
  image_uri     = var.secret_santa_image
  package_type  = "Image"
}

resource "aws_lambda_permission" "lambda_permision" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.secret-santa_lambda.arn
  principal     = "apigateway.amazonaws.com"
}

resource "aws_acm_certificate" "secret-santa_cert" {
  domain_name       = var.subdomain_url
  validation_method = "DNS"
  lifecycle {
    create_before_destroy = true
  }
}

data "aws_route53_zone" "secret-santa_zone" {
  name = "${var.domain_url}."
}

resource "aws_route53_record" "secret-santa_record" {
  for_each = {
    for dvo in aws_acm_certificate.secret-santa_cert.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = data.aws_route53_zone.secret-santa_zone.zone_id
}

resource "aws_route53_record" "secret-santa_main_record" {
  zone_id = data.aws_route53_zone.secret-santa_zone.zone_id
  name    = var.subdomain_url
  type    = "A"

  alias {
    name                   = aws_api_gateway_domain_name.secret-santa_domain.cloudfront_domain_name
    zone_id                = aws_api_gateway_domain_name.secret-santa_domain.cloudfront_zone_id
    evaluate_target_health = false
  }
}

resource "aws_acm_certificate_validation" "acm_cert_validation" {
  depends_on = [
    data.aws_route53_zone.secret-santa_zone,
    aws_route53_record.secret-santa_record
  ]
  certificate_arn         = aws_acm_certificate.secret-santa_cert.arn
  validation_record_fqdns = [for record in aws_route53_record.secret-santa_record : record.fqdn]
}

resource "aws_api_gateway_resource" "lambda_api_gateway" {
  rest_api_id = aws_api_gateway_rest_api.secret-santa-back-rest-api.id
  parent_id   = aws_api_gateway_rest_api.secret-santa-back-rest-api.root_resource_id
  path_part   = "{proxy+}"
}

resource "aws_api_gateway_rest_api" "secret-santa-back-rest-api" {
  name = "secret-santa-backend-${var.enviroment}"
}

resource "aws_api_gateway_method" "secret-santa-api-gateway-method" {
  rest_api_id   = aws_api_gateway_rest_api.secret-santa-back-rest-api.id
  resource_id   = aws_api_gateway_resource.lambda_api_gateway.id
  http_method   = "ANY"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "secret-santa-api-gateway-integration" {
  rest_api_id             = aws_api_gateway_rest_api.secret-santa-back-rest-api.id
  resource_id             = aws_api_gateway_resource.lambda_api_gateway.id
  http_method             = aws_api_gateway_method.secret-santa-api-gateway-method.http_method
  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.secret-santa_lambda.invoke_arn
}

resource "aws_api_gateway_deployment" "secret-santa-api-gateway-deployment" {
  depends_on = [
    aws_api_gateway_integration.secret-santa-api-gateway-integration
  ]
  rest_api_id = aws_api_gateway_rest_api.secret-santa-back-rest-api.id
  stage_name  = "v1"
}

resource "aws_api_gateway_base_path_mapping" "secret-santa_backend_api_gw_domain_mapping" {
  api_id      = aws_api_gateway_rest_api.secret-santa-back-rest-api.id
  stage_name  = aws_api_gateway_deployment.secret-santa-api-gateway-deployment.stage_name
  domain_name = aws_api_gateway_domain_name.secret-santa_domain.domain_name
}

resource "aws_api_gateway_domain_name" "secret-santa_domain" {
  depends_on      = [aws_acm_certificate_validation.acm_cert_validation]
  domain_name     = aws_acm_certificate.secret-santa_cert.domain_name
  certificate_arn = aws_acm_certificate_validation.acm_cert_validation.certificate_arn
}
