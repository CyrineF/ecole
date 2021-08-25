const express = require("express")
const router = express.Router()
const Ens = require("../models/Enseignant")


router.post('/', (req, res) => {
    const ens = new Ens({
        ...req.body
    });
    ens.save()
        .then(() => res.status(201).json({ message: 'un nouveau enseignant est enregistré !' }))
        .catch(error => res.status(400).json({ error }));
});

router.get('/', (req, res) => {
    Ens.find()
        .then(ens => res.status(200).json(ens))
        .catch(error => res.status(400).json({ error }));
});

router.get('/:id', (req, res,) => {
    Ens.find({ _id: req.params.id })
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(404).json({ error }));
});





router.put('/:id', (req, res) => {
    Ens.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet modifié !' }))
        .catch(error => res.status(400).json({ error }));
})

router.delete('/:id', (req, res) => {
    Ens.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
        .catch(error => res.status(400).json({ error }));
})


module.exports = router