FROM node:latest

WORKDIR /usr/src/app

RUN yarn set version stable
COPY package* .

RUN yarn install

COPY . .

EXPOSE 3000 

CMD ["yarn","run","dev"]

