import React, { Component } from 'react'

export default class Card extends Component {

  
  render() {
    return (
      <>
          <div className="card" >
      <img className="card-img-top" src='./logo512.png' alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{this.props.title}</h5>
        <p className="card-text">{this.props.text}</p>
        <div className="d-flex justify-content-between align-items-center">
        <button  className="btn btn-primary"  onClick={() => this.props.addCard({
          title: this.props.title,
          price: this.props.price,
        })} >buy</button>
          <p>{this.props.price}</p>
        </div>
      </div>
    </div>
    </>
    )
  }
}
