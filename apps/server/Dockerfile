FROM node:16-alpine as base
RUN apk update

## Globally install turbo
RUN npm i -g turbo

# Prune the workspace for the `server` app
FROM base as pruner
COPY . .
RUN turbo prune --scope=server --docker

# Add pruned lockfile and package.json's of the pruned subworkspace
FROM pruner AS installer
COPY --from=pruner /out/json/ .
COPY --from=pruner /out/yarn.lock ./yarn.lock
# Install only the deps needed to build the target
RUN yarn set version 3.2.0
RUN yarn install

# Copy source code of pruned subworkspace and build
FROM installer as builder
COPY --from=installer . .
COPY --from=pruner /out/full/ .
# Currently no build step
#RUN turbo run build --scope=server

# Start the app
FROM builder as runner
EXPOSE 3000
RUN ['yarn', '--cwd', 'apps/server', 'start']
