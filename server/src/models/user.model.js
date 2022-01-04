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


User.findBySkills = (id_user, id, result) => {
    let req = `select  json_object(`
	+`'nom', u.nom, 'prenom', u.prenom, 'email', u.email, 'num_tel', u.num_tel, 'url_photo', u.url_photo, 'profil', u.profil) AS profil,`
    +`'skills', `
		+`(select group_concat(`
			+`json_object('id_competence',cu.id_competence, 'competence', c.competence, 'niveau', cu.val_niveau, 'nb_experience',cu.nb_experience) SEPARATOR ';')` 
           + `from competences_utilisateur  cu join competences c on cu.id_competence = c.id_competence where id_utilisateur = u.id_utilisateur AND cu.id_competence in(${id}))` 
            +`AS skills,`
	+`'certifications',`
		+`(select group_concat(`
			+`json_object('id_certification', cu.id_certification, 'date_d', cu.date_d, 'date_f', cu.date_f, 'score', cu.score, 'titule', c.titule) SEPARATOR ';')`
            +`from certifications_utilisateur cu join certifications c on cu.id_certification = c.id_certification)` 
            +`AS certifications `
+`from utilisateurs u where u.id_utilisateur != ${id_user};`

    let request = `SELECT u.nom, u.prenom, u.email, u.url_photo, u.num_tel, `
    +`u.profil, c.competence, cu.nb_experience,  cu.val_niveau  `
    +`FROM utilisateurs u JOIN competences_utilisateur cu ON u.id_utilisateur = cu.id_utilisateur `
    +`JOIN competences c ON cu.id_competence = c.id_competence  `
    +`WHERE cu.id_competence in (${id}) AND u.id_utilisateur != ${id_user}`;

    sql.query(req, (err, res) => {
        if(err) {
            result(err, null);
            return;
        }else  {
            console.log(res)
            result(null, res);
            return;
        }
    })


}


User.sendSkillRequest = (id_user, skill, result) => {
    let request = `INSERT INTO users_requests(id_utilisateur, knowledge, type) values(${id_user}, '${skill}', 'competence') `;
    sql.query(request, (err, res) => {
        if(err) {
            console.log(err)
            result(err, null);
            return;
        }else  {
            console.log(res)
            result(null, res);
            return;
        }
    })
}

User.sendCertRequest = (id_user, cert, result) => {
    let request = `INSERT INTO users_requests(id_utilisateur, knowledge, type) values(${id_user}, '${cert}', 'certification') `;
    sql.query(request, (err, res) => {
        if(err) {
            result(err, null);
            return;
        }else  {
            console.log(res)
            result(null, res);
            return;
        }
    })
}



User.deleteRequest = (id_request, result) => {
    let request = `DELETE FROM users_requests WHERE id_request = ${id_request}`;
    sql.query(request, (err, res) => {
        if(err) {
            console.log(err)
            result(err, null);
            return;
        }else  {
            result(null, res);
            return;
        }
    })
}


User.getRequest = (result) => {
    let request = `SELECT ur.* , u.nom, u.prenom FROM users_requests ur JOIN utilisateurs u ON ur.id_utilisateur = u.id_utilisateur`;
    sql.query(request, (err, res) => {
        if(err) {
            result(err, null);
            return;
        }else  {
            result(null, res);
            return;
        }
    })
}
User.isNotifs = (result) => {
    let request = `select count(id_request) as notif from users_requests`
    sql.query(request, (err, res) => {
        if(err) {
            result(err, null);
            return;
        }else  {
            result(null, res);
            return;
        }
    })

}

module.exports = User;
