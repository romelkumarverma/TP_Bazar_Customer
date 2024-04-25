import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Navb from './components/Navb';
import Footer from './components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { addToCart, removeSingleItem, removeToCart } from './components/ReduxToolKits/Counter';
import { toast } from 'react-toast'


function Details() {

    const [countItem, setCountItem] = useState([0])
    const [amountdata, setAmountData] = useState([0])
    const [discountData1, setDiscountData] = useState([0])
    const [acutaldata, setActualData] = useState([0])

    const { carts } = useSelector((state) => state.allCarts)
    console.log(carts);

    const dispatch = useDispatch()

    const send = (e) => {
        dispatch(addToCart(e))
        toast.success("Product Add Successfully...")
    }

    const countQuantity = () => {
        let totalQuantity = 0;
        carts.map((ele) => {
            totalQuantity = ele.quantity + totalQuantity
        })
        setCountItem(totalQuantity)
    }

    const totalprice = () =>{
        let totalAmount = 0;
        carts.map((ele, ind)=>{
            totalAmount = (ele.price * ele.quantity) * (1 - ele.discount / 100) + totalAmount
        })
        setAmountData( totalAmount)
    }

   const totalmainamount = () =>{
       var amount = 0;
       carts.map((ele)=>{
        amount = ele.price * ele.quantity + amount;
       })
       setActualData(amount)
   }

    const discountdata = () => {
   
        let totalAmount = 0;
        let amount = 0;
        let totaldisc1 = 0;
        carts.map((ele, ind)=>{
            amount = ele.price * ele.quantity + amount;
            totalAmount = (ele.price * ele.quantity) * (1 - ele.discount / 100) + totalAmount
            totaldisc1 = amount - totalAmount;
        })
    
       
        setDiscountData(totaldisc1 );
    }
    const removeCart = (e) => {
        dispatch(removeToCart(e))
    }

    const decreseSingleItem = (e) =>{
        dispatch(removeSingleItem(e))
    }

    useEffect(() => {
        countQuantity(),
        totalprice(),
        discountdata()
        totalmainamount()
    }, [countQuantity, totalprice, discountdata, totalmainamount])

    return (
        <>
            <Navb />
            <div style={{ display: 'flex', marginTop: '80px', marginLeft: '70px' }}>
                <div style={{ width: '700px' }} className='shadow p-3 mb-5 bg-white rounded'>
                    <div>
                        { 
                            carts.map((item, index) => {
                                return (
                                    <>
                                        <div style={{ height: '100%', width: '100%', display: 'flex' }}>
                                            <div class="card" style={{ width: "18rem", height: '100px', width: '80px' }}>
                                                <img src={item.photo} alt='' style={{ height: '150px', width: '150px' }} />
                                                <img src={item.img3} alt='' style={{ height: '150px', width: '150px' }} />

                                            </div>

                                            <div style={{ marginLeft: '100px' }}>
                                                <p style={{ marginLeft: '40px', fontSize: '20px' }}>Product Name:<span style={{ marginLeft: '90px' }}>{item.product_name}{item.productName}</span></p>
                                                <p style={{ marginLeft: '40px', fontSize: '20px' }}>Brand Name:<span style={{ marginLeft: '110px' }}>{item.brand_name}{item.brandName}</span></p>
                                                <p style={{ marginLeft: '40px', fontSize: '20px' }}>Price :<span style={{ marginLeft: '110px' }}>{item.price}</span></p>
                                                <p style={{ marginLeft: '40px', fontSize: '17px' }}><span style={{ marginLeft: '90px', color: 'green' }}>{item.discount}% off</span></p>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex'}}>
                                            <Button onClick={item.quantity <= 1 ? ()=> removeCart(item.productId): ()=> decreseSingleItem(item) } style={{ backgroundColor: 'white', border: 'none', height: '0px', width: '0px' }}><h4><i style={{ width: '50px', height: '50px' }} class="bi bi-dash-circle" style={{ color: 'black' }}></i></h4> </Button>
                                            <input value={item.quantity} style={{width:'30px', marginLeft:'30px', marginTop:'10px'}}/>
                                            <Button onClick={() => send(item)} style={{ backgroundColor: 'white', border: 'none', height: '0px', width: '0px' }}><h4 style={{ marginLeft: '10px', height: '50px' }} ><i class="bi bi-plus-circle" style={{ color: 'black' }}></i></h4></Button>
                                        </div>
                                        <div style={{display:'flex', marginLeft:'500px',justifyContent:'space-between', marginTop:'20px'}}>

                                            {/* <span>{count}</span> */}
                                            <div style={{}}>
                                                <Button onClick={() => removeCart(item.productId)} style={{ backgroundColor: '#ff9f00', border: 'none', boxShadow: '0 1px 2px 0 rgba(0,0,0,.2)', borderRadius: '0px' }} >Remove <span><i class="bi bi-trash-fill"></i></span></Button>
                                            </div>
                                            {/* <div>
                                                <Button type='submit' style={{ backgroundColor: '#fb641b', border: 'none', boxShadow: '0 1px 2px 0 rgba(0,0,0,.2)', borderRadius: '0px' }}> Place Order <span><i class="bi bi-bag-fill"></i></span></Button>
                                            </div> */}
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>



                </div>

                <div style={{ width: '350px', height: '300px', marginLeft: '70px' }} className='shadow p-3 mb-5 bg-white rounded'>
                    {/* {
                        carts.map((item, index) => {
                            return (
                                <> */}

                                    <h4 style={{ marginLeft: '35%' }}>Price Details</h4>
                                    <hr />
                                    <p style={{ marginLeft: '40px', fontSize: '20px' }}>Price:-<span style={{ marginLeft: '140px' }}><span style={{ color: 'green' }}>&#8377;</span>{acutaldata}</span></p>

                                    <p style={{ marginLeft: '40px', fontSize: '20px' }}>Discounts:-<span style={{ marginLeft: '100px' }}>&#8377;   {discountData1}</span></p>
                                    
                                    <hr style={{ color: 'burlywood' }} />

                                    <p style={{ marginLeft: '40px', fontSize: '20px' }}>Total Ammounts:-<span style={{ marginLeft: '40px' }}>&#8377; {amountdata}</span></p>
                                    <hr />

                                    <Button type='submit' style={{ backgroundColor: '#fb641b', border: 'none', boxShadow: '0 1px 2px 0 rgba(0,0,0,.2)', borderRadius: '0px', marginLeft:'200px' }}>BUY NOW</Button>

{/* 
                                </>
                            )
                        })
                    } */}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Details