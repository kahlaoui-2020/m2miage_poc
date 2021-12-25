const editSkills = require('../controllers/edit-skills.controller');

var router = require('express').Router();

router.get('/categories', editSkills.getCategories);
router.get('/skills', editSkills.getSkills);
router.get('/levels', editSkills.getLevels);


module.exports = router;