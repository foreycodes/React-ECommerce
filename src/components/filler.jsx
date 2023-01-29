import React from 'react'
import "../App.css";
import "./filler.css"; 

const filler = () => {
  return (
    <div className="filler-container">
      <div className="filler-wrapper">
        <img className="filler-img" src={require("../assets/fillerImg.jpg")} alt="A table"></img>
        <div className="filler-text-wrap">
            Hand Crafted 
            <img alt="star" src={require("../assets/Star.png")}></img>
            Sustainable 
            <img alt="star" src={require("../assets/Star.png")}></img>
            Locally Sourced
            <img alt="star" src={require("../assets/Star.png")}></img>
          </div>
       </div>
       <div className="triple-filler-wrapper">
        <div className="triple-filler-img-wrapper">
        <img className="triple-filler-img" src={require("../assets/tripleFillerImg.jpg")} alt="Couch and furnishings"></img>
        </div>
        <div className="filler-line"></div>
        <div className="filler-right-content">
          <h2>MODERNITY</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam similique esse officia dolores. Earum veritatis ad ipsum numquam maiores explicabo vitae atque repellat cupiditate! Voluptatum minus earum soluta at corporis?</p>
          <button>Shop collection</button>
        </div>
       </div>
    </div>

  )
}

export default filler
