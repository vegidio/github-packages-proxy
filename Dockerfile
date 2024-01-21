### Build Image ###
FROM node:alpine AS BUILD_IMAGE

# Copying project
COPY /src /var/project
COPY /src/package-docker.json /var/project/package.json

# Building
WORKDIR /var/project
RUN yarn && yarn build

#### Main Image ###
FROM node:alpine
LABEL org.opencontainers.image.source="https://github.com/vegidio/github-packages-proxy"

# Define the image version
ENV IMAGE_VERSION=$VERSION

COPY --from=BUILD_IMAGE /var/project/dist/server.mjs /usr/local/bin/

CMD ["server.mjs"]