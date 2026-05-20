const express = require('express');
const app = express();
const db = require('./models');

//poner rutas aca
const routerComentario = require('./routes/comment.routes')
//const routerTag = require('./routes/tag.routes')

const PORT = 3000

app.use(express.json())


//app.uses

app.use("/comentarios", routerComentario)
//app.use("/tag", routerTag)


async function start() {
   try {
      await db.sequelize.sync();

      app.listen(PORT, () => {
         console.log(`Servidor corriendo en http://localhost:${PORT}`);
      });

   } catch(err) {
      console.error(err);
   }
}

start();