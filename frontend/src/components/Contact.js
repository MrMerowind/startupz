import React from 'react'
import ContactForm from './ContactForm';

export default function Contact() {

    const customPaddingStyle = ({
        paddingTop: '60px',
    });

    const wrapperRocketBgStyle = ({
        position: 'absolute',
        backgroundImage: 'url(./svg/logoRocket.svg)',
        backgroundSize: '500%',
        backgroundRepeat: 'no-repeat',
        transform: 'translateY(100px) rotate(30deg)',
        right: '0px',
        marginTop: '0',
        mixBlendMode: 'soft-light',
        opacity: '0.5',
        width: '50%',
        height: '120%',
        overflow: 'hidden',
        marginBottom: '-200px',
        marginRight: '250px'
    });

  return (
    <div className='contactWrapper'id='contact' >
        <div style={wrapperRocketBgStyle}></div>
        <div className='contentbox' style={{paddingBottom: '70px', marginTop: 0, pointerEvents: 'none'}}>
            <div className='text-left' style={customPaddingStyle}>
                <h2 className='text-white'>
                    Are you ready<br />
                    to board this rocket ship?
                </h2>
                <h4 className='text-white' style={{marginTop: '34px', marginBottom: '34px'}}>
                    Share your excitement with us.
                </h4>
                <ContactForm/>
            </div>
        </div>
    </div>
  )
}
