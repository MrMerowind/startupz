import React from 'react'

export default function ThumbsUpText({text, text2= null, text3 = null}) {

    const thumbsWrapper = ({
        display: 'block',
        position: 'relative',
        margin: 'auto',
    });

    const textmargin = ({
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'inline-block',
    });

  return (
    <div style={thumbsWrapper}>
        <h3>
            <img className='imageThumbLeft' src='img/thumb.png' alt='thumb up' />
            <h3 style={textmargin}>
                {text}
                {text2 ? <br /> : null}
                {text2 ? text2 : null}
                {text3 ? <br /> : null}
                {text3 ? text3 : null}
                
            </h3>
            <img className='imageThumbRight' src='img/thumb.png' alt='thumb up' />
        </h3>
        
        </div>
  )
}
