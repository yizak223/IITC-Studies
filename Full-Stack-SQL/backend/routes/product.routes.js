const { Router } = require('express')
const router = Router()
const { getProduct, getProductByPage, createProduct, updateProduct } = require('../controllers/product.controllers')

router.get('/', getProduct)

router.post('/getByPage', getProductByPage)
router.post('/create', createProduct)

router.patch('/', updateProduct)

module.exports = router