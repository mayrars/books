import { Link } from "react-router"

const Book = ({book}) => {
  return (
    <div className="flex flex-col items-center justify-start" key={`Popular-${book.book_id}`}>
        <figure className='book mt-5 mb-5'>
            <ul className='hardcover_front'>
            <li>
                <img src={book.cover} alt="" width="100%" height="100%" />
            </li>
            <li></li>
            </ul>
            <ul className='page'>
            <li></li>
            <li className='flex h-full items-center justify-center'>
                <Link to={book.url} className="text-normal font-bold items-center text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">View more</Link>
            </li>
            <li></li>
            <li></li>
            <li></li>
            </ul>

            <ul className='hardcover_back'>
            <li></li>
            <li></li>
            </ul>
            <ul className='book_spine'>
            <li></li>
            <li></li>
            </ul>
        </figure>
        <h2 className="text-center font-bold text-2xl mt-5">{book.name}</h2>
    </div>
  )
}

export default Book