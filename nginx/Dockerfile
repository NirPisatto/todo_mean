# Use the official Nginx base image
FROM nginx

# Copy custom configuration file to the container
COPY ./nginx.conf /etc/nginx/nginx.conf

# Expose port 80 for web traffic
EXPOSE 80

# Define the command to start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
