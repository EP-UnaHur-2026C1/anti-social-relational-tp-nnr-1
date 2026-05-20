const { Router } = require('express')
const tagController = require('../controllers/tag.controller')
const validacion = require('../middlewares/validarTag')

const router = Router()

router.get('/',tagController.obtenerTags)

router.get('/:id',validacion.validarIdTag, tagController.obtenerTagPorId)

router.post('/', validacion.validarTag, tagController.crearTag)

router.put('/:id', validacion.validarIdTag, validacion.validarTag, tagController.modificarTag)

router.delete('/:id', validacion.validarIdTag, tagController.borrarTag)

module.exports = router
