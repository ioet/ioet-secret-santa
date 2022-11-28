terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.9.0"
    }
  }

  backend "s3" {
    bucket  = "ioet-secret-santa-tfstate"
    key     = "terraform/state/ioet-secret-santa-frontend.tfstate"
    region  = "us-east-1"
    encrypt = true
  }
}

provider "aws" {
  region = "us-east-1"
}

locals {
  zone_name = "secretsanta.ioet.com"
}

module "secret-santa-website" {
  source                = "git@github.com:ioet/infra-terraform-modules.git//aws-static-website?ref=v0.0.28"
  create_route53_domain = true
  bucket_name           = "ioet-secret-santa"
  zone_name             = local.zone_name
  website_domain        = "www.secretsanta.ioet.com"
  error_page            = "index.html"
  index_page            = "index.html"
  depends_on = [
    aws_route53_zone.secresanta_zone
  ]
}

resource "aws_route53_zone" "secresanta_zone" {
  name = local.zone_name
}
