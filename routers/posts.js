//import express library
const express = require('express');

//create an instance of express.Router
const router = express.Router();

//index
router.get('/', (req, res) => {
  res.send("Post list");
});

//show
router.get('/:slug', (req, res) => {
  res.send(`Show post with slug: ${req.params.slug}`);
});

//store
router.post('/', (req, res) => {
  res.send(`Insert a new post`);
});

//update
router.put('/:slug', (req, res) => {
  res.send(`Update all the post with slug: ${req.params.slug}`);
});

//modify
router.patch('/:slug', (req, res) => {
  res.send(`Partial modify the post with slug: ${req.params.slug}`);
});

//delete
router.delete('/:slug', (req, res) => {
  res.send(`Delete post with slug: ${req.params.slug}`);
});

//export router
module.exports = router;