const express = require('express');
const router = express.Router();

const logger = require('../middleware/logger');
const auth = require('../middleware/auth');
const productController = require('../controllers/productController');

router.use(logger);

router.get('/', productController.getProducts);
router.get('/:id', productController.getProductById);
router.post('/', auth, productController.createProduct);

module.exports = router;
