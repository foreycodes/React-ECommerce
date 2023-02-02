import React from 'react'
import Button from "./button"
import "../App.css";
import "./hero.css";


const hero = () => {
  return (
    <div>
      <div className="hero-wrapper">
          <div className="hero-left-wrapper">
            <h1>Luxury furniture for <br></br>— the modern home</h1>
          </div>
         <div className="hero-right-wrapper">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.</p>
            <Button variant='light'/>
         </div>
      </div>
    </div>
  )
}

export default hero


