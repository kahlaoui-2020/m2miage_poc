const editDB = require('../models/edit-db.model');

exports.putCategorie = (req, res) => {
    let categorie = req.body.categorie;
    console.log(categorie)
    editDB.insertCategorie(categorie, (err, data) => {
        if (err) {
            console.log(err)
            res.send({ error: true, message: `Error adding categorie` });
        } else res.send({ error: false, data: data })
    })
}

exports.putSkill = (req, res) => {
    let skill = req.body.skill, id_categorie = req.body.id_categorie;
    console.log(skill, id_categorie)
    editDB.insertSkill(skill, id_categorie, (err, data) => {
        if (err) {
            res.send({ error: true, message: `Error adding skill` });
        } else res.send({ error: false, data: data })
    })
}

exports.putCertification = (req, res) => {
    let titule = req.body.titule, organisme = req.body.organisme;
    console.log(titule, organisme)
    editDB.insertCertification(titule, organisme, (err, data) => {
        if (err) {
            res.send({ error: true, message: `Error adding certification` });
        } else res.send({ error: false, data: data })
    })
}
