FROM node:7
RUN mkdir /node-PostgreSQL-docker
ADD . /node-PostgreSQL-docker
WORKDIR /node-PostgreSQL-docker
RUN npm i
EXPOSE 80
CMD ["npm", "start"]
