//import express library
const express = require('express');

//create an instance of express
const app = express();

//create server port
const port = 3000;

//start server listening
app.listen(port, () => {
  console.log(`Server start running on port http://localhost:${port}`);
});