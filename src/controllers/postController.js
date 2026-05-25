const { Post, PostImage } = require('../models');

// Crear un POST
const createPost = async (req, res) => {
  try {
    const {description, userNickName} = req.body; 
    const newPost = await Post.create({
      description, 
      userNickName
    })
    res.status(201).json({
      message : "El post fue creado con exito", 
      post : newPost
    })
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el post', error: error.message });
  }
};

// Obtener todos los Posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.status(200).json({ data: posts });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los posts', error: error.message });
  }
};

// Obtener un Post por su ID
const getPostById = async (req, res) => {
  try {
    const { id } = req.params; 
    const post = await Post.findByPk(id, {
      include: [{ model: PostImage, as: 'images' }]
    });

    if (!post) {
      return res.status(404).json({ message: 'Post no encontrado' });
    }

    res.status(200).json({ data: post });
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar el post', error: error.message });
  }
};

// Actualizar un Post
const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;

    const post = await Post.findByPk(id);
    if (!post) {
      return res.status(404).json({ message: 'Post no encontrado' });
    }

    post.description = description;
    await post.save(); 
    res.status(200).json({ message: 'Post actualizado', data: post });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar', error: error.message });
  }
};

// Eliminar un Post
const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByPk(id);

    if (!post) {
      return res.status(404).json({ message: 'Post no encontrado' });
    }

    await post.destroy();
    res.status(200).json({ message: 'Post eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar', error: error.message });
  }
};

// Agregar/Eliminar imágenes después de publicado
const addImageToPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { url } = req.body;

    const post = await Post.findByPk(id);
    if (!post) return res.status(404).json({ message: 'Post no encontrado' });

    const newImage = await PostImage.create({ url, postId: id });
    res.status(201).json({ message: 'Imagen agregada', data: newImage });
  } catch (error) {
    res.status(500).json({ message: 'Error al agregar imagen', error: error.message });
  }
};

const removeImageFromPost = async (req, res) => {
  try {
    const { imageId } = req.params;
    const image = await PostImage.findByPk(imageId);
    
    if (!image) return res.status(404).json({ message: 'Imagen no encontrada' });

    await image.destroy();
    res.status(200).json({ message: 'Imagen eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar imagen', error: error.message });
  }
};


module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  addImageToPost,
  removeImageFromPost
};
