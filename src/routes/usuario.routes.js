const {Router} = require('express'); 
const validacion = require('../middlewares/validarUsuario');
const { createUsuario, getUsuarios, getUsuarioId, updateUsuario, deleteUsuario } = require('../controllers/usuario.controller');
const validarIdUsuario = require('../middlewares/validarIdUsuario');
const router = Router(); 

//Se definen las rutas de usuario
/** 
 * @swagger 
 * /api/usuarios: 
 *  post: 
 *      summary : Crear usuario
 *      tags : [Usuarios]
 *      requestBody: 
 *          required: true
 *          content : 
 *              application/json: 
 *                  schema: 
 *                      type: object
 *                      required : 
 *                          -nickName
 *                          -nombre
 *                          -email
 *                          -password 
 *                      properties : 
 *                          nickName : 
 *                              type : string 
 *                              minLength : 3
 *                              maxLength : 20 
 *                              description : Nickname unico del usuario
 *                              example : "leon_dev"
 *                          nombre : 
 *                              type : string 
 *                              minLength: 3
 *                              maxLength : 10 
 *                          email : 
 *                              type : string 
 *                              format : email
 *                              example : "nico@gmail.com"
 *                          password : 
 *                              type : string 
 *                              minLength : 6
 *                              example : "123456"
 *  
 *      responses : 
 *          201:
 *              description : Usuario creado correctamente         
*/
router.post('/usuarios', validacion.validarUsuario, createUsuario)

/**
 * @swagger
 * /api/usuarios : 
 *  get : 
 *      summary : Obtener usuarios
 *      tags : [Usuarios]
 *      responses : 
 *          200 : 
 *              description : Lista de usuarios
*/
router.get('/usuarios', getUsuarios)

/**
 * @swagger
 * /api/usuarios/{id} : 
 *  get : 
 *      summary : Obtener usuarios por id 
 *      tags : [Usuarios]
 *      parameters : 
 *          - in : path
 *            name : id
 *            required : true
 *            description : ID del usuario en la base de datos 
 *            schema :
 *              type : integer
 *              example : 1
 *      responses : 
 *          200 : 
 *              description : Usuario encontrado
*/
router.get('/usuarios/:id', validarIdUsuario, getUsuarioId)

/**
 * @swagger
 * /api/usuarios/{id} : 
 *  patch : 
 *      summary : Actualizar usuario por id
 *      tags : [Usuarios]
 *      
 *      parameters : 
 *          - in : path 
 *            name : id
 *            required : true 
 *            description : ID del usuario
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
 *                          nickName : 
 *                              type : string 
 *                              minLength : 3
 *                              maxLength : 20
 *                          nombre : 
 *                              type : string
 *                              minLength : 3
 *                              maxLength : 10 
 *                          email : 
 *                              type : string 
 *                              format : email
 *                          password : 
 *                              type : string 
 *                              minLength : 6
 *      responses : 
 *          200 :
 *              description : Usuario actualizado correctamente 
 *          404 : 
 *              description : Usuario no encontrado 
*/
router.patch('/usuarios/:id', validarIdUsuario,validacion.validarUpdateUsuario, updateUsuario)

/**
 * @swagger
 * /api/usuarios/{id} : 
 *  delete : 
 *      summary : Eliminar usuarios por id 
 *      tags : [Usuarios]
 *      parameters : 
 *          - in : path
 *            name : id
 *            required : true
 *            description : ID del usuario en la base de datos 
 *            schema :
 *              type : integer
 *              example : 1
 *      responses : 
 *          200 : 
 *              description : Usuario eliminado correctamente
 *          404 : 
 *              description : Usuario no encontrado 
*/
router.delete('/usuarios/:id', validarIdUsuario, deleteUsuario)

module.exports = router