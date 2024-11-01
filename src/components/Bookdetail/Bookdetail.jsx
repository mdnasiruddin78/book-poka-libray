import {  useParams } from "react-router-dom";


const Bookdetail = () => {

    const {bookId} = useParams()
    console.log(bookId)
    return (
        <div>
            <h3>book details: {bookId}</h3>
        </div>
    );
};

export default Bookdetail;