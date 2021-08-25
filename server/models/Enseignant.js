const mongoose = require('mongoose')

const ClasseSchema = mongoose.Schema({
    nom:{
        type: String,
        required: true,
    },
    prénom:{
        type: String,
        required: true,
    },

    sexe:{
        type: String,
        required: true,
    },

    email:{
        type:String,
        required:true
    },
    
    mdp:{
        type: String,
        required: true,
        
    },

    spécialité:{
        type:[String]
    },

    
    
    
    
   
})

module.exports= mongoose.model('Enseignants', ClasseSchema)