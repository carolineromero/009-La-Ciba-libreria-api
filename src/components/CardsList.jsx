import React, { useEffect, useState } from 'react'
import CardBook from "./CardBook";
import '../styles/styleItemBook.css'  
import  serviceAxios  from '../services/serviceAxios';



function CardsList() {

   const [booksApi, setBooksApi] = useState([]);
    useEffect(()=>{
     serviceAxios.get ().then(data=> setBooksApi(data))
     
        
 
    },[])

     
    return (
        <main className="list-books">
           {
            booksApi.map ((item,index) =>(
            <CardBook key={index} titol={item.bookName} autoria={item.author} isbn={item.ISBN} genre={item.genre} year={item.year} editorial={item.editorial} image={item.image}/>
            ))
           }
        </main>
    );
}
export default CardsList;






     