import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import "../App.css";
import "./navbar.css";

const navbar = () => {
  return (
    <div className="navbar">
        <Link to="/">Forey Furniture</Link>
        <Link to="/cart"><ShoppingCart size={24}/></Link>
    </div>
  )
}

export default navbar
