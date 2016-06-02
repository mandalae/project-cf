FROM node:6

RUN mkdir -p /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app

EXPOSE 80

CMD ["node", "server.js"]
