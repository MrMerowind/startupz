import React from 'react'
import '../stylesheet/App.scss'

export default function CountingWithText({number, text, text2 = null, text3 = null}) {

    const textTableIsTable = text.includes("<br/>");
    const textTable = text.split("<br/>");

    return (
        <div className='whoWeAreCountingBox'>
            <h4 className='whoWeAreCountingBoxNumber'>{number}</h4>
            <img src='svg/linebreaker.svg' alt='line break'/>
            <h3>
                {text}
                {text2 ? <br /> : null}
                {text2 ? text2 : null}
                {text3 ? <br /> : null}
                {text3 ? text3 : null}
            </h3>
        </div>
    )
}