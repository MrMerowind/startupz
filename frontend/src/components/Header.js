import React from 'react'
import '../stylesheet/App.scss'

export default function Header() {
  return (
    <div class='header'>
        <a href="./index.html"><img className='logo' src="svg/logo.svg" alt="Logo"/></a>
        <div className='headerButtons'>
          <a className='headerButton' href='#startups'><span>Startups</span></a>
          <a className='headerButton' href='#contact'><span>Contact</span></a>
          <a className='headerButtonOutlined' href='#workWithUs'><span>Work with us!</span></a>
        </div>
    </div>
  )
}
