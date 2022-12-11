import React, { useContext } from "react";
import { stateContext } from "./Context";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Order.css";
import Rating from "@mui/material/Rating";
import { useNavigate, createSearchParams } from "react-router-dom";
const Order = () => {
  const { state, dispatch } = useContext(stateContext);
  const [value, setValue] = React.useState(2);
  const navigate = useNavigate();
  console.log(state);

  const Handelpayment = (id)=>{
   
    navigate({
      pathname: "/payment",
      search: createSearchParams({
        id: id,
      }).toString(),
    });
  
    dispatch({ type: "topayment", payload:id });

  }

  return (
    <div>
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
              <Button onClick={()=>Handelpayment(item.id)}>Buy</Button>
              </div>
                
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Order;
