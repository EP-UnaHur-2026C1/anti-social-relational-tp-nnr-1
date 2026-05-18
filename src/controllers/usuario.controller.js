const {User} = require('../models')

const createUsuario = async(req, res) => {
    try {
        const {nickName, nombre, email, password} = req.body
        const user = await User.create({
            nickName, 
            nombre,
            email, 
            password
        })
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({error : "Error al crear usuario"})
    }
}

const getUsuarios = async (req, res) => {
    const users = await User.findAll({
        attributes: ['nickName', 'nombre', 'email']
    })
    res.status(200).json(users)
}

const getUsuarioId = async (req, res) => {
    const usuario = req.usuario
    res.status(200).json({usuario})
}
module.exports = {
    createUsuario, 
    getUsuarios, 
    getUsuarioId
}