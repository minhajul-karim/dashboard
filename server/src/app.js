const express = require('express');

const app = express();

app.get('/', (req, res) => {
  let a = 'hello';
  a = 'hi';
  res.send(a);
});

app.listen(5000, () => {
  console.log(`App is running at 5000`);
});
