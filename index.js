const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

// Endpoint por defecto
app.get('/', (req, res) => {
    res.send("Bienvenido a el servidor de API's");
});

// Definiendo la conexión a mondodb con mongoose
mongoose.connect('mongodb+srv://danielvazquez:uDxcNzeplxNqRBK5@cluster0.n7ayk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/sample_airbnb')
.then( () => {
    console.log("Conectado a la base de datos");
    // Definiendo el puerto por el cual estará respondiendo el servidor de API's
    app.listen(3000, () => {
        console.log("El servidor esta respondiendo en el puerto 3000");
    });
})
.catch( () => console.log("Ocurrio un error en la conexión"));