# Build stage
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Enable corepack
RUN corepack enable

# Copy package files first for better layer caching
COPY package*.json ./
COPY pnpm-lock.yaml ./
COPY pnpm-workspace.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the UI application
RUN npx nx build ui

# Production stage - only the build output
FROM nginx:alpine

# Copy ONLY the built files from builder stage
COPY --from=builder /app/app/ui/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]