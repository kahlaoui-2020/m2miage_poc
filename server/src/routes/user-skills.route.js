const userSkills = require('../controllers/user-skills.controller');
var router = require('express').Router();

router.get('/', userSkills.getAllSkills);
router.get('/category', userSkills.getSkillsByCat);


module.exports = router;