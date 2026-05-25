const Joi = require('joi')

const commentSchema = Joi.object({
    descripcion: Joi.string().trim().min(3).max(250).required(),
    visible: Joi.boolean().required(),
    postId: Joi.number().integer().positive().required(),
    userNickName: Joi.string().min(1).max(100).required()
})

const updateCommentSchema = Joi.object({
    descripcion: Joi.string().trim().min(3).max(250),
    visible: Joi.boolean(),
    postId: Joi.number().integer().positive(),
    userId: Joi.number().integer().positive()
})

module.exports = { commentSchema, updateCommentSchema }