import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion"
import Star from "../../assets/Star.svg"
import "./textScroll.css"

const TextScroll = () => {

const { scrollYProgress } = useScroll();
const x = useTransform(scrollYProgress, [0, 1], [1000, -5000]);

return (
    <>
    <div>
        <div className="text-scroll-wrapper">
            <img className="text-scroll-img" src={require("../../assets/fillerImg.jpg")} alt="A table"></img>
            <motion.div 
            style = {{ x }}
            className="text-scroll-wrap">
                Hand Crafted 
                <img alt="star" src={Star}></img>
                Sustainable 
                <img alt="star" src={Star}></img>
                Locally Sourced
                <img alt="star" src={Star}></img>
            </motion.div>
        </div>
    </div>
    </>
    )
}

export default TextScroll
