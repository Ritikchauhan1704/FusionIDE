FROM node:21.7.1

RUN npm install -g pnpm

WORKDIR /app

COPY package.json .
COPY pnpm-lock.yaml ./

RUN pnpm install

COPY . .

EXPOSE 8080

CMD ["yarn","dev"]