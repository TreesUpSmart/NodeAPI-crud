const express = require('express');
const Product = require('../models/productModel')
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/productController')


router.get('/', getProducts)

router.get('/:id', getProduct )


router.post('/', createProduct)

//update the product using put or patch
router.put('/:id', updateProduct)

//delete a product

router.delete('/:id', deleteProduct)

module.exports = router;