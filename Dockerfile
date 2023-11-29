# Use a lightweight image as the base image
FROM node:14-alpine

# Set the working directory
WORKDIR /merocv/

# Copy the build output from the repository
COPY build/ ./build

# Install serve globally
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Command to serve the app
CMD ["serve", "-s", "build"]