const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express();
const razorPayment = require('./Routes/Payment')

app.use(cors({
    origin:['http://localhost:3000'],
    methods:['GET', 'POST','DELETE', 'PUT'],
    credentials:true
}))
app.use(express.json());
const PORT = 4500;

const { customer } = require('./Routes/tbl_retailer_product');
app.use('/', customer);

const {cardImage} = require('./Routes/tbl_customer_cardImage');
app.use('/', cardImage);

app.use('/api/payment/', razorPayment)

app.use('/public', express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}...`)
})