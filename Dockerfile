FROM node:18-alpine

WORKDIR /app

RUN apk add --no-cache tree python3 make g++

RUN mkdir -p /app/src

COPY /src ./src
COPY package-lock.json .
COPY package.json .
COPY tsconfig.json .

RUN tree /app

RUN npm install --no-cache

RUN npx tsc --build

RUN tree /app -I 'node_modules'

EXPOSE 3000

CMD ["node", "src/server.js"]
