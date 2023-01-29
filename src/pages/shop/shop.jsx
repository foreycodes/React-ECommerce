import React from 'react'
import { PRODUCTS } from '../../products'
import { Product } from "./product"
import './shop.css'

const shop = () => {
  return (
    <div className="shop">
        <div className="products">
            <div className="products"> {PRODUCTS.map((product)=> 
            (<Product data={product}/>))}</div>
        </div>
    </div>
  )
}

export default shop
