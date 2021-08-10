# FROM node:10

# ENV APP_ROOT /usr/src/nuxt_app

# # create directory
# RUN mkdir ${APP_ROOT}

# # set work directory
# WORKDIR ${APP_ROOT}

# # copy file to folder
# COPY . ${APP_ROOT}

# # install package and build
# RUN yarn install
# RUN yarn run build

# #expose port in container
# EXPOSE 3000

# #set host
# ENV HOST 0.0.0.0

# CMD ["yarn", "start"]

# build stage
FROM node:10-alpine as build-stage

WORKDIR /usr/src/app
COPY package*.json ./

RUN apk update
RUN apk add --no-cache git

RUN npm install --only=prod
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
RUN rm /etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
