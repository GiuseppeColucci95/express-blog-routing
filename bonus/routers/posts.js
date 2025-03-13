//import express library
const express = require('express');

//create an instance of express.Router
const router = express.Router();

//import posts data
const posts = require('../posts');

//index
router.get('/', (req, res) => {
  //return all the posts array
  res.json(posts);
});

//show
router.get('/:slug', (req, res) => {
  //get the post from posts array
  const post = posts[req.params.slug - 1];

  //return the saved post
  res.json(post);
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