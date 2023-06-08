# Base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
#COPY ../../package*.json ./
COPY package.json ./
RUN rm -rf node_modules

# Install dependencies
RUN npm i
#COPY apps/connection/src/prisma ./src/prisma
 
# Run command on prisma folder
#WORKDIR /app/src/prisma
#RUN npx prisma generate


# Copy the compiled code
#COPY ./dist/apps/connection/main.js ./dist/apps/connection
COPY ../dist/apps/app2/ ./dist/apps/app2/

# Set the command to run the microservice
CMD ["node", "dist/apps/app2/main.js"]
EXPOSE 5002
