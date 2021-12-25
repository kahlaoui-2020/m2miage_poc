const UserSkills = require('../models/user-skills.model');

exports.getAllSkills = (req, res) => {
    let userID = req.query.id_utilisateur;
    UserSkills.findAllSkills(userID, (err, data) => {
        if(err) {
            if(err.message === 'not_found') 
                res.status(404).send({message: `Not found user with id ${userID}`});
            else res.status(500).send({message: `Error retrieving user `});

        } else res.send(data);
    });
}
exports.getSkillsByCat = (req, res) => {
    let userID = req.query.id_utilisateur, categoryID = req.query.id_categorie;
    UserSkills.findSkillsByCat(userID, categoryID, (err, data) => {
        if(err) {
            if(err.message === 'not_found') 
                res.status(404).send({message: `Not found user with id ${userID}`});
            else res.status(500).send({message: `Error retrieving user with id ${userID}`});

        } else res.send(data);
    });
}
