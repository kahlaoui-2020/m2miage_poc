const sql = require('../database/db.connect.js')

const User = (user) => {
    this.id_utilisateur = user.id_utilisateur;
    this.nom = user.nom;
    this.prenom = user.prenom;
    this.url_photo = user.url_photo;
    this.identifiant = user.identifiant
    this.passwd = user.passwd;
};

User.findById = (id, result) => {
    sql.query(`SELECT * FROM utilisateurs WHERE id_utilisateur = ${id}`, (err, res) => {
        if(err) {
            result(err, null);
            return;
        } else if(res.length) {
            console.log(res[0])
            result(null, res[0])
            return;

        } else {
            result({message: 'not_found'}, null);
            return;
        }
    })
}

module.exports = User;