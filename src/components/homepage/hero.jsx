import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion"
import Button from "../button"
import Blur from "../../components/blur"
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
        <Blur />
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
            <p>Indulge in the epitome of sophistication and style with our exquisite collection of luxury furniture. Each piece is meticulously crafted by skilled artisans using the finest materials to bring you exceptional quality and timeless beauty.</p>
            <Button variant='light'/>
         </motion.div>
      </div>
    </div>
  )
}

export default Hero


