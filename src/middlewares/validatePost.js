const postSchema = require('../schemas/post.schema')
// Procesa el request
const validatePost = (req, res, next) => {
  const { error } = postSchema.validate(req.body);
  
  if (error) {
    const errorMessages = error.details.map(detail => detail.message);
    return res.status(400).json({ status: 'Error', errors: errorMessages });
  }
  
  next(); 
};

module.exports = validatePost;