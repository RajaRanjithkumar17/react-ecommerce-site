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
                <a href="https://rzp.io/l/qrXSCRiI">  Make Payment</a>
               
              </div>
            </div>
          </div>
        );
      })}


      
    </div>
  );
};

export default Payment;
