import React, { useContext } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  Row,
} from "reactstrap";
import { Context } from "../../App";
import useValue from "../hooks/useValue";

const HomeP = () => {

  const { value, setValue, interval } = useContext(Context);
  const decrease = () => {
    setValue(value - interval);
    console.log(value);
  };
  const increase = () => {
    setValue(value + interval);
    console.log(value);
  };

  return (
    <Container>
      <Row>
        <Col md={6} xs={12}>
          <Card className="w-100">
            <CardHeader>Interval</CardHeader>
            <CardBody>
              <h3 className="text-center">{value}</h3>
            </CardBody>
            <CardFooter className="d-flex justify-content-between">
              <Button color="danger" onClick={decrease}>
                -
              </Button>
              <Button color="success" onClick={increase}>
                +
              </Button>
            </CardFooter>
          </Card>
        </Col>
        {/* <Col md={6} xs={12}>
          <Card className="w-100">
            <CardHeader>Value</CardHeader>
            <CardBody>
              <h3 className="text-center">{value}</h3>
            </CardBody>
            <CardFooter className="d-flex justify-content-between">
              <Button color="danger" onClick={decreaseValue}>
                -
              </Button>
              <Button color="success" onClick={increaseValue}>
                +
              </Button>
            </CardFooter>
          </Card>
        </Col> */}
      </Row>
    </Container>
  );
};

export default HomeP;
