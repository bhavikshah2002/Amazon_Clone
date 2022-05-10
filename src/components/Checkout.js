import React from 'react'
import "./Checkout.css"
import img from "../images/checkout_top.jpg"

function Checkout() {
  return (
    <div style={{backgroundColor:"white"}}>
    <img className='checkout__ad' src={img} alt="Checkout"  />
      <div className='checkout'>
      <div className="checkout__left">
      <div>
          <h2 className="checkout__title">
              Your Shopping Basket
          </h2>
      </div>
      </div>
      <div className="checkout__right">
          Your Subtotal
      </div>
    </div>
    </div>
  )
}

export default Checkout
