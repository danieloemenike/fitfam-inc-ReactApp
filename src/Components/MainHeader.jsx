import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../images/main_header.png'
const MainHeader = () => {
  return (
    <header className='main_header'>

      <div className = "container main_header-container" >
         <div className = "main_header-left">
            <h4> 365 Days of workout</h4>
              <h1> Join the legend of the Fitness World</h1>
                <p className = "lorem-p">
                Lorem labore minim ipsum incididunt id culpa culpa dex anim sunt aliquip cillum cupidatat occaecat enim eu ex sit. 
                </p>
           <Link to="/plans" className="btn lg">Get Started!</Link>
         </div>
          <div className='main_header-right'>
              <div className='main_header-circle'> </div>
              <div className='main_header-image'>
                <img src={Image} alt='main header image' />
              </div>
          </div>
      </div>
    
    </header>
  )
}

export default MainHeader