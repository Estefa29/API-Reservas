const {model,Schema}=require('mongoose');
// const { number } = require('yargs');
//creo el esqueleto de datos va a tener cada documento(bolsa)de mi coleccion
const ClienteEsqueleto=Schema({

    nombre: {
        type: String,
        required:[true, 'El nombre es necesario para esta reserva']
    },
    apellido:{
        type: String,
        required:[true, 'El apellido es necesario para la reserva']
    },
    telefono:{
        type: Number,
        required: [true, 'El telefono es necesario para la reserva']
    },
    fechaInicioReserva:{
        type: String,
        required: [true, 'La Fecha se requiere']
    },
    fechaFinReserva:{
        type: String,
        required: [true, 'La Fecha  se requiere']
    },
    numeroPersonas:{
        type: Number,
        required: [true, 'el numero de personas se requiere']
    },
    tipoPaquete:{
        type: String,
        required: [true, 'Se requiere el tipo de paquete']
    }
});

module.exports=model('Cliente',ClienteEsqueleto);
