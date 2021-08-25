const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const AdministrateurSchema = mongoose.Schema({
    familyname:{
        type: String,
        required: true,
    },
    firstname:{
        type: String,
        required: true,
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    numero:{type:Number, required:true},
    adresse:{type:String},
    poste:{type:String, required:true}


   
})

AdministrateurSchema.plugin(uniqueValidator);


module.exports= mongoose.model('Administrateur', AdministrateurSchema)