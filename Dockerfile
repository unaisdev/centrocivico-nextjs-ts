FROM node:18

WORKDIR /centrocivico-nextjs-ts

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD [ "npm", "run","dev" ]
