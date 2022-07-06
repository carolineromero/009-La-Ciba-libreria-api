import React, { useEffect, useState } from 'react'
import CardBook from "./CardBook";
import '../styles/styleItemBook.css'

function CardsList() {

   const [booksApi, setBooksApi] = useState([]);
    useEffect(()=>{
       fetch("https://sheetlabs.com/MELQ/catalog")
       .then(response=>response.json())
       .then(data=>setBooksApi(data))
    })

    return (
        <main className="list-books">
           {
            booksApi.map ((item,index) =>(
            <CardBook key={index} titol={item.titol} autoria={item.autoria} genre={item.genre} year={item.year} editorial={item.editorial} image={item.image}/>
            ))
           }
        </main>
    );
}
export default CardsList;

