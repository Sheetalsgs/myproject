# Build stage
FROM node:14 AS build
WORKDIR /app

# Copy package.json and package-lock.json
COPY ../../package*.json ./

# Install dependencies
RUN npm ci

# Copy the source code
COPY . .

# Build the application
RUN npm run build app2

# Production stage
FROM node:14-alpine AS production
WORKDIR /app

# Copy the compiled code from the build stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./

# Install production dependencies
RUN npm ci --production

# Set the command to run the microservice
CMD ["node", "dist/apps/app2/main.js"]
