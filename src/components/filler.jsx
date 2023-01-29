import React from 'react'
import "../App.css";
import "./filler.css"; 

const filler = () => {
  return (
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
        <div className="filler-text-wrap filler-text-wrap-2">
            Hand Crafted 
            <img alt="star" src={require("../assets/Star.png")}></img>
            Sustainable 
            <img alt="star" src={require("../assets/Star.png")}></img>
            Locally Sourced
            <img alt="star" src={require("../assets/Star.png")}></img>
        </div>
    </div>
  )
}

export default filler
