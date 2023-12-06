import React from 'react'
import ThumbsUpText from './ThumbsUpText';

export default function WeLoveSolving() {

    const thumbsWrapper = ({
        display: 'block',
        position: 'relative',
        margin: 'auto',
        marginTop: '313px'

    });

    const textmargin = ({
        paddingLeft: '109px',
        paddingRight: '50px',
        textAlign: 'justify',
        textJustify: 'inter-word',
        width: '50%'
    });

  return (
    <div className='contentbox'>
        <ThumbsUpText text={"We love solving problems!"} />
        <div className='messager-container'>
            <div className='messager-message'><h6>Hi! I am Ben, your virtual assistant.<br />How can I make your day better?</h6></div>
            <div className='messager-xbutton'>X</div>
            <div className='messager-dude-wrapper2'>
                <div className='messager-dude-wrapper1'>
                    <div className='messager-dude' alt='person'></div>
                </div>
            </div>
        </div>
    </div>
  )
}
