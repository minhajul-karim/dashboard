const app = require('./app');

const port = process.env.PORT || 5000;
const env = process.env.NODE_ENV || 'development';
const address =
  env === 'production'
    ? process.env.PROD_API_ADDRESS
    : `${process.env.DEV_API_ADDRESS}:${port}`;

app.listen(port, () => {
  console.log(`The app is running at::: ${address}`);
});
