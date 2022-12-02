variable "domain_url" {
  type        = string
  description = "the url of the domain for secret-santa app"
  default     = "secretsanta.ioet.com"
}

variable "subdomain_url" {
  type        = string
  description = "the url of the subdomain for secret-santa app"
  default     = "api.secretsanta.ioet.com"
}

variable "enviroment" {
  type        = string
  description = "The name of enviroment to deploy for the secret-santa app"
  default     = "staging"
}

variable "function_name" {
  type        = string
  description = "The function's name used in a lambda for the secret-santa app"
  default     = "lambda_handler"
}

variable "file_name" {
  type        = string
  description = "The name of the file used in a lambda for the secret-santa app"
  default     = "main"
}

variable "secret_santa_image" {
  type      = string
  sensitive = true
}

variable "aws_region" {
  type    = string
  default = "us-east-1"
}
