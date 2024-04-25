const express = require('express')
const route = express.Router()
const Razorpay= require('razorpay')
const crypto = require('crypto')
//const dotenv = require('dotenv')
// const { error } = require('console')
// const { default: orders } = require('razorpay/dist/types/orders')
//dotenv.config()    /// enviroment variable

////// Create Order ////

route.post('/order', async(req,res)=>{
    try{
        const instance = new Razorpay({
            key_id:"rzp_test_eBKOiF8kmE9EuR",
            key_secret:"HcfPh606Q5jZYMrYG5RXXYdf",
           });
        const options = {
            amount:req.body.amount * 100,
            currency:"INR",
            receipt:crypto.randomBytes(10).toString("hex")
        };

        instance.orders.create(options,(error,order)=>{
            if(error){
                console.log(error)
                return res.status(500).json({message:"Something went wrong..."})
            }
            res.status(200).json({data:order})
        })
    }catch(error){
        console.log(error)
        res.status(500).json({message:'Internal server error'});
    }
})

//// Payment verify ///

route.post('/verify', async(req, res)=>{
    try{
        const {
            razorpaz_order_id,razorpaz_payment_id,razorpaz_signature}=req.body
        const sign = razorpaz_order_id + "|" + razorpaz_payment_id
        const expectedSign = crypto.createHmac("sha256", "HcfPh606Q5jZYMrYG5RXXYdf").update(sign.toString()).digest("hex")

        if(razorpaz_signature===expectedSign){
            return res.status(200).json({message: "Payment verified...."})
        }
        else {
            return res.status(400).json({message:"Invalid Signature..."})
        }
    }catch(error){
        console.log(error)
        res.status(500).json({message:'Internal server error'});
    }
})

module.exports = route