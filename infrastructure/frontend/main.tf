terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.9.0"
    }
  }

  backend "s3" {
    bucket  = "ioet-secret-santa-tfstate"
    key     = "terraform/state/ioet-secret-santa.tfstate"
    region  = "us-east-1"
    encrypt = true
  }
}

provider "aws" {
  region = "us-east-1"
}

#This example creates a certificate for a subdomain and also the distribution for cloudfront and an S3 to allocate the website
module "secret-santa-website" {
  source                = "git@github.com:ioet/infra-terraform-modules.git//aws-static-website?ref=v0.0.28"
  create_route53_domain = true
  bucket_name           = "ioet-secret-santa"
  zone_name             = "secretsanta.ioet.com"
  website_domain        = "www.secretsanta.ioet.com"
  error_page            = "index.html"
  index_page            = "index.html"
}

resource "aws_route53_zone" "secresanta_zone" {
  name = "secretsanta.ioet.com"
}
