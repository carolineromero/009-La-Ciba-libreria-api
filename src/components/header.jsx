import React from 'react'
import logoLibrary from '../assets/img/logo04.png'

function Header() {
  return (
    <div>
        <div className='headerContainer'>
             <img src={logoLibrary} alt="logo library" className='logo-libr' />
        
        <nav className='headerLine'>
        <h1 className='bar-text'>¡Empodérate leyendo!</h1>

        <div className="containerMenu"></div>
            <ul>
            <li class="var-menu-btn">
                <a className="nav-link" href="/bookspage">Home</a>
                </li>
                <li className="var-menu-btn">
                <a className="nav-link" href="/newBook">Create</a>
                </li>
                <li className="var-menu-btn">Registration</li>
            </ul>
            </nav>
        </div>
    </div>
    
  )
}

export default Header