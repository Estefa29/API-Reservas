//se instala  el paquete con el comando de instalacion express npm y yarn y nodemon
// se instala npm install dotenv
const ServidorModelo= require('./models/ServidorModelo.js');

// se trae el paquete de enviroment
require('dotenv').config()
//instancio (saco una copia de mi clase servidor modelo)
let servidor= new ServidorModelo();
//levanto el servidor
servidor.LevantarServidor();
// '/' es el enpoint
// enrutamiento de api(preparamos cada plato)


// app.listen(3000,function(){
// console.log('Estoy conectado al puerto 3000');
// });
//errores 500 back ,400 front
//nodemon app.js