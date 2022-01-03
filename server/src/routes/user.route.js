
const user = require('../controllers/user.controller');
var router = require('express').Router();




router.get('/', user.findUser);
router.get('/skills', user.findUserBySkills);
module.exports = router;




