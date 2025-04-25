FROM node:20.0.0
WORKDIR /var/www/datr.tech/api
COPY . .
CMD [ "npm", "run", "start"]
