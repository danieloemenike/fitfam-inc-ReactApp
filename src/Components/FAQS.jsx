import SectionHead from './SectionHead'
import { FaQuestion } from 'react-icons/fa'
import { faqs } from '../data'
import React from 'react'
import FAQ from './FAQ'



const FAQS = () => {
  return (
        <section className='faqs'>
            <div className='container faqs_container'>
                <SectionHead icon={<FaQuestion/>} title="FAQS"/>
                <div className='faqs_wrapper'>
                {
                    faqs.map(({id,question,answer}) =>{
                        return <FAQ 
                        key={id} 
                        question={question}
                        answer={answer}
                        
                        />
                    })
                }
                
                </div>
            
            </div>
        
        </section>
  )
}

export default FAQS
