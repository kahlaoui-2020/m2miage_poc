const editDB = require('../controllers/edit-db.controller');
var router = require('express').Router();

router.put('/categorie', editDB.putCategorie);
router.put('/skill', editDB.putSkill);
router.put('/certification', editDB.putCertification);

module.exports = router;