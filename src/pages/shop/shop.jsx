import { React } from 'react'
import { PRODUCTS } from '../../products'
import { Product } from "./product"
import './shop.css'
import "../../App.css"

const Shop = () => {
  const category = [ "chairs", "tables" ]
  return (
    <div className="shop">
      {
        category.map((category, i) => 
          <div key={i} className={`product-section ${category}`}>
          <div className="title-container">
            <h2>{category.toUpperCase()}</h2>
            <img alt="arrow" src={require("../../assets/arrow.png")}></img>
          </div>
          <div className="product-container">
          {PRODUCTS.filter(p => p.type === category).map(p => <Product data={p} />)}
          </div>
        </div> 
        )
      }
    </div>
  ); 
}

export default Shop
