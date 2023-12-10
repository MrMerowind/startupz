import React from 'react'

export default function ContactForm() {

    const formContainerStyle = ({
        backgroundColor: '#F3F3F3',
        borderRadius: '10px',
        boxShadow: '0px 8px 35px 0px rgba(187, 169, 142, 0.15)',
        paddingLeft: '5px',
        paddingRight: '5px',
        paddingTop: '5px',
        paddingBottom: '5px',
        maxWidth: '512px',
        display: 'flex',
        flexDirection: 'column'
    });

    const formInputStyle = ({
        borderRadius: '10px',
        background: '#FFF',
        boxShadow: '0px 8px 35px 0px rgba(187, 169, 142, 0.15)',
        margin: '16px',
        border: '0',
        minHeight: '54px',
        padding: '16px 18px 16px 18px',
        fontFamily: "Roboto",
        zIndex: 200,
    });

    const formInputSubmitStyle = ({
        borderRadius: '32.5px',
        background: '#3D4F5C',
        border: '1px solid #3D4F5C',
        margin: '34px',
        height: '45px',
        color: '#FBFBFA',
        fontFamily: "Circular Std Medium",
        fontSize: '18px',
        fontWeight: '500',
        lineHeight: '18px',
        zIndex: 200,
    });

  return (
    <>
        <form>
            <div style={formContainerStyle}>
                <input name='name' type='text' style={formInputStyle} placeholder='Name*'/>
                <input name='email' type='email' style={formInputStyle} placeholder='Email*'/>
                <textarea name='message' rows="8"  style={formInputStyle} placeholder='Message*' maxlength="500" height='270px !important'></textarea>
                <input type='submit' style={formInputSubmitStyle} value={"Shoot us a message"}/> 
            </div>
        </form>
    </>
  )
}
