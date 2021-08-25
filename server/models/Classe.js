const mongoose = require('mongoose')

const ClasseSchema = mongoose.Schema({
    nom:{
        type: String,
        required: true,
    },
    niveau:{
        type: Number,
        required: true,
    },
    nb_eleve:{
        type:Number,
        required:true,
    },
    année:{
        type: String,
        required: true,
    },
   
})

module.exports= mongoose.model('Classe', ClasseSchema)