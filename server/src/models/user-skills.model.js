const sql = require('../database/db.connect');
const { id_categorie } = require('./edit-skills.model');

const UserSkills = () => {};

UserSkills.findAllSkills = (userID, result) => {
    let request = `select cu.id_competence, c.competence, cu.val_niveau, n.desc_niveau, cu.nb_experience 
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

UserSkills.addSkills = (data, result) => {
    let id_utilisateur = data.id_utilisateur, id_categorie = data.id_categorie;
    let request = `INSERT INTO competences_utilisateur values`
    data.skills.forEach(elem => {
        request += `(${id_utilisateur}, ${elem.id_competence}, ${elem.val_niveau}, ${id_categorie}, ${elem.nb_experience}) ,`
        
    }); 
    request = request.slice(0, -1)  + ';';
    sql.query(request, (err, res) => {
        if(err) {
            result(err, null);
            return;
        }else  {
            result(null, res.affectedRows);
            return;
        }
    })
}

UserSkills.removeSkills = (data, result) => {

    let id_utilisateur = data.id_utilisateur, id_competences = data.id_competences;
    let request = `DELETE FROM competences_utilisateur WHERE id_utilisateur = ${id_utilisateur} AND id_competence IN (${id_competences})`
    
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

UserSkills.updateSkills = (data, result) => {

    let id_utilisateur = data.id_utilisateur, competences = data.skills;

    let r_levels = `case `
    competences.forEach(s => {
        r_levels  += `when id_competence = ${s.id_competence} then ${s.val_niveau} `
    })
    r_levels += `else val_niveau end`;

    let r_exp = `case `
    competences.forEach(s => {
        r_exp  += `when id_competence = ${s.id_competence} then ${s.nb_experience} `
    })
    r_exp += `else nb_experience end`;


    let request = `UPDATE competences_utilisateur SET val_niveau = (${r_levels}), nb_experience = (${r_exp}) where id_utilisateur = ${id_utilisateur}`

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

module.exports = UserSkills;