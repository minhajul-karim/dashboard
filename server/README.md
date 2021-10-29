# Intro

This is the backend REST API for the Goods project. It is implemented using the ExpressJS library powered by NodeJS. The NoSQL database platform MongoDB via their cloud service MongoDB Atlast has been used for data storage.

# Run Project

This project can be run as a generic NodeJS application in the development environment or a docker container.

## Set up environment variables

The database connection string is passed to the application using environment variables. A sample environment file is added to the project directory. It needs to be copied as **.env**.

```
cp .env.example .env
```

The values in the newly created environment file need to be replaced according to the development environment.

```
PORT=5000
NODE_ENV=development
MONGO_CONNECTION_STRING=mongodb://localhost:27017/goods
```

## Run using Docker

There is a Dockerfile inside the project directory. Using the `docker` command a docker image can be built from this file. The command needs to be run from inside the **/client** directory.

```
docker build -t goods/server .
```

The "**-t**" flag is for tagging the image with a name. The "**.**" refers to the current directory. The image building time can take a while. Once done, the newly created image can be run as a docker container with the following command.

```
docker run -d --name server -p 5000:5000 goods/server
```

The "**--name**" flag tags the container with a name. The "**-p**" flag maps port 5000 of the host machine to the internal port 5000 of the docker container that was exposed using the Dockerfile. After this, the name of the docker image that we created in the previous step, is passed. Once the container runs successfully, the API can be accessed from localhost http://localhost:5000/api/products.

Mongodb can also be run in a container. There is a docker-compose.yaml file in the directory. Run the following command to start MongoDB.

```
docker-compose up
```

Then run

```
yarn install
yarn start
```

## Run without Docker

The project can be run in the local machine using **npm** or **yarn**. At first, the dependencies need to be installed using the following command.

```
yarn install
```

After installing all the dependencies the project is ready to be run using the following command.

```
yarn start
```

If the project is running successfully in localhost, it can be accessed at http://localhost:5000/api/products.

---

# Project Structure

A modular file structure pattern has been followed in this project. Important files necessary for building the API are stored in **src**.

There are five main directories: **controllers**, **middlewares**, **models**, **router**, & **services**.

## Controllers

Controllers are responsible for controlling the application logic and act as the coordinator between Models and the data user receives.

## Middlewares

Middleware functions, such as validating the requests, error handle, detect duplicate keys (e.g. product name, SKU code) are stored here.

## Models

This directory contains database models and request validation, models.

## Router

Routers that coordinate between API routes and controllers live here.

## Services

Services to access the database are used by the controllers.

## app.js

The app.js file connects all the pieces together. It is used for bootstrapping the whole backend application. After doing all the necessary configuration, the app is exported so that it can be reused for a different purpose.

## index.js

This file creates the application server importing the app.ts file. The port value comes from a config file which in turn comes from the environment variable.

## mongo.js

This file handles database connections.
