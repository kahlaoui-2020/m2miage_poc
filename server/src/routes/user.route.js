
const user = require('../controllers/user.controller');
var router = require('express').Router();




router.get('/', user.findUser);
module.exports = router;




