terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.9.0"
    }
  }

  backend "s3" {
    bucket  = "ioet-secret-santa-tfstate"
    key     = "terraform/state/ioet-secret-santa-ci-cd.tfstate"
    region  = "us-east-1"
    encrypt = true
  }
}

provider "aws" {
  region = "us-east-1"
}

locals {
  bucket_name = "ioet-secret-santa-tfstate"
}

data "aws_caller_identity" "current" {}

resource "aws_s3_bucket" "tfstate_bucket" {
  bucket = local.bucket_name
}

resource "aws_s3_bucket_acl" "tfstate_bucket_acl" {
  bucket = aws_s3_bucket.tfstate_bucket.id
  acl    = "private"
}
