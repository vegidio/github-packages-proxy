terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.33.0"
    }
  }
}

provider "aws" {
  region     = var.aws_region
  access_key = var.aws_key
  secret_key = var.aws_secret
}
