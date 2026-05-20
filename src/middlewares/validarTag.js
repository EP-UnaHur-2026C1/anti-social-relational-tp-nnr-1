const { tagSchema } = require("../schemas/tag.schema")
const { Tag } = require('../models')

const validarTag = async(req,res,next) => {
    const { error } = tagSchema.validate(req.body)

    if(error){
        return res.status(400).json({
            mensaje:error.message})
    }
    next()
}

const validarIdTag = async(req,res,next) => {
    const { id } = req.params
    
        const tag = await Tag.findByPk(id)
    
        if(!tag){
               return res.status(404).json({mensaje: `No se encontro el tag con id ${id}`})
            }
        req.tag = tag
        next()
}

module.exports = { validarTag, validarIdTag }