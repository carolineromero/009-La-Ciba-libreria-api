import CardBook from "./CardBook";
import bookfile from "../assets/data/books.json";
import '../styles/styleItemBook.css'

export default function ListCards() {
  
    return (
        <main className="list-books">
           {
            bookfile.books.map ((item,index) =>(
                <CardBook key={index} bookName={item.bookName} author={item.author} genre={item.genre} year={item.year} editorial={item.editorial} image={item.image}/>
            ))
           }
        </main>
    );
}