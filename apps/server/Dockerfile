FROM node:16-alpine

RUN mkdir -p /app && chown -R node:node /app
WORKDIR /app
USER node

COPY --chown=node index.ts .
COPY --chown=node package.json .

RUN npm install

CMD ["npm", "start"]
