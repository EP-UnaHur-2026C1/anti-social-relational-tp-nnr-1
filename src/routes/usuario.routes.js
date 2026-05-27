const {Router} = require('express'); 
const validarUsuario = require('../middlewares/validarUsuario');
const { createUsuario, getUsuarios, getUsuarioId, updateUsuario, deleteUsuario } = require('../controllers/usuario.controller');
const validarIdUsuario = require('../middlewares/validarIdUsuario');
const router = Router(); 

//Se definen las rutas de usuario
router.post('/usuarios', validarUsuario, createUsuario)
router.get('/', getUsuarios)
router.get('/usuarios/:id', validarIdUsuario, getUsuarioId)
router.patch('/usuarios/:id', validarIdUsuario,validarUsuario, updateUsuario)
router.delete('/usuarios/:id', validarIdUsuario, deleteUsuario)

module.exports = router