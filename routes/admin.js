const express = require('express');
const adminController = require('../controller/admin')
const router = express.Router();

router.post('/add-product',adminController.addProduct);
router.get('/get-products',adminController.getAllProducts);
router.put('/buy-product/:id',adminController.buyProduct);
module.exports = router;