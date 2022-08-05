import React from 'react'
import "./Button.scss"
function Button(props) {
  const {type,className,id,buttonText}=props
  return (
    <button type={type} className={`my_button ${className}`} id={id}>{buttonText}</button>
  )
}

export default Button