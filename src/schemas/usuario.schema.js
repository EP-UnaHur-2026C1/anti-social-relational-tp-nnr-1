const joi = require('joi')

const usuarioSchema = joi.object({
    nickName : joi.string().min(3).max(100).required().messages({
        "string.base": "El nombre debe ser text", 
        "string.empty" : "El nickName es obligatorio", 
        "string.min" : "El nickName debe tener al menos 3 caracteres", 
        "any.required" : "El nickName es obligatorio"
    }), 
    nombre : joi.string().min(3).max(100).required().messages({
        "string.base" : "El nombre es requerido",
        "string.empty" : "El nombre obligatorio", 
        "string.min" : "El nombre debe de tener al menos 3 caracteres", 
        "any.required" : "El nombre es obligatorio"
    }), 
    email : joi.string().email().required().messages({
        'string.email': 'El email no es válido', 
        "string.empty" : "El email debe ser obligatorio", 
        "any.required" : "El email es obligatorio"
    }), 
    password: joi.string().min(6).max(12).required().messages({
        "string.base" : "La contraseña debe ser un texto", 
        "string.empty" : "La contraseña debe ser obligatoria", 
        "string.min" : "La contraseña debe tener minimo 6 caracteres", 
        "any.required" : "La contraseña es obligatoria"
    })
})

module.exports = usuarioSchema