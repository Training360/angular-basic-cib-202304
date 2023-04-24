# Stage 1
FROM node:18-alpine as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
# Stage 2
FROM nginx:alpine
COPY --from=node /app/dist/deploy /usr/share/nginx/html
