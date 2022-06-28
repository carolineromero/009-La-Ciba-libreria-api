import React from 'react'
import logoLibrary from '../assets/img/logo04.png'

function Header() {
  return (
    <div>
        <div className='headerContainer'>
             <img src={logoLibrary} alt="logo library" className='logo-libr' />
        
        <nav className='headerLine'>
            <ul>
                <h1 className='bar-text'>¡Empodérate leyendo!</h1>
                <li class="bar-menu-btn">Home</li>
                <li class="bar-menu-btn">Create</li>
                <li class="bar-menu-btn">Registration</li>
            </ul>
            </nav>
        </div>
    </div>
    
  )
}

export default Header