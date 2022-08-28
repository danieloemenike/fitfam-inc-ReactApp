import {Link} from 'react-router-dom'
import Logo from "../images/logox.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'



const Footer = () => {
  return (
    <footer>
    <div className="container footer_container">
        <article>
            <Link to="/" className='logo'>
                <img src={Logo} alt="Footer Logo"/>
            </Link>
        <p>
            Lorem Nulla nostrud elit adipisicing in enim magna proident enim minim ipsum.
        </p>
        <div className='footer_socials'>
            <a href='https://linkedin.com' target="_blank" rel="noreferrer noopener"><FaLinkedin/></a>
            <a href='https://facebook.com' target="_blank" rel="noreferrer noopener"><FaFacebook/></a>
            <a href='https://twitter.com' target="_blank" rel="noreferrer noopener"><AiOutlineTwitter/></a>
            <a href='https://instagram.com' target="_blank" rel="noreferrer noopener"><AiFillInstagram/></a>
        </div>
        
        </article>
    
    <article>
    
    <h4> Permalinks</h4>
    <Link to ="/about">About</Link>
    <Link to ="/plans">Plans</Link>
    <Link to ="/trainers">Trainers</Link>
    <Link to ="/gallery">Gallery</Link>
    <Link to ="/contact">Contact</Link>
    </article>
    <article>
    
    <h4> Insight</h4>
    <Link to ="/s">Blog</Link>
    <Link to ="/s">Case studies</Link>
    <Link to ="/s">Events</Link>
    <Link to ="/s">Communities</Link>
    <Link to ="/s">FAQS</Link>
    </article>

    <article>
    
    <h4> Get In Touch</h4>
    <Link to ="/s">Contact Us</Link>
    <Link to ="/s">Support</Link>
    
    </article>
    
    </div>
    <div className='footer_copyright'>
        <small> Designed by Daniel Obinna Emenike &copy; All Rights Reserved</small>
    
    </div>
    </footer>
  )
}

export default Footer