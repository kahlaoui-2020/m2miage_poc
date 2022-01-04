
const user = require('../controllers/user.controller');
var router = require('express').Router();




router.get('/', user.findUser);
router.get('/skills', user.findUserBySkills);


router.put('/skill', user.requestSkill);
router.put('/cert', user.requestCert);

router.delete('/deleteRequest/:id_request', user.removeRequest);



router.get('/requests', user.getRequest);
router.get('/notifs', user.getNotifs);

module.exports = router;




