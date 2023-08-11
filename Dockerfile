FROM nginx:alpine

# Copy static content to Nginx's default directory
COPY . /usr/share/nginx/html
RUN apk --update add ca-certificates
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
