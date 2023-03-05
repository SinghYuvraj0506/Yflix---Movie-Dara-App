import React from 'react'
import "./style.css"

// just a parent div which centres other tags inside it automatically--------------------------

function ContentWrraper({children}) {
  return (
    <div className="contentWrapper">{children}</div>
  )
}

export default ContentWrraper