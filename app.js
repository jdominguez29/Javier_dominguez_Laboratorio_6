const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000

const ESTUDIANTES = [
    {
        nombre: "Keyla E. Muñoz",
        edad: 21,
    },
    {
        nombre: "Naresh Quiroz",
        edad: 22
    }
];
//Intermediario
app.use(bodyParser.json())

//Controladores

//Leer todos los estudiantes
app.get('/Estudiantes/',(req, res) => {
    res.json({
        cantidad: ESTUDIANTES.length,        
        estudiantes: ESTUDIANTES
    });
});

//Traer estudiante especifico
app.get('/estudiantes/:indice', (req, res) => {
    res.json(ESTUDIANTES[req.params.indice]);
});

//Agregar Estudiante
app.post('/estudiantes/', (req, res) =>{
    ESTUDIANTES.push(req.body);
    res.json(req.body);
});
app.listen(port,() => console.log('Example app listening at http://localhost:'+port));