const express = require('express')
const multer = require('multer')
const path = require('path')

const cardImage = express.Router()
const {CardImagePost, CardImageGet} = require('../Controller/tbl_customer_cardImage')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images')
    },
    filename: function(req, file, cb) {
        // const uniqueSuffix = Date.now() + '_' + Math.round(Math.random() * 1E9)
        const uniqueSuffix = `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`;
        cb(null,uniqueSuffix)
    }
})

const upload = multer({storage: storage})

cardImage.post('/api/cardImage/post', upload.array('photo',4), CardImagePost);
cardImage.get('/api/cardImage/get', CardImageGet);


module.exports = {cardImage}