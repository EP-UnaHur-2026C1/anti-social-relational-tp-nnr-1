const Joi = require('joi')

const tagSchema = Joi.object({
    nombre: Joi.string().trim().min(3).max(25).required()
})

module.exports = { tagSchema }