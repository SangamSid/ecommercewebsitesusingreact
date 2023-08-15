import React from 'react'
import "./slider.css"


import {AiOutlineArrowLeft} from "react-icons/ai"
import {AiOutlineArrowRight} from "react-icons/ai"
const slider = () => {
  return (
    <div className='slider'>
        <div className='left-arrow'>
        <AiOutlineArrowLeft className='left-sign'/>
        </div>
        <div className='corrouselBox'>
<div className="imageContainer">
<img src="https://freepngimg.com/thumb/fashion/135011-bag-girl-shopping-holding-pretty.png" alt="" className="girlImage"/>
</div>
<div className="infoContainer">
<div className="slider-title">
Summer Sale
</div>
<div className="slider-desc">
Get 50 % discount! Avail this offer as soon as possible
</div>
<button> Shop Now</button>

</div>

        </div>
      <div className='right-arrow'>
         <AiOutlineArrowRight className='right-sign'/>
        </div>
    </div>
  )
}

export default slider
