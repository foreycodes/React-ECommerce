import React from 'react'
import "./button.css"

const Button = ({variant, text = "Shop collection"}) => {
  return (
    <button className={`button ${ variant }`}>
        { text }
    </button>
  )
}

export default Button
