# Intro

A product management application that lets us create, view, update and delete products.

This project consists of two separate applications -

- **Frontend**: https://gooods.netlify.app
- **Backend**: https://gooods.herokuapp.com

Each separate project directory contains an individual README file.

The Frontend application is hosted in **Netlify** and the backend application is hosted in **Heroku**.

# Stack

### Frontend

The frontend application uses React.

### Backend

The backend application is created with the ExpressJS library of NodeJS.

### Database

MongoDB has been used to store the data. The backend uses the library called **mongoose** and cloud service **MongoDB Atlas** to interact with MongoDB.

### Deployment using docker-compose

All three components of the project can be installed and run separately following individual README files. An easier way would be using the docker-compose tool. A configuration file is given in the root directory of the project titled **"docker-compose. yaml"**. The following command needs to be run to make all the docker containers up and running from the source code.

```
docker-compose up -d
```

The flag **"-d"** is used for detaching the whole process from the terminal session once done. If successful, the frontend and backend applications should be accessible in the following URLs.

- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000/api/products
