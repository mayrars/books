import { useEffect, useState, useCallback } from "react"
import { popularBooks, mostPopularBooks, nominateBooks } from "../api"
import PopularBooks from "../components/PopularBooks"
import NominatedBooks from "../components/NominatedBooks"
const Home = () => {
  return (
    <div className="text-black">
      <div className="container mx-auto py-8 ">
        <PopularBooks className="mb-10" data={popularBooks()} />
        <NominatedBooks className="mt-10" data={nominateBooks()} />
      </div>
    </div>
  )
}

export default Home