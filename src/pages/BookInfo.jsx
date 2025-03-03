import { singleBook } from "../api"
const BookInfo = () => {
  const data = singleBook()
  return (
    <div className="container mx-auto lg:md:py-8 p-5 text-black">
      <h1 className="text-3xl font-bold mb-4">{data.name}</h1>
      <div className="grid grid-cols-2">
        <div>
          <img src={data.cover} alt={data.name} />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Author(s)</h2>
          <ul className="list-disc ml-5 mb-5">
            {
              data.authors && data.authors.length > 0 && data.authors.map((author, index)=>{
                return <li key={index}>{author}</li>
              })
            }
          </ul>
          <h2 className="text-2xl font-bold mt-4">Pages:</h2>
          <p>{data.pages}</p>
          <h2 className="text-2xl font-bold mt-4">Published date:</h2>
          <p>{data.published_date}</p>
          <h2 className="text-2xl font-bold mb-4">Synopsis</h2>
          <p>{data.synopsis}</p>          
          <h2 className="text-2xl font-bold mt-4">Url:</h2>
          <p>{data.url}</p>
        </div>
      </div>
    </div>
  )
}

export default BookInfo