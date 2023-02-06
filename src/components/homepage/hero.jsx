import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion"
import Button from "../button"
import "../../App.css";
import "./hero.css";

const Hero = () => {
  const { scrollY } = useScroll()
  const opacity = useTransform(
    scrollY,
    [-100, 0, 100, 200],
    [0, 1, 1, 0]
  )
  return (
    <div>
      <div 
      className="hero-wrapper">
          <motion.div
          style={{opacity}}
          className="hero-left-wrapper">
            <h1><span>Luxury furniture for</span>
            <span>— the modern home</span>
            </h1> 
          </motion.div>
         <motion.div 
          style={{opacity}}
          className="hero-right-wrapper">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.</p>
            <Button variant='light'/>
         </motion.div>
      </div>
    </div>
  )
}

export default Hero


