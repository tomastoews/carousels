FROM nginx:alpine

RUN mkdir usr/share/nginx/html/carousels
COPY /dist/ usr/share/nginx/html/carousels

EXPOSE 80