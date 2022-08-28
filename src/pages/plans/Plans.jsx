import Header from "../../Components/Header"
import HeaderImage from "../../images/header_bg_4.jpg"
import Card from "../../UI/Card"
import {plans}from "../../data"
import "./plans.css"
const Plans = () => {
  return (
    <>
    <Header title="Membership Plans" image={HeaderImage}>
    Deserunt ex sit tempor amet reprehenderit occaecat.Veniam exercitation labore ullamco sunt cillum.Est quis cillum esse mollit velit.
    </Header>
    <section className="plans">
    
 
    <div className="container plans_container">
      {
        plans.map(({id,name,desc,price,features})=>{
          return <Card key={id} className="plan">
            <h3>{name}</h3>
            <small> {desc}</small>
            <h1>{`$${price}`}</h1> <h2>/mo</h2>
            <h4>Features</h4>
            {
              features.map(({feature,available},index)=>{
                return <p key={index} className={!available ?'disabled' : ''}>{feature}</p>
              })
            }
            <button className="btn lg">Choose plan </button>
          </Card>
        })
      }
    </div>
    </section>
    </>
  )
}

export default Plans
