
import { useState, useEffect } from 'react';
import { searchByName } from "../api"
import SearchInput from './SearchInput';
import List from './List';
const Search = () => {
    const [books, setBooks] = useState([]);
    const [value, setValue] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const [openSearchResults, setOpenSearchResults] = useState(false)
    const onChange = (e) => setValue(e.target.value);
  
    const [debouncedValue, setDebouncedValue] = useState(value);
  
    useEffect(() => {
  
      const timer = setTimeout(() => setDebouncedValue(value), 1000)
  
      return () => clearTimeout(timer)
    }, [value]);
  
  
    useEffect(() => {
        async function fetchData() {
            const controller = new AbortController();
            if (debouncedValue) {
                setIsLoading(true)
                const data = await searchByName(debouncedValue, controller.signal)
                console.log(data)
                setBooks(data);
                setOpenSearchResults(true)
                setIsLoading(false);
            }
            return () => controller.abort();
        }
        fetchData();
  
    }, [debouncedValue])
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
                <SearchInput {...{ value, onChange }} />
                <div className={`${openSearchResults ? 'block' : 'hidden'} absolute top-14 right-0 w-full md:w-96 bg-white rounded-lg shadow-lg border border-gray-200 w-full h-80 z-10 overflow-y-scroll`}>
                    {/* If the search results are open, display the close button */}
                    <div className='flex justify-items-end w-full justify-end'>
                        <button onClick={()=>setOpenSearchResults(false)} className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-lg text-sm p-1 mb-2 bg-blue-500 cursor-pointer">
                            {/* Close button icon */}
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 6L14 14M14 6L6 14"/>
                            </svg>
                        </button>
                    </div>
                    {
                        isLoading 
                        ? <span>Loading Results...</span>
                        : 
                        <List {...{ books}} />
                    }
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
