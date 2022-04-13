ARG NODE_TAG=16.14-alpine
ARG YARN_VERSION=3.2.0

FROM node:${NODE_TAG} as base
RUN apk update
## Globally install turbo and set yarn version
RUN npm i -g turbo

# Prune the workspace for the `server` app
FROM base as pruner
COPY . /app
WORKDIR /app
RUN turbo prune --scope=server --docker

# Add pruned lockfile and package.json's of the pruned subworkspace
FROM pruner AS installer
ARG YARN_VERSION

COPY --from=pruner /app/out/json/ .
COPY --from=pruner app/out/yarn.lock ./yarn.lock

RUN yarn set version $YARN_VERSION
# Install only the deps needed to build the target
RUN yarn install

# Copy source code of pruned subworkspace and build
FROM installer as builder
COPY --from=installer /app/ .
COPY --from=pruner /app/out/full/ .
# Currently no build step
#RUN turbo run build --scope=server

# Start the app
FROM node:${NODE_TAG} as runner
ARG YARN_VERSION

RUN mkdir -p /app && chown -R node:node /app
WORKDIR /app
USER node

COPY --chown=node --from=builder /app/package.json /app/yarn.lock ./
COPY --chown=node --from=builder /app/node_modules ./node_modules
COPY --chown=node --from=builder /app/ .

RUN yarn set version $YARN_VERSION

CMD ["yarn", "--cwd", "apps/server", "start"]
