console.log("UnaHur - Anti-Social net");
require('dotenv').config()
const express = require('express'); 
const app = express(); 
const port = process.env.port || 3000; 
const db = require('./models')
const userRoutes = require('./routes/usuario.routes')

app.use(express.json())
app.use('/api', userRoutes)

app.listen(port, async () => {
    await db.sequelize.sync()
    console.log(`Servidor corriendo en http://localhost:${port}`)
})