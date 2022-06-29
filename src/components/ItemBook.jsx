import React from 'react'

function ItemBook() {
  return (
  <>
 <div className='itemBookContainer'>
    <div className='itemBookSquare'>
      <div className='marcoBookImg'>
      <img className='bookCover' src="https://descontrol.cat/wp-content/uploads/2019/07/Captura-de-Pantalla-2020-06-17-a-les-16.29.42-699x1024.png" alt="Portada libro" />
      </div>
    </div>    
      </div>
      {/* 
      <div className='iconContainer'>
          <div className='iconContainerLeft'>
              <FontAwesomeIcon icon="fa-solid fa-heart" />
              <FontAwesomeIcon icon="fa-solid fa-star" />
              <FontAwesomeIcon icon="fa-solid fa-eye" />
          </div>
          <div className='iconContainerRight'>
                <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                <FontAwesomeIcon icon="fa-solid fa-trash" />
          </div>
      </div>
      */}
  
     <div className='itemBookText'>
        <div className="titleBook">
          <p className="title">Título libro</p>
          <p className="author">Autor</p>
          <p className="year">Año</p>
        </div>
        
      </div>
   



   

  </>
  )
}

export default ItemBook