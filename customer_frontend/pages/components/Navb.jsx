import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
//import "bootstrap-icons/font/bootstrap-icons.css"
import Card from 'react-bootstrap/Card';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch,useSelector } from 'react-redux';


function Navb() {
  const {carts} = useSelector((state) => state.allCarts)
  console.log(carts);

  const router = useRouter();

  // Example function to navigate to a different page
  // const navigateToAnotherPage = () => {
  //   // Replace '/other-page' with the desired URL
  //   router.push('../FootwearDetails');
  // };

  //     const count = useSelector((state) => state.counter.value)
  //   console.log(count, 'romel')

  const [getData1, setGetData1] = useState([]);

  async function getData(categoryid) {
    try {
      const response = await axios.get(`http://localhost:4500/api/customer/product/${categoryid}`);
      setGetData1(response.data);
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-Primary" style={{ backgroundColor: '#E1E5F8' }} >
        <div className="container-fluid" >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ marginLeft: '80px' }}>
              <a className="navbar-brand" style={{ color: '1D2B53' }} href="/">Tpbazar</a>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ marginLeft: '800px' }}>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search Product..." aria-label="Search" style={{ width: '300px' }} />
                {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
              </form>
            </div>
          </div>

        </div>
      </nav>
      {/* Second Navbar start */}
      <div>
        <nav className="navbar navbar-expand-lg bg-body-primary" style={{ backgroundColor: '#3d5a80' }}>
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav" style={{ color: 'white', marginLeft: '80px' }}>
                <Dropdown>
                  <Dropdown.Toggle variant="#3d5a80" id="dropdown-basic">
                    <span style={{ color: 'white' }}>FootWears</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {getData1.map((item) => (
                      // <NextLink href={`../NavDropDetails.js/FootwearDetails/${item.subcategoryid}`} >
                        <NextLink  href={"../[Id]"} as={`${item.subcategoryid}`}>{item.subcategoryname}</NextLink>
                        // <Dropdown.Item href={``} >{item.subcategoryname}</Dropdown.Item>
                      // </NextLink>

                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <li className="nav-item" style={{ marginLeft: '50px' }}>
                  <a className="nav-link text-white" href="">Electronics</a>
                </li>
                <li className="nav-item" style={{ marginLeft: '50px' }}>
                  <a className="nav-link text-white" href="">Grocery</a>
                </li>
                <li className="nav-item" style={{ marginLeft: '50px' }}>
                  <a href='' className="nav-link  text-white" >Appliances</a>
                </li>
                <li className="nav-item" style={{ marginLeft: '50px' }}>
                  <a href='' className="nav-link  text-white" >Fashion</a>
                </li>
                <li className="nav-item" style={{ marginLeft: '50px' }}>
                  <a href='' className="nav-link  text-white" >Furniture</a>
                </li>
                <li className="nav-item" style={{ marginLeft: '50px' }}>
                  <a href='' className="nav-link text-white">Toy</a>
                </li>
                <li className="nav-item" style={{ marginLeft: '50px' }}>
                  <a href='' className="nav-link  text-white">Two Wheelers</a>
                </li>
                <div className="nav-item" style={{ marginLeft: '50px' }}>
                  <NextLink href='../Details'><i class="bi bi-cart4" style={{color:'white'}} /><span style={{color:'white'}}>{carts.length}</span></NextLink>
                </div>

                {/* <li className="nav-item" style={{ marginLeft: '50px' }}>
                  <a href='/' className="nav-link disabled" aria-disabled="true"><i style={{color:'white'}} class="fa-sharp fa-regular fa-cart-plus"></i></a>
                </li> */}

                <li className="nav-item" style={{ marginLeft: '50px' }}>
                  <a href='' className="nav-link disabled text-white" aria-disabled="true">Log In</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* Second Navbar end */}
 
    </div>
  )
}

export default Navb