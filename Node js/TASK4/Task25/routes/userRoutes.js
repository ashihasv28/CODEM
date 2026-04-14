const express = require('express');
const router = express.Router();

const logger = require('../middleware/logger');
const auth = require('../middleware/auth');
const userController = require('../controllers/userController');

router.use(logger);

router.get('/', userController.getUsers);
router.post('/', auth, userController.createUser);

module.exports = router;
