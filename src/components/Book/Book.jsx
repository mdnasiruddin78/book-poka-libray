import { Link } from "react-router-dom";


const Book = ({book}) => {
    const {bookId,image,bookName,author,tags,category} = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card p-6">
            <figure className="bg-blue-200 py-8 rounded-lg">
                <img
                src={image}
                className="h-[166px]"
                alt={bookName} />
            </figure>
            <div className="card-body">
               <div className="flex justify-center space-x-4">
               {
                    tags.map((tag,index) =><button key={index} className="btn btn-xs 
                        bg-green-200 text-green-500">{tag}</button>)
                }
               </div>
                <h2 className="card-title">
                {bookName}
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>By: {author}</p>
                <div className="divider"></div>
                <div className="card-actions justify-between">
                <div className="badge badge-outline">{category}</div>
                <div className="badge">
                <div className="rating">
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </Link>
    );
};

export default Book;