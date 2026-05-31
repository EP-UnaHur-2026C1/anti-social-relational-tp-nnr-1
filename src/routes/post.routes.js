const express = require('express');
const { 
    createPost, getAllPosts, getPostById,
     updatePost, deletePost, addImageToPost,
      removeImageFromPost,
    removerTagDePost,agregarTagAPost,verRelacionPostTag
  } = require('../controllers/post.controller');

const router = express.Router();
const { validatePost, validarIdPost, validarUpdatePost } = require('../middlewares/validatePost');


router.get('/posttags',verRelacionPostTag );
router.post('/', validatePost, createPost);
router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.put('/:id',validarIdPost ,validarUpdatePost ,updatePost);
router.delete('/:id',validarIdPost, deletePost);
router.post('/:id/images',validarIdPost ,addImageToPost);
router.delete('/:id/images/:imageId', removeImageFromPost);
router.post('/:id/tags', agregarTagAPost);
router.delete('/:postId/tags/:tagId', removerTagDePost);


module.exports = router;
