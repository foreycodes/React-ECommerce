import React from 'react'

export const Product = (props) => {
    const { id, productName, price, productImage } = props.data; 
  return (
    <div className="product">
      <img src={productImage} alt={productName} height="100px"/>
      <div className="description">
        <p> {productName} </p>
        <p> ${price} </p>
      </div> 
    </div>
  )
}
