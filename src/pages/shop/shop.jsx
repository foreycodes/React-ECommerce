import React from 'react'
import { PRODUCTS } from '../../products'
import { Product } from "./product"
import './shop.css'
import "../../App.css"

const Shop = () => {
  return (
    <div className="shop">
        <div className="products"> 
        <div className="chairs"></div>
          {PRODUCTS.map((product)=> {
            if(product.type === "chairs") {
              return <Product data={product}/> 
            }
          }
        )}
      </div>
    </div>
  ); 
}

export default Shop
