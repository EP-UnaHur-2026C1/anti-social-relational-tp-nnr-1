const { postSchema, updatePostSchema } = require('../schemas/post.schema')
const { Post } = require('../models')

const validatePost = (req, res, next) => {
  const { error } = postSchema.validate(req.body);
  
  if (error) {
    const errorMessages = error.details.map(detail => detail.message);
    return res.status(400).json({ status: 'Error', errors: errorMessages });
  }
  
  next(); 
};

const validarIdPost = async (req, res, next) => {
  const { id } = req.params

  const post = await Post.findByPk(id)

  if (!post) {
    return res.status(404).json({
      message: 'Post no encontrado'
    })
  }

  req.post = post
  next()
}

const validarUpdatePost = (req,res,next) => {
    const { error } = updatePostSchema.validate(req.body)

    if(error){
        return res.status(400).json({
            mensaje:error.message})
    }
    next()

}

module.exports = { validatePost, validarIdPost, validarUpdatePost }