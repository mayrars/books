import Book from './Book';

const PopularBooks = ({data}) => {
  return (
    <div >
        <h2 className="text-3xl font-bold mb-4 mt-10 text-pink-500 text-shadow-lg">Popular Books</h2>
        <div className="grid lg:md:grid-cols-5 grid-cols-1 gap-8 mt-20 flex justify-center mb-20">
            {data.map((book) => (
              <Book book={book} key={`Popular-${book.book_id}`} />
            ))}
        </div>
    </div>
   
  )
}

export default PopularBooks