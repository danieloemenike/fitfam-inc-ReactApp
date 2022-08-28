import React from 'react'
import "./navbar.css"
import {Link,NavLink} from 'react-router-dom'
import {GoThreeBars,GoX} from 'react-icons/go'
import {links} from '../data'
import logo from '../images/logox.png'
import { useState } from 'react'

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false)
  return (
    <nav>
    <div className="container nav_container">
      <Link className= "logo" to="/" onClick={()=>setIsNavShowing(false)}><img className="fit" src={logo} alt="logo"/></Link>

       <ul className= {`nav_links ${isNavShowing ? 'show_nav' : 'hide_nav'}`}>
         {links.map(({name,path},index) =>{
           return (
               <li key={index}>
                   <NavLink to ={path} className={({isActive}) => isActive ? 'active-nav': ''} onClick={()=>setIsNavShowing(prev=>!prev)}>{name}</NavLink>
               </li>
            
          )
        })}
      
      </ul>
          <button className="nav_toggle-btn" onClick={()=>setIsNavShowing(prev=>!prev)}>{
            isNavShowing ?  <GoX/>: <GoThreeBars/> 
          }</button>
    
    </div>
    </nav>
  )
}

export default Navbar