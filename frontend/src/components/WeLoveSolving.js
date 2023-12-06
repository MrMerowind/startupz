import React from 'react'

export default function WeLoveSolving() {

    const thumbsWrapper = ({
        width: '75%',
        display: 'block',
        position: 'relative',
        margin: 'auto',
        height: '66px',
        marginTop: '313px'

    });

    const textmargin = ({
        paddingLeft: '109px',
        paddingRight: '50px'
    });

  return (
    <div className='contentbox'>
        <div style={thumbsWrapper}>
            
            <h3>
                <img className='imageThumbLeft' src='img/thumb.png' alt='thumb up' />
                <span style={textmargin}>We love solving problems!</span>
                <img className='imageThumbRight' src='img/thumb.png' alt='thumb up' />
            </h3>
            
        </div>
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
