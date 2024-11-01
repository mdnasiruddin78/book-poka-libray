import {  useParams } from "react-router-dom";


const Bookdetail = () => {

    const bookId = useParams()

    return (
        <div>
            <h3>book details: {bookId}</h3>
        </div>
    );
};

export default Bookdetail;