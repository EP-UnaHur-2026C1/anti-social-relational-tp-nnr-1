const express = require('express');
const { createPost, getAllPosts, getPostById, updatePost, deletePost, addImageToPost, removeImageFromPost  } = require('../controllers/post.controller');
const router = express.Router();
const {validatePost} = require('../middlewares/postValidation');

router.post('/', validatePost, createPost);
router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);
router.post('/:id/images', addImageToPost);
router.delete('/:id/images/:imageId', removeImageFromPost);

module.exports = router;
