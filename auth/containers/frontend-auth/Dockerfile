FROM node:latest AS ng-builder
RUN mkdir -p /app
WORKDIR /app
COPY src/package.json /app
RUN npm install
COPY src/. /app
RUN $(npm bin)/ng build --prod

FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=ng-builder /app/dist/src /usr/share/nginx/html

EXPOSE 80