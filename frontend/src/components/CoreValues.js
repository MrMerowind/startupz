import React from 'react'
import CountingWithText from './CountingWithText';

export default function CoreValues() {
  return (
    <div className='contentbox'>
        <div className='spacebetweenBlock'>
            <h2  >Our core values</h2>
            <img className='imageQuestionmark' src='/img/lightbulb.png' alt='lightbulb' />
        </div>
        <div className='whoWeAreCountingBoxes'>
            <CountingWithText number={"01. Innovation"} text={"Startupz operates where entrepreneurship"} text2={"and technology intersect. We design solutions"} text3={"and turn them into businesses models."}/>
            <CountingWithText number={"02. People"} text={"Next we build teams to scale them intoTalent is what enable us"} text2={"to create great"} text3={"companies."}/>
        </div>
    </div>
  )
}
