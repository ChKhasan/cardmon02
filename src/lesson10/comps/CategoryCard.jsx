import React from "react";
import {  Button } from "reactstrap";

const Cards = (props) => {
  return (
    <div> 
      <div className="row mt-4 new_card align-items-center  position-relative">
        <div className="col-12 d-flex justify-content-between align-items-center">
          <h3>Price: {props.price}</h3> <p>{props.dateTime}</p>
        </div>
       
        <div className="col-12">
          <div>{props.desc}</div>
        </div>
        <div className="col-12 d-flex justify-content-end">
          <Button
            className="mx-3"
            color="danger"
            onClick={() => {
              props.setCosts(props.costs.filter((item) => item.id != props.id));
            }}
          >
            delete
          </Button>

          <Button
            className="  justify-content-center align-items-center"
            onClick={() =>
              props.edit({
                dateTime: props.dateTime,
                category: props.category,
                price: props.price,
                desc: props.desc,
              })
            }
          >
            <p>edit</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
