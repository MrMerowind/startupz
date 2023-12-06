import React from 'react'
import '../stylesheet/App.scss'

export default function CountingWithText({number, text, text2 = null, text3 = null}) {

    const textTableIsTable = text.includes("<br/>");
    const textTable = text.split("<br/>");

    return (
        <div className='whoWeAreCountingBox'>
            <h5 className='whoWeAreCountingBoxNumber'>{number}</h5>
            <img className='whoWeAreCountingBreaker' src='svg/linebreaker.svg' alt='line break'/>
            <h4>
                {text}
                {text2 ? <br /> : null}
                {text2 ? text2 : null}
                {text3 ? <br /> : null}
                {text3 ? text3 : null}
            </h4>
        </div>
    )
}