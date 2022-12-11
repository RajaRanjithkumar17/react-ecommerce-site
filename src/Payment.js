import React, { useContext, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { stateContext } from "./Context";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Rating from "@mui/material/Rating";
import "./Paymentstyle.css";

const Payment = () => {
  const [searchParams] = useSearchParams();
  const [value, setValue] = React.useState(2);
  let id = searchParams.get("id");
  const { state, dispatch } = useContext(stateContext);
  console.log(id, state);
  const [setnumber, setnum] = useState([]);
  const [setexpdate, setexp] = useState("2018-05");
  const [setcvv, setcvvnum] = useState([]);
  const [show, setShow] = useState(false);
  const [showe, setShowe] = useState(false);

  const handleClose = () => {
    setShow(false);
    handleClosed()
    console.log("closed");

  }
  const handleShow = () => setShow(true);

  const getcardDetails = (val) => {
    if (val.target.name === "cards") {
      setnum(val.target.value);
    } else if (val.target.name === "carddate") {
      setexp(val.target.value);
    } else {
     
        setcvvnum(val.target.value);
      
    }
  };

  const handleClosed = ()=>{
    setShowe(true)
    console.log("truggered",showe);

  }

  console.log(setnumber, setcvv, setexpdate,showe);
  return (
    <div className="paymentstyle">
      {state.tasks.map((item, index) => {
        return (
          <div className="container orde">
            <div className="row" key={index}>
              <div className="col-xl-3 imges">
                <img src={item.image} alt="img" />
              </div>
              <div className="col-xl-9">
                <h6>{item.title}</h6>
                <p>{item.description}</p>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                <h5>
                  Rs.
                  {item.price}
                </h5>
                <Button variant="primary" onClick={handleShow}>
                  Make Payment
                </Button>
              </div>
            </div>
          </div>
        );
      })}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Payment </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            placeholder="Enter card Number"
            type={"number"}
            onChange={getcardDetails}
            name="cards"
            value={setnumber}
          />
          <br />
          <input
            placeholder="Expiry Date"
            type={"month"}
            min="2018-03"
            onChange={getcardDetails}
            name="carddate"
            value={setexpdate}
          />
          <br />

          <input
            placeholder="Enter cvv"
            type={"number"}
            onChange={getcardDetails}
            name="cardcvv"
            value={setcvv}
          />
        </Modal.Body>
        <Modal.Footer>
         
          <Button variant="primary" onClick={handleClose}>
            Proceed
          </Button>
        </Modal.Footer>
      </Modal>

      
      <Modal showe={showe} onHide={handleClosed}>
        <Modal.Header >
          <Modal.Title>OTP Verification </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            placeholder="Enter card Number"
            type={"number"}
            onChange={getcardDetails}
            name="cards"
            value={setnumber}
          />
         
        </Modal.Body>
        <Modal.Footer>
         
          {/* <Button variant="primary" onClick={handleClosed}>
            Procee
          </Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Payment;
