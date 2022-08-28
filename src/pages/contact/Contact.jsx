import "./contact.css"
import HeaderImage from "../../images/header_bg_2.jpg"
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import { IoLogoWhatsapp } from "react-icons/io"
import Header from "../../Components/Header"

const Contact = () => {
  return (
  <>
      <Header title="Get in Touch" image={HeaderImage}>
      
      Exercitation in cillum qui aliquip elit nulla enim consequat sint laboris velit do adipisicing fugiat.
      </Header>


      <section className="contact">
      <div className="container contact_container">
      <div className="contact_wrapper">
        <a href="mailto:danieloemenike@gmail.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
        <a href="https://m.me/danieloemenike.com" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
        <a href="https://wa.me/+23490903664012" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
      </div>
      
      </div>
   
   </section>
  
  </>


  )
}

export default Contact
