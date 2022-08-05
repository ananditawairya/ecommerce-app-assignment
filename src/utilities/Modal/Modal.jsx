import React from 'react'

function Modal({children}) {
  if(!open) return null
  return (
    <div>{children}</div>
  )
}

export default Modal