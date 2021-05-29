const mongoose = require('mongoose');

async function conectarBD(){
    try{
    await mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});
console.log("exito conectandome al BD");
    }catch(error){
    // }catch("Error"+error){

    }
}

module.exports={conectarBD};