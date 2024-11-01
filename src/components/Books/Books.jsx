import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {

    const [books, setbooks] = useState([])

    useEffect(()=> {
        fetch('/booksData.json')
        .then(res => res.json())
        .then(data => setbooks(data))
    },[])
    return (
        <div>
            <h3 className="text-3xl font-bold text-center">Books</h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                {
                    books.map(book => <Book book={book} key={book.bookId}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;