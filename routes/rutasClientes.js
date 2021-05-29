const { Router }= require('express');


const { consultarReserva }= require('../controllers/controladorClientes.js');
const { consultarReserva1 }= require('../controllers/controladorClientes.js');
const { crearReserva }= require('../controllers/controladorClientes.js');
const { editarReserva }= require('../controllers/controladorClientes.js');
const { eliminarReserva}= require('../controllers/controladorClientes.js');

const {validarPeticion}=require('../validations/validaciones.js');


const {check}=require('express-validator');


let validaciones=Array(

    check('nombre',"este campo es obligatorio").not().isEmpty(),
    check('apellido',"este campo es obligatorio").not().isEmpty(),
    check('telefono',"este campo es obligatorio").not().isEmpty(),
    check('fechaInicioReserva',"este campo es obligatorio").not().isEmpty(),
    check('fechaFinReserva',"este campo es obligatorio").not().isEmpty(),
    check('numeroPersonas',"este campo es obligatorio").not().isEmpty(),
    check('tipoPaquete',"este campo es obligatorio").not().isEmpty(),
    
    validarPeticion

);


const rutas=Router();


rutas.get('/clientes',consultarReserva1);
rutas.get('/clientes/:id',consultarReserva);
rutas.post('/cliente/nuevo',validaciones,crearReserva); 
rutas.put('/cliente/editar/:id',editarReserva);
rutas.delete('/cliente/eliminar/:id',eliminarReserva)



module.exports=rutas;