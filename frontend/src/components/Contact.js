import React from 'react'
import ContactForm from './ContactForm';

export default function Contact() {

    const customPaddingStyle = ({
        paddingTop: '60px',
        marginTop: '165px'
    });

    const wrapperRocketBgStyle = ({
        position: 'absolute',
        backgroundImage: 'url(./svg/logoRocket.svg)',
        backgroundSize: '200%',
        backgroundRepeat: 'no-repeat',
        transform: 'translateX(600px) translateY(600px) rotate(35deg)',
        right: '0px',
        marginTop: '0',
        width: '100%',
        height: '100%',
        mixBlendMode: 'difference',
        opacity: '0.5'
    });

  return (
    <div className='contactWrapper'>
        <div style={wrapperRocketBgStyle}></div>
        <div className='contentbox' style={{paddingBottom: '70px'}}>
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
