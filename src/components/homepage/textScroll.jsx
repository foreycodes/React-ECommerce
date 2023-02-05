import React from 'react'
import { motion, useAnimation } from "framer-motion"
import "./textScroll.css"

const textScroll = () => {
  return (
    <div>
        <div className="filler-wrapper">
        <img className="filler-img" src={require("../../assets/fillerImg.jpg")} alt="A table"></img>
        <div className="debug" style={{ overflow: "scroll" }}>
          <motion.div
          animate={{ x: 100 }}
          initial={{ x: 0 }}
          className="text-scroll-wrap">
              Hand Crafted 
              <img alt="star" src={require("../../assets/Star.png")}></img>
              Sustainable 
              <img alt="star" src={require("../../assets/Star.png")}></img>
              Locally Sourced
              <img alt="star" src={require("../../assets/Star.png")}></img>
          </motion.div>
        </div>
       </div>
    </div>
  )
}

export default textScroll
