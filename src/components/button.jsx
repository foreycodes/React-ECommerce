import React from 'react'
import { motion } from "framer-motion"

import "./button.css"

const Button = ({ variant, text = "Shop collection" }) => {
  return (
    <motion.button 
    whileTap={{scale: 0.98}}
    className={`button ${ variant }`}>
        { text }
    </motion.button>
  )
}

export default Button
