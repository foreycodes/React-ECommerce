import React from 'react'
import "./heroimage.css"

const heroimage = () => {
  return (
    <div className="heroImg">
    <img alt="Chairs and a mountain" src={require("../../assets/heroImg.jpg")}></img>
    </div>
  )
}

export default heroimage
