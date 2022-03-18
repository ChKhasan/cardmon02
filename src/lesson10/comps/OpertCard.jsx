import React, { useContext } from "react";
import { Button } from "reactstrap";
import { Context } from "..";

const OpertCard = (props) => {
  const { costs ,setCosts} = useContext(Context);
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
              setCosts(costs.filter((item) => item.id != props.id));
            }}
          >
            delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OpertCard;
