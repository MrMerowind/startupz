import React from 'react'
import '../stylesheet/App.scss'

export default function Header() {
  return (
    <div class='header'>
        <a href="./index.html"><img className='logo' src="svg/logo.svg" alt="Logo"/></a>
        <div className='headerButtons'>
          <a className='headerButton' href='#ourworks'>Startups</a>
          <a className='headerButton' href='#contact'>Contact</a>
          <a className='headerButtonOutlined' href='#hiring'>Work with us!</a>
        </div>
    </div>
  )
}
