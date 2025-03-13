
import { useRef, useEffect, useState } from 'react';
import { searchByName } from "../api"
import { Link } from 'react-router';
const DELAY = 1000;
const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const debounceTimeout = useRef(null);
    const [text, setText] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [openSearchResults, setOpenSearchResults] = useState(false)
    // Search function
    const performSearch =  (query) => {
        if (query.length === 0) {
            setSearchResult([]);
            return;
        }
        const result = searchResults
        setSearchResult(result);
    };
    // Debounce function
    function debounce(func, delay) {
        return function (...args) {
            if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
            debounceTimeout.current = setTimeout(() => {
                func(...args);
                debounceTimeout.current = null;
            }, delay);
        };
    }
    
    // Debounced search function
    const debouncedSearch = debounce(performSearch, DELAY);
    
    // Event handler for input changes
    const handleInputChange = async (event) => {
        const { value } = event.target;
        await searchByName(value)
        debouncedSearch(value);
    };
    /*
    async function handleSearch(e) {
        console.log(e);
        setText(e.target.value)
        const data = await searchByName(e.target.value)
        setSearchResults(data)
        setOpenSearchResults(true)
    }*/
    return (
        <div className="flex md:order-2">
            <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    <span className="sr-only">Search icon</span>
                </div>
                <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-rose-200 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." value={searchTerm} onChange={handleInputChange}/>
                <div className={`${openSearchResults ? 'block' : 'hidden'} absolute top-14 right-0 w-full md:w-96 bg-white rounded-lg shadow-lg border border-gray-200 w-full h-80 z-10 overflow-y-scroll`}>
                    <div className='flex justify-items-end w-full justify-end'>
                        <button onClick={()=>setOpenSearchResults(false)} className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-lg text-sm p-1 mb-2 bg-blue-500 cursor-pointer">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 6L14 14M14 6L6 14"/>
                            </svg>
                        </button>
                    </div>
                    <ul role="list mt-10">
                        {searchResults.map((result) =>(
                            <li className="group/item " key={result.book_id}>
                                <Link to={`/book/${result.book_id}`} className="grid grid-cols-5 gap-4">
                                    <div className='col-start-1 col-end-3 flex justify-items-center align-middle'><img src={result.cover} className='h-40 w-auto' alt="" width="100%" height="100%" /></div>
                                    <div className='text-black col-start-3 col-end-6 p-2'>
                                        <h3>{result.name}</h3>
                                        <p><strong>Rating:</strong> {result.rating}</p>
                                        <p><strong>Authors:</strong>
                                            {result.authors.map((author,i)=>(i<2 ? <span key={`${result.book_id}-${author}`}>{author}, </span> : ''))}
                                        </p>
                                        <p><strong>Year:</strong>{result.year} </p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>
    )
}

export default Search
