const { Router } = require('express')
const commentController = require('../controllers/comment.controllers')
const validacion = require('../middlewares/validarComment')

const router = Router()

/**
 * @swagger
 * /comentarios : 
 *  get : 
 *      summary : Obtener comentarios
 *      tags : [Comentarios]
 *      responses : 
 *          200 : 
 *              description : Lista de comentarios
*/
router.get('/' ,commentController.obtenerComentarios)

/**
 * @swagger
 * /comentarios/{id} : 
 *  get : 
 *      summary : Obtener comentario por id 
 *      tags : [Comentarios]
 *      parameters : 
 *          - in : path
 *            name : id
 *            required : true
 *            description : ID del comentario en la base de datos 
 *            schema :
 *              type : integer
 *              example : 1
 *      responses : 
 *          200 : 
 *              description : Comentario encontrado
*/

router.get('/:id' ,validacion.validarIdComentario ,commentController.obtenerComentarioPorId)

/**
 * @swagger
 * /comentarios:
 *   post:
 *     summary: Crear comentario
 *     tags: [Comentarios]
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *
 *             required:
 *               - descripcion
 *               - visible
 *               - postId
 *               - userNickName
 *
 *             properties:
 *
 *               descripcion:
 *                 type: string
 *                 minLength: 3
 *                 maxLength: 100
 *                 example: "Muy buen post"
 *
 *               visible:
 *                 type: boolean
 *                 description: Indica si el comentario está visible
 *                 example: true
 *
 *               postId:
 *                 type: integer
 *                 description: ID del post asociado al comentario
 *                 example: 1
 *
 *               userNickName:
 *                 type: string
 *                 description: Nickname  del usuario que realizó el comentario
 *                 example: "Leon_dev"
 *
 *     responses:
 *       201:
 *         description: Comentario creado correctamente
 */
router.post('/',validacion.validarComentario, commentController.crearComentario)

/**
 * @swagger
 * /comentarios/{id}:
 *   put:
 *     summary: Crear comentario
 *     tags: [Comentarios]
 *     parameters : 
 *          - in : path
 *            name : id
 *            required : true
 *            description : ID del comentario en la base de datos 
 *            schema :
 *              type : integer
 *              example : 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *
 *             required:
 *               - descripcion
 *               - visible
 *               - postId
 *               - userNickName
 *
 *             properties:
 *
 *               description:
 *                 type: string
 *                 minLength: 3
 *                 maxLength: 100
 *                 example: "Muy buen post"
 *
 *               visible:
 *                 type: boolean
 *                 description: Indica si el comentario está visible
 *                 example: true
 *
 *               postId:
 *                 type: integer
 *                 description: ID del post asociado al comentario
 *                 example: 1
 *
 *               userNickName:
 *                 type: string
 *                 description: NickName del usuario que realizó el comentario
 *                 example: 2
 *
 *     responses:
 *       200:
 *         description: Comentario actualizado correctamente
 *       404:
 *         description : Comentario no encontrado
 */
router.put('/:id',validacion.validarIdComentario, validacion.validarComentario, commentController.modificarComentario)

/**
 * @swagger
 * /comentarios/{id}:
 *   patch:
 *     summary: Crear comentario
 *     tags: [Comentarios]
 *     parameters : 
 *          - in : path
 *            name : id
 *            required : true
 *            description : ID del comentario en la base de datos 
 *            schema :
 *              type : integer
 *              example : 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *
 *               descripcion:
 *                 type: string
 *                 minLength: 3
 *                 maxLength: 100
 *                 example: "Muy buen post"
 *
 *               visible:
 *                 type: boolean
 *                 description: Indica si el comentario está visible
 *                 example: true
 *
 *               postId:
 *                 type: integer
 *                 description: ID del post asociado al comentario
 *                 example: 1
 *
 *               userNickName:
 *                 type: string
 *                 description: NickName del usuario que realizó el comentario
 *                 example: 2
 *
 *     responses:
 *       200:
 *         description: Comentario actualizado correctamente
 *       404:
 *         description : Comentario no encontrado
 */
router.patch('/:id',validacion.validarIdComentario,validacion.validarUpdateComentario, commentController.updateComentario )

/**
 * @swagger
 * /comentarios/{id} : 
 *  delete : 
 *      summary : Eliminar comentario por id 
 *      tags : [Comentarios]
 *      parameters : 
 *          - in : path
 *            name : id
 *            required : true
 *            description : ID del Comentario en la base de datos 
 *            schema :
 *              type : integer
 *              example : 1
 *      responses : 
 *          200 : 
 *              description : Comentario eliminado correctamente
 *          404 :
 *              description : Comentario no encontrado
*/
router.delete('/:id', validacion.validarIdComentario, commentController.borrarComentario )

module.exports = router