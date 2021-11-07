# Intro

This is the frontend project for the Goods project, a product management application. It is implemented using React. In this application, a user can perform the following actions.

- See a list of products
- Add new products
- Update information of a product
- Delete a product
- Search products

The live version of this application can be accessed via the following URL.
https://gooods.netlify.app/

---

# Run Project

This project can be run as a generic NodeJS application in the development environment or a docker container.

## Set up API URL

The base API URL for this application can be configured in **src/App.js**

```
import Axios from 'axios';

Axios.defaults.baseURL =
  process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'
    ? process.env.REACT_APP_DEV_API_URL
    : process.env.REACT_APP_PROD_API_URL;
```

## Run using Docker

There is a Dockerfile inside the project directory. Using the docker command a docker image can be built from this file. The command needs to be run from inside the **/client** directory.

```
docker build -t goods/client .
```

The "**-t**" flag is for tagging the image with a name. The "**.**" refers to the current directory. The image building time can take a while. Once done, the newly created image can be run as a docker container with the following command.

```
docker run -d --name client -p 3000:3000 goods/client
```

The "**--name**" flag tags the container with a name. The "**-p**" flag maps port 3000 of the host machine to the internal port 3000 of the docker container that was exposed using the Dockerfile. After this, the name of the docker image that we created in the previous step, is passed. Once the container runs successfully, the React application can be accessed from localhost http://localhost:3000.

## Run without Docker

The project can be run in the local machine using **npm** or **yarn**. At first, the dependencies need to be installed using the following command.

```
yarn install
```

After installing all the dependencies the project is ready to be run using the following command.

```
yarn start
```

If the project is running successfully in localhost, it can be accessed at http://localhost:3000.

---

# Project Structure

A modular file structure pattern has been followed in this project. Important files necessary for building the user interface are stored in **src**.

## src directory

Reusable React components, pages, and containers are kept in this directory.

There are three major components in this project.

- enhanced table component to view products.
- add product form component to add new products.
- edit product form component to update products.

Redux is used to manage the application state. It helps to share state amongst all components. If states need to be changed, components call appropriate actions. The actions call to dispatch that is received by reducer and hence the state is updated.

MUI - The React component library is used for the UI.

There are two routes in this application. The root route is "**/**" and another route is "**/products**".
