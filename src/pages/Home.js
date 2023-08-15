import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import styled from "styled-components"
import Announcement from '../components/Announcement/Announcement'
import Slider from "../components/Slider/Slider"
import Rating from '../components/Rating'




const Home = () => {
  return (
    <div>
        <Announcement/>
    <Navbar/>
    <Slider/>
<Rating/>
    </div>
  )
}

export default Home
