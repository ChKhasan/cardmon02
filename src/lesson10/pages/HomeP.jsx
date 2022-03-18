import React, { useState, useContext } from "react";

import {
  Button,
  Card,
  CardBody,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Form,
} from "reactstrap";
import { Context } from "..";
import Cards from "../comps/Cards";

import RChartJs from "../comps/RChartJs";
import uuid from "react-uuid";

// export const filterCosts = []
const HomeP = (props) => {
  const {
    categories,
    costs,
    setCosts,
    isOpen,
    setIsOpen,
    cost,
    setCost,
    takeDesc,
    setTakeDesc,
    button,
    setButton,
    chartArr,
    setChartArr,
    operat,
    setOperat,
    isExist,
    setIsExist,
    dateD
  } = useContext(Context);
  
  const filterCosts = costs.reduce((total, cost) => {
    if (total.find((cat) => cat.category === cost.category)) {
      return total.map((obj) => {
        if (obj.category === cost.category) {
          return {
            ...cost,
            operations: obj.operations + 1,
            price: cost.price * 1 + obj.price * 1,
          };
        } else {
          return obj;
        }
      });
    } else {
      return [
        ...total,
        {
          category: cost.category,
          operations: 1,
          price: cost.price,
          dateTime: cost.dateTime,
          desc: cost.desc,
        },
      ];
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!button) {
      if (cost.price && cost.desc && cost.dateTime) {
        setCosts([...costs, { ...cost, price: cost.price * 1, id: uuid() }]);
        props.closeModal();
        setCost({ category: categories[0].name , dateTime: dateD});
        setIsExist({ price: false, desc: false, dateTime: false });
      } else {
        if (!cost.price) {
          setIsExist({ price: true, desc: false, dateTime: false });
        } else if (!cost.disc) {
          setIsExist({ price: false, desc: true, dateTime: false });
        } else if (!cost.dateTime) {
          setIsExist({ price: false, desc: false, dateTime: true });
        }
      }
    
    } else {
      props.closeModal();
      const change = costs.find((item) => item.desc == takeDesc);
      setCost({category: categories[0].name ,dateTime: dateD});

      change.price = cost.price;
      change.desc = cost.desc;
      change.dateTime = cost.dateTime;
      change.category = cost.category;

      chartArr = costs.map((item) => item.price);
    }

  };
  console.log('asasas')


  const handleChange = (e) => {
    if (e.target.name == "dateTime") {
      setCost({ ...cost, [e.target.name]: e.target.value });
    } else {
      setCost({ ...cost, [e.target.name]: e.target.value });
    }
  };
  return (
    <div>
      <Card>
        <CardBody className="d-flex justify-content-between">
          <h3>All Costs</h3>
          <Button
            color="success"
            onClick={() => {
              props.openModal();
              setButton(false);
            }}
          >
            +
          </Button>
        </CardBody>
      </Card>

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
              invalid={isExist.price}
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
                <option key={cat.id}>{cat.name}</option>
              ))}
            </Input>
            <Input
              value={cost.desc}
              className="mb-3"
              onChange={handleChange}
              name="desc"
              placeholder="Description"
              type="textarea"
              invalid={isExist.desc}
            />

            <input
              value={cost.dateTime}
              className="form-control mb-3"
              onChange={handleChange}
              name="dateTime"
              placeholder="Date and time"
              type="datetime-local"
              invalid={isExist.dateTime}
            />
          </ModalBody>
          <ModalFooter>
            <Button onClick={props.closeModal}>Cancel</Button>
            <Button type="submit">Add</Button>
          </ModalFooter>
        </Form>
      </Modal>

      <div className="row justify-content-center py-3">
        <div className="col-12 " style={{ height: "200px" }}>
          <RChartJs
            data={filterCosts.map((item) => item.price * 1)}
            dataName={filterCosts.map((item) => item.category)}
          />
        </div>
      </div>

      {filterCosts
        .map((item) => {
          const ar = item.dateTime.split("");
          ar.splice(ar.indexOf("T"), 1, " ");
          item.dateTime = ar.join("");
          return item;
        })
        .map((item,index) => (
          <Cards key={index} {...item} costs={costs} />
        ))}
    </div>
  );
};

export default HomeP;
