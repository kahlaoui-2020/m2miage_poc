const editCert = require('../models/edit-certs.model');


exports.getOrganismes = (req, res) => {
    editCert.getAllOrganismes((err, data) => {
        if(err) res.send({error: true, message: `No organisation  was found` });
        else res.send({error: false, data: data, message: '' })
    })
}
exports.getCertsByOrg = (req, res) => {
    let org = req.params.organisme;
    editCert.readCertsByOrg(org, (err, data) => {
        if(err) res.send({error: true, message: `No certifications  was found` });
        else res.send({error: false, data: data, message: '' })
    })
}

exports.getCerts = (req, res) => {
    editCert.getCerts((err, data) => {
        if (err) {
            res.send({error: true, message: `No certifications was found` });
        } else res.send({error: false, data: data, message: '' })
    })
}

exports.getUserCerts = (req, res) => {
    let id = req.params.id_utilisateur

    editCert.get_UserCerts(id, (err, data) => {
        if (err) {
            res.send({error: true, message: `No certifications was founded for this user` });
        } else res.send({error: false, data: data, message: '' })
    })
}


exports.setUserCert = (req, res) => {
    let id = req.params.id_utilisateur;
    let data = req.body;
    editCert.set_UserCert(id, data, (err, data) => {
        if (err) {
            console.log(err)
            res.send({error: true, message: `No certification has been added for this user` });
        } else res.send({error: false, data: data, message: '' })
    })
}

exports.deleteUserCerts = (req, res) => {
    let id = req.params.id_utilisateur;
    let data = req.body;
    editCert.delete_UserCerts(id, data, (err, data) => {
        if (err) {
            console.log(err)
            res.send({error: true, message: `No certification has been deleted for this user` });
        } else res.send({error: false, data: data, message: '' })
    })
}