FROM nginx:alpine

# Copy static content to Nginx's default directory
COPY . /usr/share/nginx/html
RUN apk --update add ca-certificates
RUN apk --no-cache add php php-fpm php-opache php-openssl php-curl php-ldap
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
