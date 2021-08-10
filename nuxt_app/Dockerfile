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
# -------------------------------------------------------
# # build stage
# FROM node:10-alpine as build-stage

# WORKDIR /usr/src/app
# COPY package*.json ./

# RUN apk update
# RUN apk add --no-cache git

# RUN yarn install --only=prod
# COPY . .
# RUN yarn run build

# COPY

# # production stage
# FROM nginx:stable-alpine as production-stage
# RUN rm /etc/nginx/conf.d/default.conf
# COPY default.conf /etc/nginx/conf.d/default.conf
# COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]


FROM node:11.13.0-alpine

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/
COPY package*.json ./
RUN yarn install

# build necessary, even if no static files are needed,
# since it builds the server as well
RUN yarn run build

# expose 5000 on container
EXPOSE 3000

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0
# set app port
ENV NUXT_PORT=3000

# start the app
CMD [ "npm", "start" ]
