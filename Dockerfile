FROM node:20-alpine
MAINTAINER zsenaoz
WORKDIR /app

COPY package*.json .

RUN npm install
COPY . ./
RUN npm run build

FROM nginx:stable-alpine
COPY --from=0 /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
