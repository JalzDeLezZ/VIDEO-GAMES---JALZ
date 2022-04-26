FROM node:16-alpine

ENV NODE_ENV production
LABEL version="1.0"
LABEL description="This is the base docker image for back api videogames."

WORKDIR /app

COPY package.json  /app

RUN npm install

COPY . /app


EXPOSE 4001

CMD [ "npm", "run", "serve" ]