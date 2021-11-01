FROM node:16-alpine3.11

WORKDIR /app

# env variables defined in docker-compose are only used in docker run command
# while variables in Dockerfile are also used during docker build
# because react-scripts inject env variables during build time, we need to set them here
ENV REACT_APP_API_HOST http://localhost:3001

COPY . .

RUN npm i
RUN npm run build
