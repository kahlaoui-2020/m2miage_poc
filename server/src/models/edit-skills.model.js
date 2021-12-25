const sql = require('../database/db.connect')


const Category = (category) => {
    this.id_categorie = category.id_categorie,
    this.categorie = category.categorie

}
const EditSkills = (category) => {
    this.id_categorie = category.id_categorie,
    this.categorie = category.categorie

}

EditSkills.getCategories = (result) => {
    let request = `SELECT * FROM categories`;
    sql.query(request, (err, res) => {
        if(err) {
            result(err, null);
            return;
        }else if(res.length) {
            result(null, res);
            return;
        }else {
            result({message: 'not_found'}, null);
            return;
        }
    })
}

EditSkills.getSkills = (id_categorie, result) => {
    let request = `SELECT * FROM competences WHERE id_categorie = ${id_categorie}`
    sql.query(request, (err, res) => {
        if(err) {
            result(err, null);
            return;
        }else if(res.length) {
            result(null, res);
            return;

        }else {
            result({message: ('not_found')}, null);
            return;
        }
    })
}

EditSkills.getLevels = (result) => {
    let request = `SELECT * FROM niveaux`
    sql.query(request, (err, res) => {
        if(err) {
            result(err, null);
            return;
        }else if(res.length) {
            result(null, res);
            return;

        }else {
            result({message: ('not_found')}, null);
            return;
        }
    })
}



module.exports = EditSkills
