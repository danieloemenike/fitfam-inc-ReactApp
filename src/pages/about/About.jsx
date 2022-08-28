import React from 'react'
import Header from '../../Components/Header'
import HeaderImage from "../../images/header_bg_1.jpg"
import "./about.css"
import StoryImage from "../../images/about1.jpg"
import VisionImage from "../../images/about2.jpg"
import MissionImage from "../../images/about3.jpg"
const about = () => {
  return (
   <>
      <Header title="About us" image={HeaderImage}> 
        Dolore elit quis proident reprehenderit. Elit Lorem culpa reprehenderit laborum occaecat occaecat dolor sit sint dolore. Labore irure exercitation nostrud anim aliqua .
      
      </Header>

      <section className='about_story'>
        <div className='container about_story-container'>
        <div className='about_section-image'>
        <img src={StoryImage} alt="Story Image"/>
      </div>
          <div className='about_section-content'>
            <h1>Our Story</h1>
            <p>Laboris ad qui qui et Lorem ullamco tempor minim ex qui ex ea labore. Magna deserunt velit tempor dolore enim proident nulla mollit. Officia magna officia deserunt consectetur.</p>
            <p> Cillum aliqua aute id elit culpa aliqua. Occaecat exercitation voluptate sit cillum mollit. Enim nulla cillum enim eu amet sint mollit voluptate culpa. Enim velit nulla culpa consectetur officia estit. duis nulla pariatur ut voluptate eiusmod esse proident. Sit aliquip laboris. adipisicing et do proident magna labore excepteur qui et aliquip.</p>
            <p>Labore do sit proident enim. Incididunt minim officia enim eiusmod mollit ipsum labore officia sit ut anim. Ullamco aliquip fugiat dolor irure sit voluptate quis tempor nisi excepteur ex dolor. Mollit excepteur cupidatat consectetur aliqua nisi et Lorem et duis et voluptate pariatur aliqua sit.</p>
          </div>
        
        </div>
      
      </section>

      <section className='about_vision'>
      <div className='container about_vision-container'>
       
        <div className='about_section-content'>
          <h1>Our Vision</h1>
          <p>Laboris ad qui qui et Lorem ullamco tempor minim ex qui ex ea labore. Magna deserunt velit tempor dolore enim proident nulla mollit. Officia magna officia deserunt consectetur.</p>
          <p> Cillum aliqua aute id elit culpa aliqua. Occaecat exercitation voluptate sit cillum mollit. Enim nulla cillum enim eu amet sint mollit voluptate culpa. Enim velit nulla culpa consectetur officia est aute Lorem tempor do mollit velit dolor velit. Occaecat consectetur.</p>
         
        </div>
         <div className='about_section-image'>
          <img src={VisionImage} alt="Our Vision Image"/>
        </div>
      </div>
    
    </section>


    <section className='about_mission'>
        <div className='container about_mission-container'>
        <div className='about_section-image'>
        <img src={MissionImage} alt="Our Mission Image"/>
      </div>
          <div className='about_section-content'>
            <h1>Our Mission</h1>
            <p>Laboris ad qui qui et Lorem ullamco tempor minim ex qui ex ea labore. Magna deserunt velit tempor mollit. Officia magna officia deserunt consectetur.</p>
            <p> Cillum aliqua aute id elit culpa aliqua. Occaecat exercitation voluptate sit cillum mollit. Enim nulla aute Lorem tempor do mollit velit dolicing et do proident magna labore excepteur qui et aliquip.</p>
            <p>Proident enim. Incididunt minim officia enim eiusmod mollit ipsum labore officia sit ut anim cupidatat consectetur aliqua nisi et Lorem et duis et voluptate pariatur aliq.</p>
          </div>
        
        </div>
      
      </section>

   </>
  )
}

export default about
