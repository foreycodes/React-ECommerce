import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./cartItem.css"; 

export const CartItem = (props) => {
  const { id, productName, price, productNoBg, type } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cart-item">
      <img className="cart-product-img" src={require(`../../assets/${type}/${productNoBg}`)} alt={productName}/>
      <div className="cart-description">
      <div className="cart-product-name">{productName}</div>
        <div className="count-handler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
        <div className="cart-product-price">${price}</div>
      </div>
    </div>
  );
};