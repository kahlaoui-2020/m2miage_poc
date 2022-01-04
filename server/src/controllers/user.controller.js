const User = require('../models/user.model');

exports.findUser = (req, res) => {
    User.findById(req.query.id_utilisateur, (err, data) => {
        if(err) {
            if(err.message === 'not_found') 
                res.status(404).send({message: `Not found user with id ${req.params.id}`});
            else res.status(500).send({message: `Error retrieving user with id ${req.params.id}`});

        } else res.send(data);
    });
}





exports.findUserBySkills = (req, res) => {
    User.findBySkills(req.query.id_user, req.query.id, (err, data) => {
        if(err) {
            res.send({ error: true, message: `Error retrieving employee`});

        } else {
            res.send({error: false, data ,message: {}});}
    });
}

function ParseRespnse(responses) {
    let object = {
      
        competences: []
    };
    for(let response of responses) {
        object.nom = response.nom;
        object.prenom = response.prenom;
        object.email = response.email;
        object.num_tel = response.num_tel;
        object.url_photo = response.url_photo;
        object.competences.push(responses.forEach(r => {
            if(r.nom === object.nom && r.prenom === object.prenom) {
                console.log(r.competence)
                return r.competence
            }
            
        }));
    
    }
    console.log(object)











}

exports.requestSkill = (req, res) => {

    User.sendSkillRequest(req.body.id_utilisateur, req.body.skill, (err, data) => {
        if(err) {
            res.send({ error: true, message: `Error sending message`});

        } else {
            res.send({error: false, data ,message: {}});}
    });
}

exports.requestCert = (req, res) => {
    User.sendCertRequest(req.body.id_utilisateur, req.body.cert, (err, data) => {
        if(err) {
            res.send({ error: true, message: `Error sending message`});

        } else {
            res.send({error: false, data ,message: {}});}
    });
}

exports.removeRequest = (req, res) => {
    User.deleteRequest(req.params.id_request, (err, data) => {
        if(err) {
            res.send({ error: true, message: `Error deleting request`});

        } else {
            res.send({error: false});}
    });
}

exports.getRequest = (req, res) => {
    User.getRequest((err, data) => {
        if(err) {
            res.send({ error: true, message: `Error deleting request`});

        } else {
            res.send({error: false, data: data});}
    });
}

exports.getNotifs = (req, res) => {
    User.isNotifs((err, data) => {
        if(err) {
            res.send({ error: true, message: `Error deleting request`});

        } else {
            res.send(data)
        }
    });
}