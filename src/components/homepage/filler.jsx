import { React, useRef, useEffect } from 'react'
import { useInView } from "react-intersection-observer"
import Button from "../button"
import TextScroll from "./textScroll" 
import Blur from "../blur"
import "../../App.css";
import "./filler.css"; 

const Filler = () => {
  return (
    <div className="filler-container">
      <Blur />
      <TextScroll />
       <div className="triple-filler-wrapper">
        <div className="triple-filler-img-wrapper">
        <img className="filler-img triple-filler-img" src={require("../../assets/tripleFillerImg.jpg")} alt="Couch and furnishings"></img>
        </div>
        <div className="filler-line"></div>
        <div className="filler-right-content">
          <h2>MODERNITY</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam similique esse officia dolores. Earum veritatis ad ipsum numquam maiores explicabo vitae atque repellat cupiditate! Voluptatum minus earum soluta at corporis?</p>
          <Button variant='dark' />
        </div>
       </div>
    </div>

  )
}



export default Filler
