import { useEffect, useState, useCallback } from "react"
import { popularBooks, mostPopularBooks, nominateBooks } from "../api"
import PopularBooks from "../components/PopularBooks"
import NominatedBooks from "../components/NominatedBooks"
import MostPopularBooks from "../components/MostPopularBooks"
const Home = () => {
  return (
    <div className="text-black">
      <div className="container mx-auto lg:md:py-8 p-5">
        <PopularBooks className="mb-10" data={popularBooks()} />
        <NominatedBooks className="mt-10" data={nominateBooks()} />
        <MostPopularBooks className="mt-10" data={mostPopularBooks()} />
      </div>
    </div>
  )
}

export default Home