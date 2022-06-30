import CardBook from "./CardBook";
import bookfile from "../assets/data/books.json";
import '../styles/styleItemBook.css'

export default function ListCards() {
    const bookList = bookfile.books.map (item => { 
        return (
            <CardBook bookName={item.bookName} author={item.author} genre={item.genre} year={item.year} editorial={item.editorial} image={item.image}/>
        )
    })
    return (
        <main className="list-books">
            {bookList}
        </main>
    );
}