FROM node:20 AS builder

WORKDIR /app


COPY package*.json ./

RUN npm install


COPY . .

EXPOSE 8080

CMD ["npm", "start"]