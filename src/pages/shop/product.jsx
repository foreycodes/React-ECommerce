import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
import "./shop.css"; 
import "./product.css"; 
import "../../App.css";

export const Product = (props) => {
    const { id, productName, price, type, productImage } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext); 

    const cartItemAmount = cartItems[id]; 
  return (
    <div className="product">
      <img className="product-img" src={require(`../../assets/${type}/${productImage}`)} alt={productName}/>
      <div className="product-description">
        <p className="product-name"> {productName} </p>
        <p className="product-price"> ${price} </p>
      </div> 
      <button className="addToCartBttn" onClick={() => addToCart(id)}>Add to Cart 
      {cartItemAmount > 0 && <> ({cartItemAmount})</>}
      </button>
    </div>
  )
}
