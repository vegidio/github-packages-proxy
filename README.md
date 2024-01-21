# github-packages-proxy

Reverse proxy to GitHub Packages to let the final users download Maven libraries without the need for a GitHub token.

## 🤖 Usage

There are 2 ways to deploy this proxy: either using a Lambda Function on AWS or running a Docker container.

In both cases you will need to create a [Personal Access Token](https://github.com/settings/tokens) (PAT) with the scope `read:packages`. This is the token that the proxy will use to seamless communicate with your GitHub Packages and expose the libraries to your users without forcing them to create their own GitHub tokens.

With the token created, now you need to set two environment variables, either on your AWS Lambda or on your Docker container:

- `GITHUB_USER`: your GitHub username where the libraries are hosted.
- `GITHUB_TOKEN`: the GitHub token that you created in the previous step.

## 🛠️ Build

1. Install AWS SAM in your computer: `brew install aws-sam-cli`
2. In the project's root directly, type: `sam build`
3. To simulate an ALB event, type: `sam local invoke --event events/alb.json | jq`

## 📝 License

**github-packages-proxy** is released under the MIT License. See [LICENSE](LICENSE) for details.

## 👨🏾‍💻 Author

Vinicius Egidio ([vinicius.io](http://vinicius.io))