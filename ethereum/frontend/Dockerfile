FROM node:latest
EXPOSE 8080
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . .
CMD ["npm", "start"]