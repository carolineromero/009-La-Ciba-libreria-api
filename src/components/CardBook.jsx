function CardBook ({bookName, author, year, genre, image, editorial}) {
    return (

<div className='itemBooksContainer'>
      <div className='itemBookSquare'>
          <div className='marcoBookImg'>
              <img className='bookCover' src={image} alt ='imageBook'/>
          </div>
      <div className="containerInferior">
      <div className='iconContainer'>
            <div className='iconContainerLeft'>
                <i class="fa-solid fa-star"></i>
                <i className="fa-solid fa-heart"></i>
                <a className="fa-solid fa-eye" href="./detailsbook"></a>
           </div>
            <div className='iconContainerRight'>
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-solid fa-trash-can"></i>
            </div>
      </div>
      </div>
      <div className="titleBook">
          <p className="title">{bookName}</p>
          <p className="author">{author}</p>
          <p className="year">{year}</p>
      </div>
  </div>
 
</div>

    );
}

export default CardBook;