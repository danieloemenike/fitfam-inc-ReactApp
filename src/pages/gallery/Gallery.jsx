import Header from "../../Components/Header"
import HeaderImage from "../../images/header_bg_3.jpg"
import "./gallery.css"
const Gallery = () => {

  const galleryLength =15;
  const images = []
  for(let i=1; i <= galleryLength; i++){
    images.push(`src/images/gallery${i}.jpg`)
  
  }



  return (
   
    <>
      <Header title="Our Gallery " image={HeaderImage}>
      Esse ex magna et pariatur ut enim nulla veniam laborum dolor veniam.
      </Header>
      <section className="gallery">
        <div className="container gallery_container">
          {
            images.map((image,index)=>{
              return <article key={index}>
              <img src={image}alt={`Gallery image ${index + 1}`}/>
              </article>
            })
          }
        </div>
      </section>

    </>
  )
}

export default Gallery
