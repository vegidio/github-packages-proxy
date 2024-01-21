variable "aws_region" {
    type        = string
    description = "Your AWS Region"
    nullable    = false
}

variable "aws_key" {
    type        = string
    description = "Your AWS Key"
    sensitive   = true
    nullable    = false
}

variable "aws_secret" {
    type        = string
    description = "Your AWS Secret"
    sensitive   = true
    nullable    = false
}

variable "github_user" {
    type        = string
    description = "Your GitHub User"
    sensitive   = true
    nullable    = false
}

variable "github_token" {
    type        = string
    description = "Your GitHub Token"
    sensitive   = true
    nullable    = false
}