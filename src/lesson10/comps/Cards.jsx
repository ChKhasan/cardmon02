import React  from "react";
import { Link } from "react-router-dom";
import {  Button } from "reactstrap";

const Cards = (props) => {
  

  return (
    <div> 
      <div className="row mt-4 new_card align-items-center  position-relative">
        <div className="col-12 d-flex justify-content-between align-items-center">
          <h4>{props.category}</h4> <p>{props.dateTime}</p>
        </div>
        <div className="col-12 d-flex justify-content-between align-items-center">
          <h5>{props.price}</h5>
        </div>

        <div className="mt-3 col-12 align-items-end d-flex justify-content-between">
          <Link to={`category/${props.category}`}>
            operations: {props.operations}
          </Link>
          <Button
            className="mx-3"
            color="danger"
            onClick={() => {
              props.setCosts(
                props.costs.filter((item) => item.category !== props.category)
              );
            }}
          >
            Delete All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
