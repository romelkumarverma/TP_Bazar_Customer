import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useRouter } from 'next/router'
import Navb from './components/Navb';
import Footer from './components/Footer';
import { useDispatch,useSelector } from 'react-redux';
import { addToCart } from './components/ReduxToolKits/Counter';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Id() {
 
  const {carts} = useSelector((state) => state.allCarts)
  console.log(carts);
  const dispatch = useDispatch()

  const send = (e) => {
    dispatch(addToCart(e))
    toast.success("Product Add Successfully...")
  }

  const router = useRouter()
  const { Id } = router.query
  console.log(Id)
  const [showdata, setShowData] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:4500/api/customer/product/details/${Id}`)
      .then((res) => {
        console.log(res)
        setShowData(res.data)
      }).catch((err) => {
        console.log(err)
      })
  }, [])

 const [amount, setAmount] = useState()
 const [orderId, setOrderId] = useState()

 const handlePayment = (price) => {
  console.log(price)
  const productData = {
    amount:price,
    currency:amount,
    receipt:"b64cb24e644265c1e6fd",
    partial_payment: true,
  }
  axios.post('http://localhost:4500/api/payment/order', productData)
  .then((result)=>{
    console.log(result)
    setOrderId(result.data.id)
    setAmount(result.data.data.amount)
  }).catch((err)=>{
    console.log(err)
  })
 }

 if(amount && orderId !== null){
  console.log(amount)
  const script = document.createElement('script');
  script.src='https://checkout.razorpay.com/v1/checkout.js';
  script.async = true;
  document.head.appendChild(script)

  script.onload = () =>{
    const options = {
      key:'rzp_test_eBKOiF8kmE9EuR',
      amount:amount,
      currency:'INR',
      name:'tpbazar',
      description: 'Product purchase...',
      order_id: orderId,

      handler: function(response)
      {
        console.log('Payment Successful..',response)
      },
      prefill: {
        name:'Romel',
        email:'romelkumarverma@gmail.com',
        contact:'9525359240'
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  }
  return () =>{
    document.head.removeChild(script);
  }
 }







  
  return (
    <>
    <Navb/>
    <div style={{marginTop: '50px', display:'flex', justifyContent:'space-around'}}>
      
        {
          showdata.map((item) => {
            return (<>
            
            <Card style={{ width: '18rem'}}>
              <Card.Img variant="top" src={item.photo} style={{}} alt='img' />
            <div style={{display:'flex'}}>

              <Card.Body>
                <Card.Title><span style={{ marginRight: '50px' }}>Product Name</span>{item.product_name}</Card.Title>
                <Card.Title><span style={{ marginRight: '70px' }}>Brand Name</span>{item.brand_name}</Card.Title>
                <Card.Title><span style={{ marginRight: '130px' }}>Price</span><span style={{ marginRight: '5px', color: 'green' }}>&#8377;</span>{item.price}</Card.Title>
                <Card.Title><span style={{ marginRight: '70px' }}>Discount %</span><span style={{ marginRight: '5px', color: 'green' }}></span>{item.discount}</Card.Title>
              </Card.Body>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', margin: '10px' }}>
                
                <div>
                  <Button type='submit' onClick={() => send(item)} style={{ backgroundColor: '#ff9f00', border: 'none', boxShadow: '0 1px 2px 0 rgba(0,0,0,.2)', borderRadius: '0px' }} >Add To Cart</Button>
                </div>
                <div>
                  <Button style={{ backgroundColor: '#fb641b', border: 'none', boxShadow: '0 1px 2px 0 rgba(0,0,0,.2)', borderRadius: '0px' }} onClick={()=>handlePayment(item.price)}>BUY NOW</Button>
                </div>
              </div>
              </Card>

             
            </>)
          }
          )
        }
      
    </div>
    <Footer />
    </>

  )
}

export default Id