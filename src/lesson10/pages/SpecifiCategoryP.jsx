import React from "react";
import { useParams } from "react-router-dom";
import { Context } from "..";
import { useContext } from "react";
import Cards from "../comps/Cards";

import {
  Button,
  Form,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import RChartJs from '../comps/RChartJs'
import uuid from 'react-uuid'
import { CategoryCard } from "../comps";

const SpecifiCategoryP = (props) => {
  const params = useParams();
  const {
    categories,
    costs,
    setCosts,
    isOpen,
    cost,
    setCost,
    takeDesc,
    button,
    chartArr,
    dateD
  } = useContext(Context);


  const handleChange = (e) => {
    setCost({ ...cost, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!button) {
      setCosts([...costs, { ...cost, price: cost.price * 1 ,id: 123}]);
      props.closeModal();
      setCost({ category: categories[0].name, dateTime: dateD });
    } else {
      props.closeModal();
      const change = costs.find((item) => item.desc == takeDesc);
      setCost({ category: categories[0].name, dateTime: dateD});

      change.price = cost.price;
      change.desc = cost.desc;
      change.dateTime = cost.dateTime;
      change.category = cost.category;
      chartArr = costs.map((item) => item.price);
    }

  };

  return (
    <div>
    <h1>{params.obj}</h1>
<div className="row justify-content-center py-3">
        <div className="col-12 " style={{ height: "200px" }}>
          <RChartJs data={costs
        .filter((item) => item.category == params.obj).map((item) => item.price * 1)} />
</div></div>
      {costs
        .filter((item) => item.category == params.obj)
        .map((item) => (
          <CategoryCard 
            edit={props.edit}
            {...item}
            opera={false}
            costs={costs}
            setCosts={setCosts}x
            unvEdit={props.unvEdit}
          />
        ))}
      <Modal isOpen={isOpen}>
        <Form onSubmit={handleSubmit}>
          <ModalHeader>Add Cost</ModalHeader>
          <ModalBody>
            <Input
              value={cost.price}
              className="mb-3"
              onChange={handleChange}
              name="price"
              placeholder="Enter price"
              pattern="^[0-9]*$"
            />
            <Input
              value={cost.category}
              className="form-control mb-3"
              onChange={handleChange}
              type="select"
              name="category"
              placeholder="Select category"
            >
              {categories.map((cat) => (
                <option value={cat.id}>{cat.name}</option>
              ))}
            </Input>
            <Input
              value={cost.desc}
              className="mb-3"
              onChange={handleChange}
              name="desc"
              placeholder="Description"
              type="textarea"
            />
            <input
              value={cost.dateTime}
              className="form-control mb-3"
              onChange={handleChange}
              name="dateTime"
              placeholder="Date and time"
              type="datetime-local"
            />
          </ModalBody>
          <ModalFooter>
            <Button onClick={props.closeModal}>Cancel</Button>
            <Button type="submit">Add</Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
};

export default SpecifiCategoryP;
