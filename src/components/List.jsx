import { Link } from "react-router"
const List = ({ books }) => { 
    return (
        <ul role="list mt-10">
            {books.map((result) =>(
                <li className="group/item " key={result.book_id}>
                    <Link to={`/book/${result.book_id}`} className="grid grid-cols-5 gap-4">
                        {/* Book cover image */}
                        <div className='col-start-1 col-end-3 flex justify-items-center align-middle'><img src={result.cover} className='h-40 w-auto' alt="" width="100%" height="100%" /></div>
                        <div className='text-black col-start-3 col-end-6 p-2'>
                            <h3>{result.name}</h3>
                            <p><strong>Rating:</strong> {result.rating}</p>
                            <p><strong>Authors:</strong>
                                {result.authors.map((author,i)=>(i<2 ? <span key={`${result.book_id}-${author}`}>{author}, </span> : ''))}
                            </p>
                            <p><strong>Year:</strong>{result.year} </p>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default List