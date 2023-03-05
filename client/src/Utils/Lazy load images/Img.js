import React from 'react'
import {LazyLoadImage} from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

// just a custom image component

function Img({src,className}) {
  return (
    <LazyLoadImage
        className= {className || ""}
        src= {src}
        alt=""
        effect='blur'
    />
  )
}

export default Img