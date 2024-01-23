module "lbd-maven" {
  source  = "terraform-aws-modules/lambda/aws"
  version = "7.1.0"

  publish       = true
  function_name = "maven"
  handler       = "lambda.handler"
  runtime       = "nodejs20.x"
  source_path   = "../.aws-sam/build/maven/lambda.js"
  timeout       = 15

  environment_variables = {
    GITHUB_USER  = var.github_user
    GITHUB_TOKEN = var.github_token
  }

  allowed_triggers = {
    // Allows triggers from load balancers
    any_alb = { principal = "elasticloadbalancing.amazonaws.com" }
  }
}
