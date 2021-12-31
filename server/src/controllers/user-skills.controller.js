const userSkills = require('../models/user-skills.model');

exports.getAllSkills = (req, res) => {
    let userID = req.query.id_utilisateur;
    userSkills.findAllSkills(userID, (err, data) => {
        if (err) {
            if (err.message === 'not_found')
                res.send({ error: true, message: `Not found user with id ${userID}` });
            else res.send({ error: true, message: `Error retrieving user ` });

        } else res.send(data);
    });
}
exports.getSkillsByCat = (req, res) => {
    let userID = req.query.id_utilisateur, categoryID = req.query.id_categorie;
    userSkills.findSkillsByCat(userID, categoryID, (err, data) => {
        if (err) {
            if (err.message === 'not_found')
                res.send({ message: `Not found user with id ${userID}` });
            else res.send({ message: `Error retrieving user with id ${userID}` });

        } else res.send(data);
    });
}

exports.postSkills = (req, res) => {
    let data = req.body;
    userSkills.addSkills(data, (err, data) => {
        if (err) res.send({ error: true, message: `skills has not been added` });
        else res.send({error: false, message: data});
    });
}

exports.deleteSkills = (req, res) => {
    let data = req.body;
    userSkills.removeSkills(data, (err, data) => {
        if (err) res.send({ error: true, message: `Skills has not been deleted` });
        else res.send({error: false, message: data});
    });
}

exports.putSkills = (req, res) => {
    let data = req.body;
    userSkills.updateSkills(data, (err, data) => {
        if (err) res.send({ error: true, message: `Skills has not been updated` });
        else res.send({error: false, message: {}});
    });
}