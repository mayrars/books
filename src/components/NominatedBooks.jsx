const NominatedBooks = ({data}) => {
  return (
    <div>
        <h2 className="text-3xl font-bold mb-4 mt-6">Nominated Books</h2>
        <div className="grid grid-cols-5 gap-8">
            {data.map((book) => (
            <div key={book.id}>
                <img src={book.cover} alt={book.name} className="w-full h-110 object-cover mb-2"/>
                <h3 className="text-lg font-medium text-center">{book.name}</h3>
            </div>  
            ))}
        </div>
    </div>
  )
}

export default NominatedBooks