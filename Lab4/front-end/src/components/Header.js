import React from 'react'
import './Header.css'


function Header() {
  return (
    <div className='header'>
      <IconButton>
        <PersonIcon fontSize='large' className='header__icon' />
      </IconButton>
      <img className='header__logo' src='logo192.png' alt="header"/>
      <IconButton>
        <PersonIcon fontSize='large' className='header__icon'/>
      </IconButton>
    </div>
  )
}

export default Header