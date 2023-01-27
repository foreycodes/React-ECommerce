import React from 'react'
import { PRODUCTS } from '../../products'
import { Product } from "./product"
import './shop.css'

const shop = () => {
  return (
    <div className="shop">
        <div>
            <h1>Forey Store</h1>
        </div>
        <div className="products">
            <div className="products"> {PRODUCTS.map((product)=> 
            (<Product data={product}/>))}</div>
        </div>
    </div>
  )
}

export default shop
