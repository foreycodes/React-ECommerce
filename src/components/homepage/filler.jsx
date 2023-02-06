import { React } from 'react'
import Button from "../button"
import TextScroll from "./textScroll" 
import Star from "../../assets/Star.svg"
import FillerImg from "../../assets/tripleFillerImg.jpg"
import { motion} from "framer-motion"
import Blur from "../blur"
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
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero aspernatur et vel voluptatem sint laborum ab. Harum, cum! Excepturi quas ad natus rem quam voluptatem nam laborum consequatur esse sit.</p>
              <Button variant="dark" />
            </div>
        </div>
      </div>
    </div>
  )
}



export default Filler
