
const router = require('express').Router();
const userController = require('../controllers/auth.controller');

router.post('/', userController.checkAuth);

module.exports = router;

