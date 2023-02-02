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
        <div className="category-section">
            <div key={i} className={`product-section ${category}`}>
              <div className="category-title-container">
                <h2>{category.toUpperCase()}</h2>
                <img alt="arrow" src={require("../../assets/arrow.png")}></img>
              </div>
              <div className="products-container">
                {PRODUCTS.filter(prod => prod.type === category).map(prod => <Product data={prod} />)}
              </div>
          </div>
        </div> 
        )
      }
    </div>
  ); 
}

export default Shop
