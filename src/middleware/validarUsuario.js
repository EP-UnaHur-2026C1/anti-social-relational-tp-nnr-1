const usuarioSchema = require('../schemas/usuario.schema')

const validarUsuario = (req, res, next) => {
    const {error} = usuarioSchema.validate(req.body)
    if(error) {
        return res.status(400).json({error : error.details[0].message})
    }
    next()
}

module.exports = validarUsuario