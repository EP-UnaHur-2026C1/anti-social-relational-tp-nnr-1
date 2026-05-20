const { Tag } = require('../models')

const obtenerTags = async (req,res) =>{
    try{
            const tag = await Tag.findAll(
                
            ) 
            res.status(200).json(tag)}
        catch(error){
            res.status(500).json({error: error.message})
        }
}

const obtenerTagPorId = async (req,res) =>{
    try{

        const tag = req.tag
        
        res.status(200).json(tag)
        
    }
    catch(error){
        console.error("Algo salio mal", error.message);
        res.status(500).json({mensaje: "Error del servidor"})
    }
}

const crearTag = async (req,res) =>{
    try{
            const { nombre } = req.body
    
            const nuevoTag = await Tag.create({ nombre })
    
            res.status(201).json(nuevoTag)
        }
        catch(error){
            console.error("Algo salio mal", error.message);
            res.status(500).json({mensaje: "Error del servidor"})
        }
}

const borrarTag = async (req,res) =>{
    try{

        await req.tag.destroy()

        res.status(200).json({mensaje:`Tag borrado con exito`})
    }
    catch(error){
        console.error("Algo salio mal", error.message);
        res.status(500).json({mensaje: "Error del servidor"})
    }
}

const modificarTag = async (req,res) =>{
    try{
        
        const tag = req.tag

        const { nombre } = req.body

        const nuevoTag = await tag.update({ nombre })

        res.status(200).json({mensaje:`Tag actualizado`})
    }
    catch(error){
        console.error("Algo salio mal", error.message);
        res.status(500).json({mensaje: "Error del servidor"})
    }
}

module.exports = {
    obtenerTags, obtenerTagPorId, crearTag, borrarTag, modificarTag
}