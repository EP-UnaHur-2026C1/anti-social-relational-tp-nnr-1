const { Router } = require('express')
const commentController = require('../controllers/comment.controllers')
const validacion = require('../middlewares/validarComment')

const router = Router()

router.get('/' ,commentController.obtenerComentarios)

router.get('/:id' ,validacion.validarIdComentario ,commentController.obtenerComentarioPorId)

router.post('/',validacion.validarComentario, commentController.crearComentario)

router.put('/:id',validacion.validarIdComentario, validacion.validarComentario, commentController.modificarComentario)

router.patch('/:id',validacion.validarIdComentario,validacion.validarUpdateComentario, commentController.updateComentario )

router.delete('/:id', validacion.validarIdComentario, commentController.borrarComentario )

module.exports = router