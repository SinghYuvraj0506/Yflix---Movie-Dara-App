import React from 'react'
import "./Loader.css"

function Loader() {
  return (
    <div className="loader_wrapper">
        <img src={require("../../Utils/loading.gif")} alt="" />
    </div>
  )
}

export default Loader
