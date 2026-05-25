
console.log("UnaHur - Anti-Social net");
const express = require('express');
require('dotenv').config()

const db = require('./models')
const userRoutes = require('./routes/usuario.routes')
const postRoutes = require('./routes/post.routes')
const routerTag = require('./routes/tag.routes')
const routerComentario = require('./routes/comment.routes')
const app = express();
const PORT = process.env.port || 3000;


app.use(express.json());
app.use('/api/posts',postRoutes);
app.use('/api', userRoutes);
app.use("/tag", routerTag);
app.use("/comentarios", routerComentario)


//SINCRO CON BASE DE DATOS
app.listen(PORT, async() => {
    try {
        console.log('Sincronizando base de datos SQLite...');
        await db.sequelize.sync({ force: false });
        console.log('¡Base de datos SQLite sincronizada correctamente!');
        console.log(`==================================================`);
        console.log(` Servidor corriendo en: http://localhost:${PORT} `);
        console.log(`==================================================`);
    } catch (error) {
        console.error('Error conectando con la base de datos:', error.message);
    }

}) 


