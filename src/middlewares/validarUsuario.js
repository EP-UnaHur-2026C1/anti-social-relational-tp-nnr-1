const { usuarioSchema, updateUsuarioSchema } = require('../schemas/usuario.schema')


const validarUsuario = (req, res, next) => {
    const {error} = usuarioSchema.validate(req.body)
    if(error) {
        return res.status(400).json({error : error.details[0].message})
    }
    next()
}

const validarUpdateUsuario = (req,res,next) => {
    const { error } = updateUsuarioSchema.validate(req.body)

    if(error){
        return res.status(400).json({
            mensaje:error.message})
    }
    next()

}

module.exports = { validarUsuario, validarUpdateUsuario }