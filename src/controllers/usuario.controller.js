const {User, Post, Comment} = require('../models')

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
    try {
        const users = await User.findAll({
        attributes: ['id','nickName', 'nombre', 'email'], 
        include : [
                {
                    model: Post,
                    as : "posts", 
                    attributes : ["userNickName", "description"]
                }, 
                {
                    model: Comment, 
                    as : "comments",
                    attributes : ["descripcion", "userNickName"]
                }
            ]
        })
    res.status(200).json(users)
    } catch (error) {
        res.status(500).json({error : "Error al obtener usuarios"})
    }
}

const getUsuarioId = async (req, res) => {
    const usuario = req.usuario
    res.status(200).json({usuario})
}

const updateUsuario = async(req, res) => {
    try{
        const {id} = req.params

        if (req.body.nickName) {
      return res.status(400).json({
        message: "Proximamente disponible."
      });
    }
        const {nombre, email, password} = req.body
        const user = req.usuario
        await user.update({
            nombre, 
            email, 
            password
        })
        res.status(200).json(user)
    } catch {
        res.status(500).json({
            error : "Error al actualizar el producto"
        })
    }
}

const deleteUsuario = async(req, res) => {
    try {
        const {id} = req.params 
        const user = req.usuario 
        await user.destroy()
        res.status(200).json({message : "Usuario eliminado"})
    } catch (error) {
        res.status(500).json({
            error : "Error a eliminar el producto"
        })
    }
}

module.exports = {
    createUsuario, 
    getUsuarios, 
    getUsuarioId,
    updateUsuario, 
    deleteUsuario
}