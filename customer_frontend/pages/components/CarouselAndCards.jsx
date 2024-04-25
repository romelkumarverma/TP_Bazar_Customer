import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

import { useState, useEffect } from 'react'
import axios from 'axios'
import NextLink from 'next/link';
import Button from 'react-bootstrap/Button';
import { useDispatch,useSelector } from 'react-redux';
import { addToCart } from './ReduxToolKits/Counter';

// import { useRouter } from 'next/router';


function CarouselAndCards() {

    const {carts} = useSelector((state) => state.allCarts)
    console.log(carts);
    const dispatch = useDispatch()
  
 
//     const router = useRouter();

//      // Example function to navigate to a different page
//   const navigateToAnotherPage = () => {
//     // Replace '/CardFullDetails/PcDetails' with the desired URL
//     router.push('/CardFullDetails/PcDetails');
//   };

    const [showdata, setShowData] = useState([])

    const handleShowdata = () => {
        axios.get(`http://localhost:4500/api/cardImage/get`)
            .then((res) => {
                console.log(res)
                setShowData(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }


    const addcartdata = (e) =>{
        dispatch(addToCart(e))
        alert("cart add successfully...")
    }

    useEffect(() => {
        handleShowdata()
    }, [])

    return (
        <div>
            {/* <CarouselCard /> */}

            <div style={{ marginTop: '50px' }}>
                <Carousel style={{ marginLeft: '45px' }}>
                    <Carousel.Item>
                        <img src='./carousel/pic1.jpg' alt='' style={{ width: '1250px', height: '400px' }} />
                        <Carousel.Caption>
                            <h3>Toys</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src='./carousel/pic2.jpg' alt='' style={{ width: '1250px', height: '400px' }} />
                        <Carousel.Caption>
                            <h3>Electronics</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src='./carousel/pic3.jpg' alt='kh' style={{ width: '1250px', height: '400px' }} />
                        <Carousel.Caption>
                            <h3>Grocery Store</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            {/* <CarouselCard /> */}

            {/* <CarouselCard2 /> */}

            <div style={{ backgroundColor: '#DDDDDD', width: '100%', height: '750px' }}>
                <div style={{ color: 'white', margin: '50px', width: '1250px', backgroundColor: 'whitesmoke', height: '500px', marginTop: '50px' }}>
                    <div>
                        <div style={{ display: 'flex' }}>
                            <div style={{}}>
                                <Card style={{ width: '18rem', height: '150px', margin: '50px' }}>
                                    <Card.Img variant="top" src="./carousel2/fan1.jpg" style={{ height: '450px' }} />
                                </Card>
                            </div>
                            <div style={{}}>
                                <Card style={{ width: '18rem', height: '150px', margin: '50px' }}>
                                    <Card.Img variant="top" src="./carousel2/pc.jpg" style={{ height: '450px' }} />
                                </Card>
                            </div>
                            <div style={{}}>
                                <Card style={{ width: '18rem', height: '150px', margin: '50px' }}>
                                    <Card.Img variant="top" src="./carousel2/lcd1.jpg" style={{ height: '450px' }} />
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div style={{ display: 'flex' }}>
                            <div style={{}}>
                                <Card style={{ width: '18rem', height: '150px', margin: '50px' }}>
                                    <Card.Img variant="top" src="./carousel2/Alliance.jpg" style={{ height: '450px' }} />
                                </Card>
                            </div>
                            <div style={{}}>
                                <Card style={{ width: '18rem', height: '150px', margin: '50px' }}>
                                    <Card.Img variant="top" src="./carousel2/refg.jpg" style={{ height: '450px' }} />
                                </Card>
                            </div>
                            <div style={{}}>
                                <Card style={{ width: '18rem', height: '150px', margin: '50px' }}>
                                    <Card.Img variant="top" src="./carousel2/ac.jpg" style={{ height: '450px' }} />
                                </Card>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '50px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <img src='./carousel2/case.jpg' alt='' />
                            </div>

                            <div>
                                <img src='./carousel2/off.jpg' alt='' />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* <CarouselCard2 /> */}

            {/* <AddCard /> */}

            <div style={{ backgroundColor: '#F0F8FF', width: '100%', height: '100%', marginTop: '50px' }}>
                <div style={{ color: 'white', margin: '50px', width: '1250px', backgroundColor: 'white', height: '800px', marginTop: '50px' }}>

                    <div>
                        <div style={{ display: 'flex', gap: '25px', marginLeft: '10px', }}>

                            <NextLink href="/CardFullDetails/[PcDetails]" as={`/CardFullDetails/[PcDetails]`}>

                                {
                                    showdata.map((item) =>
                                <div className="card" style={{ width: "18rem", height: '400px' }}>
                                    <img src={item.img3} style={{ height: '170px' }} className="card-img-top" alt="mn,khkj" />
                                    <div className="card-body">
                                        <a href="/" className="btn btn-primary" style={{ marginTop: '100px' }}>Image</a>
                                    </div>
                                    {/* <span>{count}</span> */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', margin: '10px' }}>
                                        <div>
                                            <Button type='submit' onClick={() => addcartdata(item)} style={{ backgroundColor: '#ff9f00', border: 'none', boxShadow: '0 1px 2px 0 rgba(0,0,0,.2)', borderRadius: '0px' }}>Add To Cart</Button>
                                        </div>
                                        <div>
                                            <Button type='submit' style={{ backgroundColor: '#fb641b', border: 'none', boxShadow: '0 1px 2px 0 rgba(0,0,0,.2)', borderRadius: '0px' }}>BUY NOW</Button>
                                        </div>
                                    </div>
                                </div>
                                    )
                                }
                            </NextLink>



                            <div class="card" style={{ width: "18rem", height: '400px' }}>
                                <img src="./addCard/img4.jpg" style={{ height: '170px' }} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">Smart Speaker with Alexa Voice Control Built-in Compact Size with Incredible Sound for Any Room</p>
                                    <a href="/" class="btn btn-primary">$219.00</a>
                                </div>
                            </div>
                            <div class="card" style={{ width: "18rem", height: '400px' }}>
                                <img src="./addCard/fash4.jpg" style={{ height: '170px' }} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">13 Ultrabook Gaming Laptop: Intel Core i7-1165G7 4 Core, NVIDIA GeForce GTX 1650 Ti Max-Q, 13.3″ 1080p 120Hz, 16GB RAM, 512GB SSD, CNC Aluminum, Chroma RGB, Thunderbolt 4
                                    </p>
                                    <a href="/" class="btn btn-primary">$1399.00</a>
                                </div>
                            </div>
                            <div class="card" style={{ width: "18rem" }}>
                                <img src="./addCard/img5.jpg" style={{ height: '170px' }} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">5G Factory Unlocked Android Cell Phone 128GB Pro-Grade Camera 30X Space Zoom Night Mode, Space Grey
                                    </p>
                                    <a href="/" class="btn btn-primary">$999.00</a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div style={{ display: 'flex', marginTop: '10px', marginLeft: '10px', gap: '25px' }}>
                            <div class="card" style={{ width: "18rem" }}>
                                <img src="./addCard/toy2.jpg" style={{ height: '170px' }} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">OLED C1 Series 55” 4k Smart TV (3840 x 2160), 120Hz Refresh Rate, AI-Powered 4K, Dolby Cinema, WiSA Ready, Gaming Mode
                                    </p>
                                    <a href="/" class="btn btn-primary">$2449.00</a>
                                </div>
                            </div>
                            <div class="card" style={{ width: "18rem" }}>
                                <img src="./addCard/fan1.jpg" style={{ height: '170px' }} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">Compact Pulsator Washer for Clothes, .9 Cubic ft. Tub, White, BPAB10WH
                                    </p>
                                    <a href="/" class="btn btn-primary">$1849.00</a>
                                </div>
                            </div>
                            <div class="card" style={{ width: "18rem" }}>
                                <img src="./addCard/fash2.jpg" style={{ height: '170px' }} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">Dual Hose Portable Air Conditioner, Dehumidifier, Fan with Activated Carbon Filter in Platinum
                                    </p>
                                    <a href="/" class="btn btn-primary">$149.00</a>
                                </div>
                            </div>
                            <div class="card" style={{ width: "18rem" }}>
                                <img src="./addCard/fash1.jpg" style={{ height: '170px' }} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">Iron is a lustrous, ductile, malleable, silver-gray metal (group VIII of the periodic table).
                                    </p>
                                    <a href="/" class="btn btn-primary">$199.00</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* *******************  Second  Toys**************** */}

                <div style={{ color: 'white', margin: '50px', width: '1250px', backgroundColor: 'white', height: '400px', marginTop: '0px' }}>
                    <div>
                        <h3 style={{ color: 'black', textAlign: 'center', backgroundColor: 'royalblue' }}>Toys</h3>
                        <div style={{ display: 'flex', gap: '25px', marginLeft: '10px' }}>
                            <div class="card" style={{ width: "18rem" }}>
                                <img src="./toys/toy1.jpg" style={{ height: '170px' }} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">A toy is an object that's made for a child to play with. Your favorite childhood toy might have been a dollhouse, a stuffed animal, or a set of blocks. </p>
                                    <a href="/" class="btn btn-primary">$10.00</a>
                                </div>
                            </div>
                            <div class="card" style={{ width: "18rem" }}>
                                <img src="./toys/toy2.jpg" style={{ height: '170px' }} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">A toy is an object that's made for a child to play with. Your favorite childhood toy might have been a dollhouse, a stuffed animal, or a set of blocks. </p>
                                    <a href="/" class="btn btn-primary">$11.00</a>
                                </div>
                            </div>
                            <div class="card" style={{ width: "18rem" }}>
                                <img src="./toys/toy3.jpg" style={{ height: '170px' }} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">A toy is an object that's made for a child to play with. Your favorite childhood toy might have been a dollhouse, a stuffed animal, or a set of blocks. </p>
                                    <a href="/" class="btn btn-primary">$15.00</a>
                                </div>
                            </div>
                            <div class="card" style={{ width: "18rem" }}>
                                <img src="./toys/toy4.jpg" style={{ height: '170px' }} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">A toy is an object that's made for a child to play with. Your favorite childhood toy might have been a dollhouse, a stuffed animal, or a set of blocks. </p>
                                    <a href="/" class="btn btn-primary">$22.00</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CarouselAndCards