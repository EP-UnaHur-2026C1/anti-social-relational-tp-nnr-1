const { commentSchema, updateCommentSchema } = require('../schemas/comment.schema')

const { Comment } = require('../models')

const validarComentario = (req,res,next) => {
    const { error } = commentSchema.validate(req.body)

    if(error){
        return res.status(400).json({
            mensaje:error.message})
    }
    next()
} 

const validarIdComentario = async (req,res,next) => {

    const { id } = req.params

    const comentario = await Comment.findByPk(id)

    if(!comentario){
           return res.status(404).json({mensaje: `No se encontro el comentario con id ${id}`})
        }
    req.comment = comentario
    next()
}

const validarUpdateComentario = async (req,res,next) => {
    const { error } = updateCommentSchema.validate(req.body)

    if(error){
        return res.status(400).json({
            mensaje:error.message})
    }
    next()

}

module.exports = { validarComentario, validarIdComentario, validarUpdateComentario }

