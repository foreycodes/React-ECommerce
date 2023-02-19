import React from "react";
import { motion } from "framer-motion";

import "./button.css";

const Button = ({
  variant,
  href = "#product-section",
  text = "Shop collection",
}) => {
  return (
    <a href={href}>
      <motion.button whileTap={{ scale: 0.98 }} className={`button ${variant}`}>
        {text}
      </motion.button>
    </a>
  );
};

export default Button;
