module "lbd-maven" {
    source = "terraform-aws-modules/lambda/aws"

    function_name = "maven"
    handler       = "lambda.handler"
    runtime       = "nodejs20.x"
    source_path   = "../.aws-sam/build/maven/lambda.js"

    environment_variables = {
        GITHUB_USER  = var.github_user
        GITHUB_TOKEN = var.github_token
    }
}