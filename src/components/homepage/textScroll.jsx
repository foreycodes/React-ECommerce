import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion"
import "./textScroll.css"

const TextScroll = () => {

const { scrollYProgress } = useScroll();
const x = useTransform(scrollYProgress, [0, 1], [1000, -5000]);

return (
    <>
    <div>
        <div className="filler-wrapper">
            <img className="filler-img" src={require("../../assets/fillerImg.jpg")} alt="A table"></img>
            <motion.div 
            style = {{ x }}
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
    </>
    )
}

export default TextScroll
