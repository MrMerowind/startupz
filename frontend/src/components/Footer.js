import React from 'react'

export default function Footer() {
  return (
    <div id='footer' className='contentbox'>
        <div className='d-flex justify-content-between'>
            <div className='d-flex flex-column'>
                <img className='logo' src="svg/logo.svg" alt="Logo"/>
                <p className='footerTextGray' style={{marginTop: 'auto'}}>© 2020 Startupz.<br />All rights reserved.</p>
            </div>
            <div className='d-flex flex-column'>
                <p className='footerTextGrayBold'>Companies</p>
                <p className='footerTextGreen'>
                    <a href='#'>Tolq</a><br />
                    <a href='#'>LegalSite</a><br />
                    <a href='#'>Codekeeper</a><br />
                    <a href='#contact'>Feedback</a><br />
                    <a href='#'>Labs</a>
                </p>
            </div>
            <div className='d-flex flex-column'>
                <p className='footerTextGrayBold'>Contact</p>
                <p className='footerTextGray'>
                    World Trade Center - The Hague<br />
                    Prinses Margrietplantsoen 33<br />
                    2595 AM The Hague<br />
                    The Netherlands
                </p>
                <a href='#contact'>Send us an email</a>
                
            </div>
            <div className='d-flex flex-column'>
                <p className='footerTextGrayBold'>Follow us</p>
                <img className='imgSizing' src='/svg/twitter.svg' />
                <img className='imgSizing' src='/svg/linkedin.svg' />
                <img className='imgSizing' src='/svg/instagram.svg' />
            </div>
        </div>

    </div>
  )
}
