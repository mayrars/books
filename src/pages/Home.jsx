import { useEffect, useState } from "react"
import { getMostPopularBooks } from "../api"
const Home = () => {
  const [popularBooks, setPopularBooks] = useState([])
  useEffect(() => {
    async function __getMostPopularBooks() {
      const books = await getMostPopularBooks()
      setPopularBooks(books)
    }
    __getMostPopularBooks()
  },[])
  console.log(popularBooks)
  return (
    <div className="text-black">
        <h1>Popular books</h1>
        {
            popularBooks.map((book) => {
                return (
                    <div key={book.id}>
                        <h2>{book.title}</h2>
                        <p>{book.author}</p>
                        <img src={book.image} alt={book.title} />
                    </div>
                )
            })
        }
    </div>
  )
}

export default Home