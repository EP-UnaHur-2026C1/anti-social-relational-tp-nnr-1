const Joi = require('joi');

// Schema del Post
const postSchema = Joi.object({
  description: Joi.string().min(1).required().messages({
    'string.empty': 'La descripción no puede estar vacía.',
    'any.required': 'La descripción es un campo obligatorio.'
  }),
  userNickName: Joi.string().required().messages({
    'any.required': 'El nickName del usuario es obligatorio para asociar el post.'
  }),
  images: Joi.array().items(Joi.string().uri()).optional().messages({
    'string.uri': 'Cada imagen debe ser una URL válida.'
  })
});

const updatePostSchema = Joi.object({
  description: Joi.string().min(1).messages({
    'string.empty': 'La descripción no puede estar vacía.'})
  });

module.exports = { postSchema, updatePostSchema } 