import "./trainers.css"
import Header from "../../Components/Header"
import HeaderImage from "../../images/header_bg_5.jpg"
import Trainer from "../../Components/Trainer"
import { trainers } from "../../data"
import { BsInstagram } from "react-icons/bs"
import { AiOutlineTwitter } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
const Trainers = () => {
  return (
    <>
        <Header title="Our Trainers" image ={HeaderImage}>Eu velit commodo amet ea.Culpa occaecat dolor dolor ex mollit ea minim laex dolore aute do fugiat elit ex sit. mollit elit occaecat Lorem elit aliquip.
        </Header>
      <section className="trainers"> 
      
      <div className="container trainers_container">
      {
        trainers.map(({id,image,name,job,socials})=>{
         return <Trainer key={id} image={image} name={name}job={job} socials={
            [
              {icon: <BsInstagram/>,link:socials[0]},
              {icon: <AiOutlineTwitter/>,link:socials[1]},
              {icon: <FaFacebookF/>,link:socials[2]},
              {icon: <FaLinkedin/>,link:socials[3]}
            ]
          }/>
        })
      }
      
      </div>
      
      
      </section>
   </>
  )
}

export default Trainers
