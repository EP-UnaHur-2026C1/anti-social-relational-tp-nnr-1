console.log("UnaHur - Anti-Social net");
const express = require('express');
const sequelize = require('./config/database');
require('dotenv').config()

const db = require('./models')
const userRoutes = require('./routes/usuario.routes')
const postRoutes = require('./routes/postRoutes')
const app = express();
const PORT = process.env.port || 3000;


app.use(express.json());
app.use('/api/posts',postRoutes);
app.use('/api', userRoutes)


//SINCRO CON BASE DE DATOS
sequelize.sync({ force: false })
  .then(() => {
    console.log('¡Base de datos SQLite sincronizada correctamente!');
    
    
    app.listen(PORT, () => {
      console.log(`==================================================`);
      console.log(` Servidor corriendo en: http://localhost:${PORT} `);
      console.log(`==================================================`);
    });
  })
  .catch((error) => {
    console.error('Error de programación al conectar la base de datos:', error.message);
  });




app.listen(port, async () => {
    await db.sequelize.sync()
    console.log(`Servidor corriendo en http://localhost:${port}`)
})