const sql = require('../database/db.connect')


const EditDB = () => {
  

}


EditDB.insertCategorie = (categorie, result) => {
    let request = `INSERT INTO categories(categorie) VALUES('${categorie}')`;
    sql.query(request, (err, res) => {
        if(err) {
            result(err, null);
            return;
        }else  {
            result(null, res);
            return;
        }
    })
};

EditDB.insertSkill = (skill, id_categorie, result) => {
    let request = `INSERT INTO competences(competence, id_categorie) VALUES('${skill}', ${id_categorie})`
    sql.query(request, (err, res) => {
        console.log(err)
        if(err) {
            result(err, null);
            return;
        }else {
            result(null, res);
            return;

        }
    })
};

EditDB.insertCertification = (titule, organisme, result) => {
    let request = `INSERT INTO certifications(titule, organisme) VALUES('${titule}', '${organisme}')`
    sql.query(request, (err, res) => {
        if(err) {
            result(err, null);
            return;
        }else {
            result(null, res);
            return;

        }
    })
};

module.exports = EditDB