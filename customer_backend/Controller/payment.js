const razorpay = require('razorpay')

const checkout = async(req, res)=>{
    try{
        const instance = new razorpay({
            key_id: process.env.RAZORPAY_API_KEY,
            key_secret: process.env.RAZORPAY_API_SECRET,
        });
        const options = {
            amount:Number(req.body.amount),
            currency:"INR"
        };
        const order = await instance.orders.create(options)
        console.log(order)
        res.status(200).json({
            success:true,
            order:order
        })
    }catch(error){
        console.error('Error during checkout...', error)
        res.status(500).json({
            sucess: false,
            error:'Internal server error'
        })
    }
}

const PaymentVerification = async(req, res)=>{
    console.log(req.body)
    res.status(200).json({
        success:true
    })
}

module.exports = {checkout, PaymentVerification}