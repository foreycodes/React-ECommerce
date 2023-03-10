import { React } from 'react'
import { PRODUCTS } from '../../products'
import { Product } from "./product"
import Hero from "../../components/homepage/hero"
import Filler from "../../components/homepage/filler"
import Arrow from "../../assets/arrow.svg"
import './shop.css'
import "../../App.css"

const Shop = () => {
  const category = [ "chairs", "tables" ]
  return (
    <div className="shop">
      <Hero />
      <Filler />
      {
        category.map((category, i) => 
        <div className="category-section">
            <div key={i} id="product-section" className={`product-section ${category}`}>
              <div className="category-title-container">
                <h2>{category.toUpperCase()}</h2>
                <img className="arrow" alt="arrow" src={Arrow}></img>
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
