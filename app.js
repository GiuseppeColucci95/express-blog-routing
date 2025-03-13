//import express library
const express = require('express');

//create an instance of express
const app = express();

//create server port
const port = 3000;

//import routers
const postsRouter = require('./routers/posts');

//start server listening
app.listen(port, () => {
  console.log(`🟢 Server start running on port http://localhost:${port}`);
});

//home router
app.get('/', (req, res) => {
  res.send("Welcome to our Server!");
});

//posts middleware
app.use('/posts', postsRouter);