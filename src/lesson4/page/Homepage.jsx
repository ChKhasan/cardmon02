import React, { Component } from 'react'
import Card2 from '../comp/Card2';
import { products } from '../data/Products';

export default class Homepage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            cart: [],
        }
    }

    render() {
        const addCard = (product) => {
            this.setState({ cart: [...this.state.cart, product] })
        }

        const deleteProduct = (title) => {

            this.setState({cart: this.state.cart.filter((item) => (item.title != title))})
        }
        return (
            <div className='container'>
                <ul class="list-group my-3">
                    {this.state.cart.reduce((a,b) => {
                        return a + b.price
                    },0)}
                    {this.state.cart.map(item => (

                        <li class="list-group-item d-flex justify-content-between">
                            <p className="mb-0">price: {item.price} title: {item.title}</p>
                            <button onClick={() => deleteProduct(item.title)} className='btn btn-outline-danger'>Delete</button>
                        </li>
                    ))}
                </ul>
                <div className="row">
                    {products.map((product, index) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3" >

                            <Card2 {...product} key={index} addCard={addCard} />

                        </div>
                    ))}

                </div>
            </div>
        )
    }
}
