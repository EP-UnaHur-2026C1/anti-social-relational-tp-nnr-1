const { Router } = require('express')
const tagController = require('../controllers/tag.controller')
const validacion = require('../middlewares/validarTag')

const router = Router()

/**
 * @swagger
 * /tag : 
 *  get : 
 *      summary : Obtener tags
 *      tags : [Tag]
 *      responses : 
 *          200 : 
 *              description : Lista de tags
*/
router.get('/',tagController.obtenerTags)

/**
 * @swagger
 * /tag/{id} : 
 *  get : 
 *      summary : Obtener tag por id 
 *      tags : [Tag]
 *      parameters : 
 *          - in : path
 *            name : id
 *            required : true
 *            description : ID del tag en la base de datos 
 *            schema :
 *              type : integer
 *              example : 1
 *      responses : 
 *          200 : 
 *              description : Tag encontrado
*/

router.get('/:id',validacion.validarIdTag, tagController.obtenerTagPorId)

//Se definen las rutas de usuario
/** 
 * @swagger 
 * /tag: 
 *  post: 
 *      summary : Crear tag
 *      tags : [Tag]
 *      requestBody: 
 *          required: true
 *          content : 
 *              application/json: 
 *                  schema: 
 *                      type: object
 *                      required : 
 *                          -nombre
 *                      properties : 
 *                          nombre : 
 *                              type : string 
 *                              minLength: 3
 *                              maxLength : 10
 *  
 *      responses : 
 *          201:
 *              description : Tag creado correctamente         
*/
router.post('/', validacion.validarTag, tagController.crearTag)

/**
 * @swagger
 * /tag/{id} : 
 *  put : 
 *      summary : Actualizar tag por id
 *      tags : [Tag]
 *      
 *      parameters : 
 *          - in : path 
 *            name : id
 *            required : true 
 *            description : ID del tag
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
 *                          nombre : 
 *                              type : string
 *                              minLength : 3
 *                              maxLength : 10
 *      responses : 
 *          200 :
 *              description : Tag actualizado correctamente 
 *          404 : 
 *              description : Tag no encontrado 
*/

router.put('/:id', validacion.validarIdTag, validacion.validarTag, tagController.modificarTag)

/**
 * @swagger
 * /tag/{id} : 
 *  delete : 
 *      summary : Eliminar Tag por id 
 *      tags : [Tag]
 *      parameters : 
 *          - in : path
 *            name : id
 *            required : true
 *            description : ID del tag en la base de datos 
 *            schema :
 *              type : integer
 *              example : 1
 *      responses : 
 *          200 : 
 *              description : Tag eliminado correctamente
 *          404 : 
 *              description : Tag no encontrado 
*/
router.delete('/:id', validacion.validarIdTag, tagController.borrarTag)

module.exports = router
