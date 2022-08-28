import React from 'react'
import FAQS from '../../Components/FAQS'
import MainHeader from '../../Components/MainHeader'
import Programs from '../../Components/Programs'
import Values from '../../Components/Values'
import './home.css'
import Testimonials from '../../Components/Testimonials'

const Home = () => {
  return (
    <div>
    <MainHeader/>
    <Programs/>
    <Values/>
    <FAQS/>
    <Testimonials/>
  
    </div>
  )
}

export default Home