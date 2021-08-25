const express = require("express")
const user = express.Router()
const Administrateur = require("../models/Administrateur")

user.post('/', (req, res) => {
  const adm = new Administrateur({
    ...req.body
  });
  adm.save()
    .then(() => res.status(201).json({ message: 'un nouveau enseignant est enregistré !' }))
    .catch(error => res.status(400).json({ error }));
});

user.get('/:id', (req, res,) => {
  Administrateur.findOne({ _id: req.params.id })
    .then(thing => res.status(200).json(thing))
    .catch(error => res.status(404).json({ error }));
});


user.get('/', (req, res) => {
  Administrateur.find()
    .then(ens => res.status(200).json(ens))
    .catch(error => res.status(400).json({ error }));
});


user.put('/:id', (req, res) => {
  Administrateur.findByIdAndUpdate(req.params.id, {
    familyname: req.body.newfamilyname, firstname: req.body.newfirstname, email: req.body.newemail, password: req.body.newpassword, poste: req.body.newposte, adresse: req.body.newadresse, numero: req.body.numero 
  }).then((result) => {
    res.send(JSON.stringify(result))
  })
    .catch((error) => { result.status(400).json({ error }) })
})

user.delete('/:id', (req, res) => {
  Administrateur.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Administrateur supprimé !' }))
    .catch(error => res.status(400).json({ error }));
})


module.exports = user