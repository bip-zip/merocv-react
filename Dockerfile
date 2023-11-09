FROM node:18-alpine

WORKDIR /merocv/

COPY public/ /merocv/public
COPY src/ /merocv/src
COPY package.json /merocv/

RUN npm install

CMD ["npm", "start"]