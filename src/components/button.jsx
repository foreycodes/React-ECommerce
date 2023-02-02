import React from 'react'
import "./button.css"

const Button = ({variant}) => {
  return (
    <button className={`button ${ variant }`}>
        Shop collection
    </button>
  )
}

export default Button
