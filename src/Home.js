import axios from "axios";
import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { stateContext } from "./Context";

const Home = () => {
  const [getapi, setapi] = useState("");
  const navigate = useNavigate();
  const { state, dispatch } = useContext (stateContext);

  const fetchapi = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");

    setapi(result.data);

    
  };

  useState(() => {
    fetchapi();
    
  }, []);

  console.log(getapi);
  
  const handelbuy = () => {
    navigate("order")
    dispatch({ type: "order", payload: getapi });
  };

  const handellogin = () => {};


  return (
    <div className="flexbox">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div id="home">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://m.media-amazon.com/images/I/91pOL0YtqCL._SX3000_.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://m.media-amazon.com/images/I/61DGL5PhwuL._SX3000_.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://m.media-amazon.com/images/I/613-gA49v1L._SX3000_.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="container ">
        <div className="row">
          <div className="col-xl-4 catagery">
            <div className="prm">
            <h4>
            Professional tools, testing<br/> more Up to 60% OFF
            </h4>
            <div className="row">
              <div className="col-xl-12 product">
                <div className="row">
                  <div className="col-xl-6">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/Tools1x._SY116_CB424026090_.jpg"
                      alt="male"
                    />
                    <p>Men's Cloths</p>
                  </div>
                  <div className="col-xl-6">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/2._SY116_CB643952439_.jpg"
                      alt="male"
                    />
                    <p>Women's Cloths</p>
                  </div>
                  <div className="col-xl-6">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/1._SY116_CB643952439_.jpg"
                      alt="male"
                    />
                    <p>Electronics</p>
                  </div>
                  <div className="col-xl-6">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/med1x._SY116_CB424026091_.jpg"
                      alt="more"
                    />
                    <p>More</p>
                  </div>
                  <Button variant="secondary"  onClick={handelbuy}>Explore More</Button>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div className="col-xl-4 catagery">
            <div className="prm">
            <h4>
              Top rated Premium Quality <br /> Brands & More
            </h4>
            <div className="row">
              <div className="col-xl-12 product">
                <div className="row">
                  <div className="col-xl-6">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/PB/MSO/Dec/186x116_fashion._SY116_CB620369430_.jpg"
                      alt="male"
                    />
                    <p>Men's Cloths</p>
                  </div>
                  <div className="col-xl-6">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/PB/MSO/Dec/186x116_fashion._SY116_CB620369430_.jpg"
                      alt="male"
                    />
                    <p>Women's Cloths</p>
                  </div>
                  <div className="col-xl-6">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_8._SY116_CB655805757_.jpg"
                      alt="male"
                    />
                    <p>Electronics</p>
                  </div>
                  <div className="col-xl-6">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/1._SY116_CB643952439_.jpg"
                      alt="more"
                    />
                    <p>More</p>
                  </div>
                  <Button variant="secondary" onClick={handelbuy}>Explore More</Button>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div className="col-xl-4 catagery">
            <div className="prm">
            <h4>
            Revamp your home in <br/>style
            </h4>
            <div className="row">
              <div className="col-xl-12 product">
                <div className="row">
                  <div className="col-xl-6">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_1_Low._SY116_CB670263840_.jpg"
                      alt="male"
                    />
                    <p>Men's Cloths</p>
                  </div>
                  <div className="col-xl-6">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_2_Low._SY116_CB670263840_.jpg"
                      alt="male"
                    />
                    <p>Women's Cloths</p>
                  </div>
                  <div className="col-xl-6">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_3_Low._SY116_CB670263840_.jpg"
                      alt="male"
                    />
                    <p>Electronics</p>
                  </div>
                  <div className="col-xl-6">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_4_Low._SY116_CB670263840_.jpg"
                      alt="more"
                    />
                    <p>More</p>
                  </div>
                  <Button variant="secondary" onClick={handelbuy}>Explore More</Button>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container ">
        <div className="row">
          <div className="col-xl-4 catagery">
            <div className="prm">
            <h4>
            Professional tools, testing<br/> more Up to 60% OFF
            </h4>
            <div className="row">
              <div className="col-xl-12 product">
                <div className="row">
                  <div className="col-xl-6">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/Tools1x._SY116_CB424026090_.jpg"
                      alt="male"
                    />
                    <p>Men's Cloths</p>
                  </div>
                  <div className="col-xl-6">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/2._SY116_CB643952439_.jpg"
                      alt="male"
                    />
                    <p>Women's Cloths</p>
                  </div>
                  <div className="col-xl-6">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/1._SY116_CB643952439_.jpg"
                      alt="male"
                    />
                    <p>Electronics</p>
                  </div>
                  <div className="col-xl-6">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/med1x._SY116_CB424026091_.jpg"
                      alt="more"
                    />
                    <p>More</p>
                  </div>
                  <Button variant="secondary" onClick={handelbuy}>Explore More</Button>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div className="col-xl-4 catagery">
            <div className="prm">
            <h4>
              Top rated Premium Quality <br /> Brands & More
            </h4>
            <div className="row">
              <div className="col-xl-12 product">
                <div className="row">
                  <div className="col-xl-6">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Electronic._SY116_CB431401553_.jpg"
                      alt="male"
                    />
                    <p>Men's Cloths</p>
                  </div>
                  <div className="col-xl-6">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fashion._SY116_CB431401553_.jpg"
                      alt="male"
                    />
                    <p>Women's Cloths</p>
                  </div>
                  <div className="col-xl-6">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Mobile._SY116_CB431401553_.jpg"
                      alt="male"
                    />
                    <p>Electronics</p>
                  </div>
                  <div className="col-xl-6">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fresh._SY116_CB431401553_.jpg"
                      alt="more"
                    />
                    <p>More</p>
                  </div>
                  <Button variant="secondary" onClick={handelbuy}>Explore More</Button>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div className="col-xl-4 catagery">
            <div className="prm">
            <h4>
            Revamp your home in <br/>style
            </h4>
            <div className="row">
              <div className="col-xl-12 product">
                <div className="row">
                  <div className="col-xl-6">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_1_Low._SY116_CB670263840_.jpg"
                      alt="male"
                    />
                    <p>Men's Cloths</p>
                  </div>
                  <div className="col-xl-6">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_2_Low._SY116_CB670263840_.jpg"
                      alt="male"
                    />
                    <p>Women's Cloths</p>
                  </div>
                  <div className="col-xl-6">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_3_Low._SY116_CB670263840_.jpg"
                      alt="male"
                    />
                    <p>Electronics</p>
                  </div>
                  <div className="col-xl-6">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_4_Low._SY116_CB670263840_.jpg"
                      alt="more"
                    />
                    <p>More</p>
                  </div>
                  <Button variant="secondary" onClick={handelbuy}>Explore More</Button>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
