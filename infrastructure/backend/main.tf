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
