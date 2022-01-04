const editCert = require('../controllers/edit-certs.controller');

var router = require('express').Router();

router.get('/', editCert.getCerts);
router.get('/tree', editCert.getTreeCerts);
router.get('/organismes', editCert.getOrganismes);
router.get('/certifications/:organisme', editCert.getCertsByOrg);
router.get('/:id_utilisateur', editCert.getUserCerts);
router.post('/:id_utilisateur', editCert.setUserCert);
router.delete('/:id_utilisateur', editCert.deleteUserCerts);

module.exports = router;