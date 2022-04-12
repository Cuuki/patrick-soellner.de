FROM node:16-alpine as base
RUN apk update

## Globally install turbo
RUN npm i -g turbo

# Prune the workspace for the `server` app
FROM base as pruner
COPY . /app
WORKDIR /app
RUN yarn set version ./.yarn/releases/yarn-3.2.0.cjs
RUN turbo prune --scope=server --docker

# Add pruned lockfile and package.json's of the pruned subworkspace
FROM pruner AS installer
COPY --from=pruner /app/out/json/ .
COPY --from=pruner app/out/yarn.lock ./yarn.lock
# Install only the deps needed to build the target
RUN yarn install

# Copy source code of pruned subworkspace and build
FROM installer as builder
COPY --from=installer /app/ .
COPY --from=pruner /app/out/full/ .
# Currently no build step
#RUN turbo run build --scope=server

# Start the app
FROM builder as runner
CMD ["yarn", "--cwd", "apps/server", "start"]
