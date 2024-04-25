const express = require('express')
const { customerGet, productDetailGet } = require('../Controller/tbl_retailer_product')

const customer = express.Router()



customer.get('/api/customer/product/:categoryid', customerGet)
customer.get('/api/customer/product/details/:subcategoryid', productDetailGet)

module.exports = {customer}