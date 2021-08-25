const mongoose = require('mongoose')

const MatiereSchema = mongoose.Schema({
    libele:{
        type:String,
        required:true
    },
    niveau:{
        type:Number,
        reaquired: true,
    },
    chargeHoraire:{
        type:Number,
        required:true
    }
})

module.exports= mongoose.model('Matiere', MatiereSchema)