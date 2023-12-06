import React from 'react'
import CountingWithText from './CountingWithText';


export default function WhoWeAre() {

    const whoWeAreMarginStyle = ({
        marginTop: '239px'
    });

  return (
    <div className='contentbox' style={whoWeAreMarginStyle}>
        <div className='spacebetweenBlock'>
            <h2  >Who we are</h2>
            <img className='imageQuestionmark' src='/img/questionmark.png' alt='questionmark' />
        </div>
        
        <h4>
            We create products that have innovation and technology at their core.<br />
            We value working with talented people that understand the possibilities of today.
        </h4>
        <div className='whoWeAreCountingBoxes'>
            <CountingWithText number={"01"} text={"We develop innovative products, systems and services"}/>
            <CountingWithText number={"02"} text={"Next we build teams to scale them into"} text2={"companies"}/>
            <CountingWithText number={"03"} text={"Each startup solving one problem"} text2={"at a time"}/>
        </div>
    </div>
  )
}
