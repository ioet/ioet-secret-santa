variable "key_admins" {
  type        = list(string)
  description = "KMS Key Admins"
  default = [
    "arn:aws:iam::058565519576:user/secret-santa-cd-user"
  ]
}
