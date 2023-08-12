# Use the official Nginx base image
FROM nginx:latest

# Remove the default Nginx configuration file
RUN rm -v /etc/nginx/nginx.conf

# Copy your custom Nginx configuration
COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Remove the default site configuration
RUN rm -v /etc/nginx/conf.d/default.conf

# Copy the static files from the build directory into the Nginx HTML directory
COPY dist /usr/share/nginx/html

# Expose port 80 for incoming traffic
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]

