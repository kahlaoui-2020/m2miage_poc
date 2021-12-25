const editSkills = require('../models/edit-skills.model');

exports.getCategories = (req, res) => {
    editSkills.getCategories((err, data) => {
        if(err) {
            if(err.message === 'not_found')
                res.status(404).send({message: `No category was found`});
            else res.status(500).send({message: `Error retrieving categories`});

        }else res.send(data)
    })
}

exports.getSkills = (req, res) => {
    editSkills.getSkills(req.query.id_categorie, (err, data) => {
        if(err) {
            if(err.message === 'not_found')
                res.status(404).send({message: `No skills was found`});
            else res.status(500).send({message: `Error retrieving skills`});

        }else res.send(data)
    })
}

exports.getLevels = (req, res) => {
    editSkills.getLevels((err, data) => {
        if(err) {
            if(err.message === 'not_found')
                res.status(404).send({message: `No levels was found`});
            else res.status(500).send({message: `Error retrieving levels`});

        }else res.send(data)
    })
}