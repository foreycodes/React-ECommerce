import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./cartItem.css"; 

export const CartItem = (props) => {
  const { id, productName, price, productNoBg, type } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img className="product-img" src={require(`../../assets/${type}/${productNoBg}`)} alt={productName}/>
      <div className="description">
        <p> {productName} </p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
        <p> $ {price}</p>
      </div>
    </div>
  );
};