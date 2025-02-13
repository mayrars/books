
const PopularBooks = ({data}) => {
  return (
    <div >
        <h2 className="text-3xl font-bold mb-4 mt-10">Popular Books</h2>
        <div className="grid grid-cols-5 gap-8 mt-20 flex justify-center mb-20">
            {data.map((book) => (
              <figure className='book mt-5 mb-5' key={book.id}>
                <ul className='hardcover_front'>
                  <li>
                    <img src={book.cover} alt="" width="100%" height="100%" />
                  </li>
                  <li></li>
                </ul>
                <ul className='page'>
                  <li></li>
                  <li>
                    <h1 className="text-normal font-bold flex justify-center items-center h-full">{book.name}</h1>
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
            ))}
        </div>
    </div>
   
  )
}

export default PopularBooks