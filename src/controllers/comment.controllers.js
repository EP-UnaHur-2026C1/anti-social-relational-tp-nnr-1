// const db = require('../models')
const { Comment, User } = require('../models')

const obtenerComentarios = async (req,res) => {
    try{
        const comentario = await Comment.findAll(
            //{include:{model:db.User, as:'un alias', attributes: ["cosas", "mas cosas"]}}
        ) 
        res.status(200).json(comentario)}
    catch(error){
        res.status(500).json({error: error.message})
    }
}

const obtenerComentarioPorId = async (req,res) => {
    try{

        const comentario = req.comment
        
        res.status(200).json(comentario)
        
    }
    catch(error){
        console.error("Algo salio mal", error.message);
        res.status(500).json({mensaje: "Error del servidor"})
    }
}


const crearComentario = async (req,res) => {

    try{
        const { descripcion, visible, postId, userNickName} = req.body

        const nuevoComentario = await Comment.create({ descripcion,visible,postId,userNickName })

        res.status(201).json(nuevoComentario)
    }
    catch(error){
        console.error("Algo salio mal", error.message);
        res.status(500).json({mensaje: "Error del servidor"})
    }

}

const modificarComentario = async (req,res) => {
    try{
        
        const comentario = req.comment

        const { descripcion, visible, postId, userId} = req.body


        const nuevoComentario = await comentario.update({
             descripcion,visible,postId,userId })

        res.status(200).json({mensaje:`Comentario actualizado`})
    }
    catch(error){
        console.error("Algo salio mal", error.message);
        res.status(500).json({mensaje: "Error del servidor"})
    }

}


const borrarComentario = async (req,res) => {
    try{

        await req.comment.destroy()

        res.status(200).json({mensaje:`Comentario borrado con exito`})
    }
    catch(error){
        console.error("Algo salio mal", error.message);
        res.status(500).json({mensaje: "Error del servidor"})
    }
}

const updateComentario = async (req,res) => {
    try{
        
        const comentario = req.comment

        await comentario.update(req.body)

        res.status(200).json({mensaje:`Comentario actualizado`})
    }
    catch(error){
        console.error("Algo salio mal", error.message);
        res.status(500).json({mensaje: "Error del servidor"})
    }
}

module.exports = { 
    obtenerComentarios, obtenerComentarioPorId, crearComentario,
     modificarComentario, borrarComentario, updateComentario }