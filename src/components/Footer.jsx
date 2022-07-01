import React from 'react'
import logoLibrary from '../assets/img/logo04.png'

function Footer() {
  return (
    <div>
        <div className="footerContainer">
            <img src={logoLibrary} alt="logo library" className='logo-libr' />
            <nav className='FooterLine'>
                <h1 className='bar-text'>¡Empodérate leyendo!</h1>
                </nav>

        </div>

    </div>
  )
}

export default Footer