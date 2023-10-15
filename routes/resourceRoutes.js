const express = require('express');
const router = express.Router();
const authJwt = require('../middlewares/authJwt.js');
const resourceController = require('../controllers/resourceController.js');

router.get('/resources/protected', authJwt.verifyToken,resourceController.getProtectedResource);
router.get('/resources/public', resourceController.getPublicResource);

module.exports = router;