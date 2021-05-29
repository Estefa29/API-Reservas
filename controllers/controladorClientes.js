
const { request,response }=require('express');


const Clientemodelo=require('../models/Clientemodelo.js');
async function consultarReserva(peticion=request,respuesta=response){
    let id=peticion.params.id;
    let datosconsultados=await Clientemodelo.findById(id);
    
    respuesta.json({
        estado:true,
        mensaje:datosconsultados
    });

    
}
async function consultarReserva1(peticion=request,respuesta=response){

    
    let datosconsultados1=await Clientemodelo.find();
    respuesta.json({
        estado:true,
        mensaje:datosconsultados1
    });

    
}

async function crearReserva(peticion=request,respuesta=response){

    let datosCliente=peticion.body;

    let cliente=new Clientemodelo(datosCliente);
    await cliente.save();

    respuesta.json({
        estado:true,
        mensaje:'Cliente agregado con exito',
        datos:cliente
    });

}

async function editarReserva(peticion=request,respuesta=response){

    let id=peticion.params.id;
    let datosCliente=peticion.body;

    await Clientemodelo.findByIdAndUpdate(id,datosCliente);

    respuesta.json({
        estado:true,
        mensaje:'Cliente actualizado con exito'
    });

}

async function eliminarReserva(peticion=request,respuesta=response){

    let id=peticion.params.id;
    await Clientemodelo.findByIdAndDelete(id);

    respuesta.json({
        estado:true,
        mensaje:'cliente eliminado con exito'
    });

}



module.exports={
    consultarReserva,
    consultarReserva1,
    // buscarFutbolistas,
    crearReserva,
    // agregarFutbolista,
    editarReserva,
    // editarFutbolista,
    eliminarReserva
    // eliminarFutbolista
}
