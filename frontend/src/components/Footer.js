import React from 'react'

export default function Footer() {
  return (
    <div id='footer' className='contentbox'>
        <div className='d-flex justify-content-between' style={{height: '200px'}}>
            <div className='d-flex flex-column'>
                <img className='logo' src="svg/logo.svg" alt="Logo"/>
                <p className='footerTextGray' style={{marginTop: 'auto'}}>© 2020 Startupz.<br />All rights reserved.</p>
            </div>
            <div className='d-flex flex-column'>
                <p className='footerTextGrayBold'>Companies</p>
                <p className='footerTextGreen'>
                    <a className='buttonSimpleLink' href='#tolq'>Tolq</a><br />
                    <a className='buttonSimpleLink' href='#legalsite'>LegalSite</a><br />
                    <a className='buttonSimpleLink' href='#codekeeper'>Codekeeper</a><br />
                    <a className='buttonSimpleLink' href='#contact'>Feedback Labs</a><br />
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
                <a  className='buttonSimpleLink' href='#contact'>Send us an email</a>
                
            </div>
            <div className='d-flex flex-column'>
                <p className='footerTextGrayBold'>Follow us</p>
                <img className='imgSizing' src='/svg/twitter.svg' alt='twitter icon'/>
                <img className='imgSizing' src='/svg/linkedin.svg' alt='linkedin icon'/>
                <img className='imgSizing' src='/svg/instagram.svg' alt='instagram icon'/>
            </div>
        </div>

    </div>
  )
}
