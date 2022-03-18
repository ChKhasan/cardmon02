import React, { useRef, useState, useContext } from "react";
import { Badge, Button, Form, InputGroup } from "reactstrap";
import { Context } from "..";
import { toast } from "react-toastify";
import uuid from "react-uuid";

const CatigoryP = () => {
  const inputRef = useRef();

  const { categories, setCategories } = useContext(Context);
  const [id, setId] = useState();
  const createCategory = (e) => {
    e.preventDefault();
    let value = inputRef.current.value;

    if (!categories.includes(value) && value) {
      if (id) {
        categories.find((item) => item.id === id).name = value;
        setCategories([...categories]);
        value = "";
      } else {
        setCategories([
          ...categories,
          { name: value, id: uuid() },
        ]);
        value = "";
      }
    } else {
      toast.error("error");
    }
    
  };

  const changeCategory = (category) => {
    setId(category.id);
    inputRef.current.value = category.name;
  };
  return (
    <div>
      <Form onSubmit={createCategory}>
        <InputGroup>
          <input
            placeholder="Create category"
            className="form-control"
            ref={inputRef}
          />
          <Button type="submit">Add category</Button>
        </InputGroup>
      </Form>
      {categories.map((category) => (
        <Button
          className="me-3 mt-3 position-relative"
          onClick={() => changeCategory(category)}
        >
          {category.name}
          <Badge
            color="danger"
            pill
            className="position-absolute"
            style={{ top: "-10px", right: "-10px" }}
            onClick={() => {
              setCategories([...categories.filter((item) => item.id !== category.id)]);
            }}
          >
            x
          </Badge>
        </Button>
      ))}
    </div>
  );
};

export default CatigoryP;
