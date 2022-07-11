import React, { useEffect, useState } from 'react'
import CardBook from "./CardBook";
import '../styles/styleItemBook.css'  


function CardsList() {


   const [booksApi, setBooksApi] = useState([]);
    useEffect(()=>{
       axios.get("https://sheetlabs.com/MELQ/catalog")
       .then((response) =>{
       setBooksApi(response.data)
       })
    },[isbn])

     
    return (
        <main className="list-books">
           {
            booksApi.map ((item,index) =>(
            <CardBook key={index} titol={item.titol} autoria={item.autoria} isbn={item.isbn} genre={item.genre} year={item.year} editorial={item.editorial} image={item.image}/>
            ))
           }
        </main>
    );
}
export default CardsList;
