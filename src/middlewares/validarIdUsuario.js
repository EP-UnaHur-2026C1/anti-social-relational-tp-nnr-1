const {User} = require('../models')

const validarIdUsuario = async(req, res, next) => {
    try {
        const {id} = req.params
        const user = await User.findByPk(id)
        if(!user) {
            return res.status(404).json({message : "Usuario no encontrado"})
        }
        req.usuario = user
        next()
    } catch (error) {
        res.status(500).json({
            error : "Error al obtener el usuario "
        })
    }
}

module.exports = validarIdUsuario