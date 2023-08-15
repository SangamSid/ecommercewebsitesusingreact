import React, { useState } from 'react'
import {AiOutlineStar,AiFillStar} from "react-icons/ai"

const Rating = () => {
    const [rate,setRate]=useState(5);
  return (
    <div>
     {
        [...Array(5)].map((_,i)=>(
<span onClick={()=>setRate(i+1)}   >{rate>i?(<AiFillStar/>):(<AiOutlineStar/>)}</span>
        ))
     }
    </div>
  )
}

export default Rating
