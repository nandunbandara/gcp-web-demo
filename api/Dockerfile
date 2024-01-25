FROM node:18.18.2-alpine3.18

WORKDIR /app

COPY ./package* .

RUN npm ci

COPY ./src ./src

ENV PORT=3000

EXPOSE 3000

ENTRYPOINT npm start
