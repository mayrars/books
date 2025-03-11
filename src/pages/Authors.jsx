import { Link } from "react-router"
import { mostPopularAuthors } from "../api"
const Authors = () => {
  const data = mostPopularAuthors()
  return (
    <div className="container mx-auto lg:md:py-8 p-5 text-black">
      <h1 className="text-4xl font-bold mb-10 text-center mt-10">Authors</h1>
      <div className="grid grid-cols-5 gap-8">
        {
          data.map((author) => {
            //Check if image exists 
            let image
            try {
              image = author.image ? author.image : "/src/assets/image-coming-soon.jpg"
            } catch (error) {
              console.log('here')
              image = "/src/assets/image-coming-soon.jpg"
            }
            return <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm" key={author.author_id}>
                <Link to={`/author/${author.author_id}`}>
                  <img className="rounded-t-lg w-full" src={image} alt={author.name} /> 
                </Link>
                <div className="p-5">
                  <Link to={`/author/${author.author_id}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-black text-center">{author.name}</h5>
                  </Link>
                </div>
            </div>

          })
        }
      </div>
    </div>
  )
}

export default Authors
