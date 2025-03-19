// eslint-disable-next-line react/prop-types
const SearchInput = ({ onChange, value }) => {
    return (
        <input
            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-rose-200 focus:ring-blue-500 focus:border-blue-500" 
            placeholder="Search..."
            type="text" 
            id="search-navbar" 
            value={value}
            onChange={onChange}
            autoFocus
        />
    )
}
export default SearchInput