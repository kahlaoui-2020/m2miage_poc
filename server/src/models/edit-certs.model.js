const { request } = require('express');
const sql = require('../database/db.connect')



const EditCert = () => {}

EditCert.getAllOrganismes = (result) => {
    let request = 'SELECT DISTINCT(organisme) from certifications';
    sql.query(request, (err, res) => {
        if(err) {
            result(err, null);
            return;
        }else {
            result(null, res);
            return;
        }
    })
}
EditCert.readCertsByOrg = (org, result) => {
    let request = `SELECT * from certifications WHERE organisme = '${org}'`;
    sql.query(request, (err, res) => {
        if(err) {
            result(err, null);
            return;
        }else {
            result(null, res);
            return;
        }
    })
}
EditCert.getCerts = (result) => {
    let request = `SELECT * FROM certifications`;
    sql.query(request, (err, res) => {
        if(err) {
            result(err, null);
            return;
        }else {
            result(null, res);
            return;
        }
    })
}
EditCert.get_UserCerts = (id, result) => {
    let request = `SELECT * FROM certifications_utilisateur cu join  certifications c on cu.id_certification = c.id_certification WHERE id_utilisateur = ${id}`;
    sql.query(request, (err, res) => {
        if(err) {
            result(err, null);
            return;
        }else {
            result(null, res);
            return;
        }
    })
}

EditCert.set_UserCert = (id, body, result) => {
    let id_cert = body.id_certification, mat = body.mat_certification, score = body.score, date_d = body.date_d, date_f = body.date_f != ''? body.date_f : '9999-12-30'
    let request = `INSERT INTO certifications_utilisateur(id_utilisateur, id_certification, mat_certification, score, date_d, date_f) VALUES(${id}, ${id_cert}, '${mat}', '${score}', '${date_d}', '${date_f}')`;
    sql.query(request, (err, res) => {
        if(err) {
            result(err, null);
            return;
        }else {
            result(null, res);
            return;
        }
    })
}

EditCert.delete_UserCerts = (id, data, result) => {
    console.log(data)
    let request = `DELETE FROM certifications_utilisateur WHERE id_utilisateur = ${id} AND id_certification in (${data}) `;
    sql.query(request, (err, res) => {
        if(err) {
            console.log(err)
            result(err, null);
            return;
        }else {
            result(null, res);
            return;
        }
    })
}

EditCert.getTreeCerts = (result) => {
    let request = `select distinct(organisme),`
                        +`json_array(`
                        +`(select group_concat(titule)`
                        +`from certifications ci where ci.organisme = c.organisme)`
                        +`) AS certifications `
                        +`from certifications c`
    sql.query(request, (err, res) => {
        if(err) {
            console.log(err)
            result(err, null);
            return;
        }else {                        
            result(null, res);
            return;
        }
    })
}

module.exports = EditCert;