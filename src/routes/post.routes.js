const express = require('express');
const { 
    createPost, getAllPosts, getPostById,
     updatePost, deletePost, addImageToPost,
      removeImageFromPost,
    removerTagDePost,agregarTagAPost,verRelacionPostTag
  } = require('../controllers/post.controller');

const router = express.Router();
const validatePost = require('../middlewares/validatePost');


router.get('/posttags',verRelacionPostTag );
router.post('/', validatePost, createPost);
router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);
router.post('/:id/images', addImageToPost);
router.delete('/:id/images/:imageId', removeImageFromPost);
router.post('/:id/tags', agregarTagAPost);
router.delete('/:postId/tags/:tagId', removerTagDePost);


module.exports = router;
