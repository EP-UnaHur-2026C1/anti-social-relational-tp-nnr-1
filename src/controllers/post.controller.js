const { Post, PostImage, PostTag, Tag, Comment } = require('../models'); 

// Crear un POST
const createPost = async (req, res) => {
  try {
    const { description, userNickName, images } = req.body;
    const newPost = await Post.create({ description, userNickName });

    if (images && images.length > 0) {
        const imagesData = images.map(url => ({
        url: url,
        postId: newPost.id
      }));
      await PostImage.bulkCreate(imagesData);
    }

    const postCompleto = await Post.findByPk(newPost.id, {
      include: [{ model: PostImage, as: 'images' }]
    });

    res.status(201).json({ message: 'Post creado con éxito', data: postCompleto });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el post', error: error.message });
  }
};

// Obtener todos los Posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        { model: PostImage, as: 'images' },
        {model:Tag,as: 'tags', attributes:['id','nombre'],
      through: {attributes: []}},
      {model:Comment,as: "comentario", attributes:['id','descripcion']}
    ],
    order: [['createdAt', 'DESC']] 
  });
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
    const { description } = req.body;

    const post = req.post
    
    await post.update({description})

    res.status(200).json({ message: 'Post actualizado', data: post });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar', error: error.message });
  }
};

// Eliminar un Post
const deletePost = async (req, res) => {
  try {

    await req.post.destroy()

    res.status(200).json({ message: 'Post eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar', error: error.message });
  }
};

// Agregar/Eliminar imágenes después de publicado
const addImageToPost = async (req, res) => {
  try {
    const post = req.post
    const { url } = req.body;

    const newImage = await PostImage.create({ url, postId: post.id });

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


//Aca estaria lo de post - tag


const agregarTagAPost = async (req, res) => {
  try {
    const { id } = req.params;      
    const { tagId } = req.body;

    const postTag = await PostTag.create({
      postId: id,
      tagId
    });

    res.status(201).json({
      message: "Tag agregado al post",
      data: postTag 
    });

  } catch (error) {
    res.status(500).json({ message: "Error", error: error.message });
  }
};

const removerTagDePost = async (req, res) => {
  try {
    const { postId, tagId } = req.params;

    await PostTag.destroy({
      where: {
        postId,
        tagId
      }
    });

    res.status(200).json({
      message: "Tag eliminado del post"
    });

  } catch (error) {
    res.status(500).json({ message: "Error", error: error.message });
  }
};


//Extra
const verRelacionPostTag = async (req, res) => {
  try {
    const postTags = await PostTag.findAll();
    res.status(200).json({mensaje:"Relaciones obtenidas correctamente", data: postTags });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las relaciones', error: error.message });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  addImageToPost,
  removeImageFromPost,
  agregarTagAPost,
  removerTagDePost,
  verRelacionPostTag
};