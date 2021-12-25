const sql = require('../database/db.connect')

const UserSkills = () => {};

UserSkills.findAllSkills = (userID, result) => {
    let request = `select cu.id_competence, c.competence, cu.val_niveau, n.desc_niveau 
    from competences_utilisateur cu join competences c on  cu.id_competence = c.id_competence 
    join niveaux n on cu.val_niveau = n.val_niveau
    where cu.id_utilisateur = ${userID}`
    sql.query(request, (err, res) => {
        if(err) {
            result(err, null);
            return;
        }else if(res.length)  {
            result(null, res);
            return;
        }
        else {
            result({message: 'not_found'}, null);
            return;
        }
    })
}

UserSkills.findSkillsByCat = (userID, categoryID, result) => {
    let request = `select cu.id_competence, c.competence, cu.id_niveau, n.val_niveau,n.desc_niveau 
    from competences_utilisateur cu join competences c on  cu.id_competence = c.id_competence 
    join niveaux n on cu.id_niveau = n.id_niveau
    where cu.id_utilisateur = ${userID} and cu.id_categorie = ${categoryID}`
    sql.query(request, (err, res) => {
        if(err) {
            result(err, null);
            return;
        }else if(res.length)  {
            result(null, res);
            return;
        }
        else {
            result({message: 'not_found'}, null);
            return;
        }
    })
}

module.exports = UserSkills;