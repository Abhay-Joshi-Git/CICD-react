FROM node:alpine as builder
WORKDIR /usr/app
COPY ./package*.json ./
RUN npm set progress=false && npm i --silent
COPY . .
RUN npm run build

FROM nginx
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /usr/app/build /usr/share/nginx/html
