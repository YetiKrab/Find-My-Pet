const express = require('express');
const petController = require('../controller/petController');

const router = express.Router();

// data request route handler
router.get('/:zip', petController.getPosts, (req, res) => {
  return res.status(200).json(res.locals.posts);
});

// posting route handler
router.post('/', petController.addPost, petController.getPosts, (req, res) => {
  return res.status(200).json(res.locals.posts);
});

// deleting route handler
router.delete('/', petController.deletePost, petController.getPosts, (req, res) => {
  return res.status(200).json(res.locals.delete);
});

module.exports = router;
