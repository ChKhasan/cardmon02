import React, { Component } from 'react'
import { toast } from 'react-toastify';
import { Button, Card, CardBody, CardFooter, CardImg, CardText, CardTitle, Col, NavItem, Row, Table } from 'reactstrap'
import { products } from './../data/Products';


export default class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cart: [],

        }
    }
render() {
        const state = this.state;
        const addToCart = (product) => {
           let isHave = state.cart.find((item) => item.id === product.id);
           if (isHave) {
               isHave.quantity += 1;
               this.setState({
                   cart: state.cart.map((item) => {
                       if(item.id === product.id) {
                           return isHave;
                       } else {
                           return item
                       }
                   })
               });
                toast.success('kjdcedchj')
           } else {
            toast.success('kjdceddddchj')

               this.setState({cart: [...state.cart, product]});
           }
        }
        return (
            <div>
                <Row>
                    {products.map(product => <Col xs={12} sm={6} md={4} lg={3}>

                        <Card>
                            <CardImg
                                alt="Card image cap"
                                src={product.img}
                                top
                                width="100%"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    {product.name}
                                </CardTitle>

                                <CardText>
                                    {product.inf}
                                </CardText>
                            </CardBody>
                            <CardFooter>
                                <Button color='primary' onClick={() => addToCart(product)}>
                                    Add to cart
                                </Button>
                            </CardFooter>
                        </Card>

                    </Col>
                    )}

                </Row>
                <Table dark className='mt-5'>
                    <thead>
                        <tr>
                            <th>Product name</th>
                            <th>Product price</th>
                            <th>Product quantity</th>
                            <th>Actions</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                      {state.cart.map((product) => (
                             <tr>
                             <th>{product.name}</th>
                             <td>{product.price}</td>
                             <td>{product.quantity}</td>
                             <td>actions</td>
                             <td><Button color='danger'  >delete</Button></td>
                         </tr>
                      )
                        )}
                     

                    </tbody>
                </Table>
            </div>
        )
    }
}
