import React from 'react'
import "./navbar.css"

import {AiOutlineSearch,AiOutlineShoppingCart} from "react-icons/ai"



const Navbar = () => {
  return (
    <div className='nav-container'>
<div className='nav-wrapper'>
    <div className="nav-left">
<div className='nav-language'>English</div>
<div className='searchContainer'>
<input type="text" className='searchInput'/>
<div className='nav-icons'>  <AiOutlineSearch/></div>

</div>

    </div>
    <div className="nav-center">
<div className='nav-logo'>POPCORN</div>

</div>
<div className="nav-right">

<button className='nav-button'>Sign In</button>
<button className='nav-button'>Register</button>

<div className='cart-box'>
    <AiOutlineShoppingCart className='nav-shoppingcart'/>
    <div className='cartText'>
        <span className='text'>2</span>
        </div>
</div>


</div>


</div>


     
    </div>
  )
}

export default Navbar
