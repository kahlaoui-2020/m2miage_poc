const sql = require('../database/db.connect')

const Auth = (auth) => {

    this.auth = auth.identifiant;
    this.passwd = auth.passwd;
};

Auth.auth = (form, result) => {
    let login = form.login, passwd = form.passwd;
    sql.query(`SELECT id_utilisateur, profil FROM utilisateurs WHERE identifiant = '${login}' and passwd = '${passwd}'`, (err, res) => {
        if(err) {
            result(err, null);
            return;
        }else if(res.length)  {
            result(null, res[0]);
            return;
        }
        else {
            result({message: 'not_found'}, null);
            return;
        }
    })
}

module.exports = Auth;