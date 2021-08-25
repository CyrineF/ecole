const express = require("express")
const router = express.Router()
const Classe= require("../models/Classe")

router.get('/',(req, res)=>{
    Classe.find().then((classe)=>{
        res.status(200).json(classe)
    }).catch(error=>{ 
        res.status(400).json({ error })
        console.log('erreur')
})

})

router.get('/:id', (req, res,) => {
    Classe.findOne({ _id: req.params.id })
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(404).json({ error }));
  });

router.post('/', (req, res) => {
    const classe = new Classe({
        nom: req.body.nom,
        niveau:req.body.niveau,
        année:req.body.année,
        nb_eleve: req.body.nb_eleve
   });
    classe.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  });

  router.delete('/:id', (req,res)=>{
      const classe_id= req.params.id
      Classe.findById(classe_id).then((classe)=>{
          classe.delete();
          res.status(200).json({ message : "classe supprimée"})
          .catch(error => res.status(400).json({error}))})
  })

router.put('/:id', (req, res)=>{
      Classe.findByIdAndUpdate(req.params.id, {
          nb_eleve : req.body.nb_eleve,
      }).then((result)=>{
          res.send(JSON.stringify(result))
      })
      .catch((error)=>{ result.status(400).json({ error })})
  })

  
module.exports = router