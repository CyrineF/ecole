const express = require("express")
const router = express.Router()
const Matiere= require("../models/Matiere")

router.post('/', (req, res) => {
    const ens = new Matiere({
        ...req.body
   });
    ens.save()
      .then(() => res.status(201).json({ message: 'une nouvelle matiere est bien enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  });


router.get('/',(req, res)=>{
    Matiere.find()
       .then(ens => res.status(200).json(ens))
       .catch(error => res.status(400).json({ error }));
});

router.put('/:id', (req, res)=>{
    Matiere.findByIdAndUpdate({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Matiere modifié !'}))
    .catch(error => res.status(400).json({ error }));
})

router.get('/:niveau', (req, res,) => {
    Matiere.find({ niveau: req.params.niveau })
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(404).json({ error }));
  });

router.delete('/:id', (req,res)=>{
    Matiere.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Matiere supprimé !'}))
    .catch(error => res.status(400).json({ error }));
})


module.exports = router