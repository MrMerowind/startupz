import React from 'react'
import CountingWithText from './CountingWithText';


export default function WhoWeAre() {


  return (
    <div className='contentbox'>
        <div className='spacebetweenBlock'>
            <h2  >Who we are</h2>
            <img className='imageQuestionmark' src='/img/questionmark.png' alt='questionmark' />
        </div>
        
        <h4>
            We create products that have innovation and technology at their core.<br />
            We value working with talented people that understand the possibilities of today.
        </h4>
        <div className='whoWeAreCountingBoxes'>
            <CountingWithText number={"01"} text={"We develop innovative"} text2={"products, systems and"} text3={"services"}/>
            <CountingWithText number={"02"} text={"Next we build teams to"} text2={"scale them into"} text3={"companies"}/>
            <CountingWithText number={"03"} text={"Each startup solving"} text2={"one problem"} text3={"at a time"}/>
        </div>
    </div>
  )
}
