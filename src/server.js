const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.json({message : "App is running on docker container"});
});

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});
