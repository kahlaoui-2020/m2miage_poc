const userSkills = require('../controllers/user-skills.controller');
var router = require('express').Router();

router.get('/', userSkills.getAllSkills);
router.get('/category', userSkills.getSkillsByCat);
router.post('/skills', userSkills.postSkills);
router.delete('/skills', userSkills.deleteSkills);
router.put('/skills', userSkills.putSkills);

module.exports = router;