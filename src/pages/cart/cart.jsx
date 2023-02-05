import React, { useContext } from 'react';
import { PRODUCTS } from '../../products';
import  { CartItem }  from './cartItem';
import { ShopContext } from '../../context/shop-context';
import './cart.css';
import HeroImage from '../../components/cart/heroimage'; 
import Button from '../../components/button';

export const Cart = () => {
  // testing cart
  // const cartItems = PRODUCTS;
  // 
  const { cartItems } = useContext(ShopContext);
  const { getTotalCartAmount } = useContext(ShopContext); 
  const totalCartAmount = getTotalCartAmount();
  const taxAmount = totalCartAmount * 0.08;
  const totalAmount = totalCartAmount + taxAmount;

  return (
    <div className="cart">
        <HeroImage />
        <div className="cart-container">
          <div className="cart-items">
          <div className="cart-title-container">
              <h1 className="cart-title">YOUR CART</h1>
              <div className="line"></div>
          </div>
            {PRODUCTS.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <CartItem data={product} />; 
              }
            })}
          </div>
        {totalCartAmount > 0 ? (
          <div className="checkout-container">
            <div className="order-summary-container">
              <h2 className="checkout title">ORDER SUMMARY</h2>
              <p className="order-number">#0953829</p>
            </div>
            <div className="checkout-amounts-container">
              <div className="checkout subtotal">
                <p>Subtotal</p>
                <p>${totalCartAmount}</p>
              </div>
              <div className="checkout shipping">
                <p>Shipping</p>
                <p>FREE</p>
              </div>
              <div className="checkout tax">
                <p>Tax</p>
                <p>${taxAmount}</p>
              </div>
              <div className="line"></div>
              <div className="checkout total">
                <p>Total</p>
                <p>${totalAmount}</p>
              </div>
            </div>
            {/* <button className="continue-button" onClick={() => navigate("/")}>Continue Shopping</button> */}
            <Button variant="primary" text="CONTINUE"/>
         </div>
        ) : (
          <h3>Your Cart is Empty</h3>
        )}
      </div>
    </div>
  )
}
