# pull node download we need
FROM node:16

# set the working directory
WORKDIR /usr/src/app

# copy accross package.json to docker container and run npm install
COPY package*.json ./
RUN npm install

# Copies everything from our source directory to the root of our docker container
COPY . .

# expose port were going to run on and run initilizarion commands
EXPOSE 1337
CMD ["npm","run","dev"]