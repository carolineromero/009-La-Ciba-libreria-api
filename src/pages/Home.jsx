import React from 'react'
import Header from '../components/Header'
import logoLibrary from '../assets/img/logo04.png'
import {Link} from 'react-router-dom'


function Home() {
  return (
    <>
   <div className='homeContainer'>
    <img src={logoLibrary} alt="logo library" className='logo-librosHome' />
    <Link to = '/books'><button className='btn-enter'>ENTRAR</button></Link>
   </div>
   </>
  )
}

export default Home

