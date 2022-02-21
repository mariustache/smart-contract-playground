FROM node:latest
WORKDIR /web3app
COPY ./package.json package.json
RUN npm install
COPY . .
CMD ["npm", "start"]