import React from 'react'

function DetailsBook() {
  return (
 <div className='container'>
      <div className='square'>
          <div className='bookImg'>
              <img className='bookCover' src="https://descontrol.cat/wp-content/uploads/2019/07/Captura-de-Pantalla-2020-06-17-a-les-16.29.42-699x1024.png" alt="Portada libro" />
          </div>
          <div className="title">
          <p className="titleBook">Título libro</p>
          </div>
          <div className='Lore'>Lore Ipsum</div>
      </div>
  </div>
  )
 }

  export default DetailsBook;
