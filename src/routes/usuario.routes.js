const {Router} = require('express'); 
const validarUsuario = require('../middleware/validarUsuario');
const { createUsuario, getUsuarios, getUsuarioId } = require('../controllers/usuario.controller');
const validarIdUsuario = require('../middleware/validarIdUsuario');
const router = Router(); 

//Se definen las rutas de usuario
router.post('/usuarios', validarUsuario, createUsuario)
router.get('/', getUsuarios)
router.get('/usuarios/:id', validarIdUsuario, getUsuarioId)

module.exports = router