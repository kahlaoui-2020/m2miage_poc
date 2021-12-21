
const user = require('../controllers/user.controller.js');
var router = require('express').Router();

router.get('/:id_utilisateur', user.findUser);


module.exports = router
