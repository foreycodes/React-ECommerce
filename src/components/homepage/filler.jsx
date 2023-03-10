import { React } from 'react'
import Button from "../button"
import TextScroll from "./textScroll" 
import Star from "../../assets/Star.svg"
import FillerImg from "../../assets/tripleFillerImg.jpg"
import { motion } from "framer-motion"
import "../../App.css";
import "./filler.css"; 

const Filler = () => {
  return (
    <div className="filler-content">
      <TextScroll />
      <div className="filler-wrapper"> 
      <motion.div 
      whileHover={{
        rotate:30,
      }}
      >
          <img className="filler-star" src={Star} alt="Star"></img>     
          </motion.div>  
          <div className="filler-container">
            <div className="filler left">
            <img className="filler-img" src={FillerImg} alt="Table and chairs"></img>
            </div>
            <div className="filler mid"></div>
            <div className="filler right">
              <h2>Comfort</h2>
              <p>Experience the ultimate in comfort and luxury with our plush seating options and sumptuous bedding. Whether you're entertaining guests or relaxing at home, our furniture will create an ambiance of luxury and opulence.</p>
              <Button variant="dark" />
            </div>
        </div>
      </div>
    </div>
  )
}



export default Filler
