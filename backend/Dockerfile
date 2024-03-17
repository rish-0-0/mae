FROM node:20-alpine

WORKDIR /usr/src/app

COPY ./backend/package*.json .

RUN sed -i '/file:/d' package.json

RUN npm install --production

COPY ./backend .

ADD ./constants ./node_modules/constants

EXPOSE 4000

CMD [ "npm", "start" ]