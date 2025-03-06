import { authorData } from "../api"
import Book from "../components/Book";
const Author = () => {
  const data = authorData()
  return <div className="container mx-auto lg:md:py-8 p-5 text-black">
    <div className="">
      <h1 className="text-4xl font-bold mb-8 text-center">{data.name}</h1>
      <div className="grid grid-cols-5 gap-8">
        <div className="col-start-1 col-end-2"><img src={data.image} alt={data.name} className="w-full h-auto rounded-lg" /></div>
        <div className="col-start-2 col-end-6">
          <h2 className="text-2xl font-bold">Rating</h2>
          <p className="mb-4">{data.rating}</p>
          <h2 className="text-2xl font-bold">Genres</h2>
          <ul className="list-disc ml-5 mb-5">
            {data.genres.map((genre, index) => <li key={index}>{genre}</li>)}
          </ul>
          <h2 className="text-2xl font-bold">About</h2>
          <p className="text-lg mb-4">{data.info}</p></div>
      </div>
      <div className="">
        <h2 className="text-2xl font-bold">Books</h2>
        <ul className="grid grid-cols-5 gap-x-4 gap-y-12">
          {data.author_books.map((book) => (
            <Book book={book} key={`Author-${book.book_id}`} />
          ))} 
        </ul>
      </div>
    </div>
  </div>;
};

export default Author;
