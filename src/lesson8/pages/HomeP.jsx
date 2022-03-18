import React, { useState, useReducer } from 'react'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Col,
  Container,
  Row,
} from 'reactstrap'

const initialState = {
  interval: 1,
  result: 0,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'decreaseInterval':
      return { ...state, interval: state.interval - 1 }
    case 'increaseInterval':
      return { ...state, interval: state.interval + 1 }
    case 'decreaseResult':
      return { ...state, result: state.result - state.interval }
    case 'increaseResult':
      return { ...state, result: state.result + state.interval }
    default:
      return state
  }
}
const HomeP = () => {
  const [{ result, interval }, dispatch] = useReducer(reducer, initialState)

  const decreaseInterval = () => {
    CC
  }
  const increaseInterval = () => {
    dispatch({ type: 'increaseInterval' })
  }
  const decreaseResult = () => {
    dispatch({ type: 'decreaseResult' })
  }
  const increaseResult = () => {
    dispatch({ type: 'increaseResult' })
  }
  return (
    <Container>
      <Row className="align-items-center">
        <Col md={6} xs={12}>
          <Card className="w-100">
            <CardTitle>Interval</CardTitle>
            <CardBody>
              <h3 className="text-center">{interval}</h3>{' '}
            </CardBody>
   <CardFooter className="d-flex justify-content-around">
              <Button color="danger" onClick={decreaseInterval}>
                -
              </Button>
              <Button color="success" onClick={increaseInterval}>
                +
              </Button>
            </CardFooter>
          </Card>
        </Col>

        <Col md={6} xs={12}>
          <Card className="w-100">
            <CardTitle>Result</CardTitle>
            <CardBody>
              <h3 className="text-center">{result}</h3>
            </CardBody>
            <CardFooter className="d-flex justify-content-around">
              <Button color="danger" onClick={decreaseResult}>
                -
              </Button>
              <Button color="success" onClick={increaseResult}>
                +
              </Button>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default HomeP
