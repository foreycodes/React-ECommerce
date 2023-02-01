import React from 'react'
import { PRODUCTS } from '../../products'
import { Product } from "./product"
import './shop.css'
import "../../App.css"

const Shop = () => {
  return (
    <div className="shop">
      <div className="products"> 
        <div className="chairs">
          <div className="title-container">
            <h2>Chairs</h2>
            <img alt="arrow" src={require("../../assets/arrow.png")}></img>
          </div>
          {PRODUCTS.filter(p => p.type === "chairs").map(p => <Product data={p} />)}
        </div>
        <div className="tables">
          <div className="title-container">
            <h2>Tables</h2>
            <img alt="arrow" src={require("../../assets/arrow.png")}></img>
          </div>
          {PRODUCTS.filter(p => p.type === "tables").map(p => <Product data={p} />)}
        </div>    
      </div>
    </div>
  ); 
}

export default Shop
