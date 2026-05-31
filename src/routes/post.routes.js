const express = require('express');
const { 
    createPost, getAllPosts, getPostById,
     updatePost, deletePost, addImageToPost,
      removeImageFromPost,
    removerTagDePost,agregarTagAPost,verRelacionPostTag
  } = require('../controllers/post.controller');

const router = express.Router();
const { validatePost, validarIdPost, validarUpdatePost } = require('../middlewares/validatePost');

/**
 * @swagger
 * /api/posts/posttags : 
 *  get : 
 *    summary : Ver las relaciones de post y tags
 *    tags : [PostTag]
 *    responses : 
 *      200 : 
 *        description : Lista de relaciones de post y tag
*/
router.get('/posttags',verRelacionPostTag );

/** 
 * @swagger 
 * /api/posts: 
 *  post: 
 *      summary : Crear Post
 *      tags : [Post]
 *      requestBody: 
 *          required: true
 *          content : 
 *              application/json: 
 *                  schema: 
 *                      type: object
 *                      required : 
 *                          -desciption
 *                          -userNickName
 *                      properties : 
 *                          description : 
 *                              type : string
 *                              minLength : 3
 *                              maxLength : 100
 *                          userNickName : 
 *                              type : string 
 *                              minLength : 3
 *                              maxLength : 20                          
 *      responses : 
 *          201:
 *              description : Post creado correctamente         
*/
router.post('/', validatePost, createPost);

/**
 * @swagger
 * /api/posts : 
 *  get : 
 *      summary : Obtener posts
 *      tags : [Post]
 *      responses : 
 *          200 : 
 *              description : Lista de post
*/
router.get('/', getAllPosts);

/**
 * @swagger
 * /api/posts/{id} : 
 *  get : 
 *      summary : Obtener post por id 
 *      tags : [Post]
 *      parameters : 
 *          - in : path
 *            name : id
 *            required : true
 *            description : ID del post en la base de datos 
 *            schema :
 *              type : integer
 *              example : 1
 *      responses : 
 *          200 : 
 *              description : Post encontrado
*/
router.get('/:id', getPostById);

/**
 * @swagger
 * /api/posts/{id} : 
 *  put : 
 *      summary : Actualizar post por id
 *      tags : [Post]
 *      
 *      parameters : 
 *          - in : path 
 *            name : id
 *            required : true 
 *            description : ID del Post
 *            schema : 
 *              type : integer 
 *              example : 1 
 *      requestBody : 
 *          required : true 
 *          content : 
 *              application/json : 
 *                  schema : 
 *                      type : object
 *                      properties : 
 *                         description : 
 *                            type : string
 *                            minLength : 3
 *                            maxLength : 100
 *      responses : 
 *          200 :
 *              description : Post actualizado correctamente 
 *          404 : 
 *              description : Post no encontrado 
*/
router.put('/:id',validarIdPost ,validarUpdatePost ,updatePost);

/**
 * @swagger
 * /api/posts/{id} : 
 *  delete : 
 *      summary : Eliminar post por id 
 *      tags : [Post]
 *      parameters : 
 *          - in : path
 *            name : id
 *            required : true
 *            description : ID del Post en la base de datos 
 *            schema :
 *              type : integer
 *              example : 1
 *      responses : 
 *          200 : 
 *              description : Post eliminado correctamente
 *          404 : 
 *              description : Post no encontrado 
*/
router.delete('/:id',validarIdPost, deletePost);

/** 
 * @swagger 
 * /api/posts/{id}/images: 
 *  post: 
 *      summary : Crear imagen para un post
 *      tags : [Post]
 *      parameters : 
 *          - in : path 
 *            name : id
 *            required : true 
 *            description : ID del usuario
 *            schema : 
 *              type : integer 
 *              example : 1 
 *      requestBody: 
 *          required: true
 *          content : 
 *              application/json: 
 *                  schema: 
 *                      type: object
 *                      required : 
 *                          -url
 *                      properties : 
 *                          url :
 *                            type : string
 *                            minLength: 3
 *                            maxLength : 20
 *                            description : "Para agregar imagenes es necesario el url"                        
 *      responses : 
 *          201:
 *              description : Imagen creado correctamente         
*/
router.post('/:id/images',validarIdPost ,addImageToPost);

/**
 * @swagger
 * /api/posts/{id}/images/{imageId} : 
 *  delete : 
 *      summary : Eliminar Imagen por id 
 *      tags : [Post]
 *      parameters : 
 *          - in : path
 *            name : id
 *            required : true
 *            description : ID del post en la base de datos 
 *            schema :
 *              type : integer
 *              example : 1
 *          - in : path
 *            name : imageId
 *            required : true
 *            description : ID de la imagen a eliminar en la base de datos 
 *            schema : 
 *                type : integer
 *                example : 2
 *      responses : 
 *          200 : 
 *              description : Imagen eliminado correctamente
 *          404 : 
 *              description : Imagen no encontrada
*/
router.delete('/:id/images/:imageId', removeImageFromPost);

/**
 * @swagger
 * /api/posts/{id}/tags : 
 *  post : 
 *      summary : Agregar tags por id 
 *      tags : [Post]
 *      parameters : 
 *          - in : path
 *            name : id
 *            required : true
 *            description : ID del Post en la base de datos 
 *            schema :
 *              type : integer
 *              example : 1
 *      requestBody: 
 *          required: true
 *          content : 
 *              application/json: 
 *                  schema: 
 *                      type: object
 *                      required : 
 *                          -tagId
 *                      properties : 
 *                          tagId : 
 *                             type : integer
 *                             example : 1
 *      responses : 
 *          200 : 
 *              description : Post eliminado correctamente
 *          404 : 
 *              description : Post no encontrado 
*/
router.post('/:id/tags', agregarTagAPost);

/**
 * @swagger
 * /api/posts/{postId}/tags/{tagId} : 
 *  delete : 
 *      summary : Eliminar Tags por id 
 *      tags : [Post]
 *      parameters : 
 *          - in : path
 *            name : postId
 *            required : true
 *            description : ID del post en la base de datos 
 *            schema :
 *              type : integer
 *              example : 1
 *          - in : path
 *            name : tagId
 *            required : true
 *            description : ID de la imagen a eliminar en la base de datos 
 *            schema : 
 *                type : integer
 *                example : 2
 *      responses : 
 *          200 : 
 *              description : Tag eliminado correctamente
 *          404 : 
 *              description : Tag no encontrada
*/
router.delete('/:postId/tags/:tagId', removerTagDePost);


module.exports = router;
