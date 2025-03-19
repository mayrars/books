import axios from 'axios'
import mostPopularbooks from './mostpopularbooks.json'
import popularbooks from './popularbooks.json'
import nominatebooks from './nominatebooks.json'
import singlebook from './singlebook.json'
import mostPopularauthors from './mostpopularauthors.json'
import authordata from './author.json'
import searchdata from './searchData.json'

function mostPopularBooks() {
    return mostPopularbooks;
}

function popularBooks() {
    return popularbooks;
}

function nominateBooks() {
    return nominatebooks;
}

function singleBook() {
    return singlebook;
}

function mostPopularAuthors() {
    return mostPopularauthors;
}

function authorData() {
    return authordata
}
async function searchByName(text) {
    console.log(text)
    return searchdata
}
/*async function searchByName(text) {
    const options = {
    method: 'GET',
    url: `https://hapi-books.p.rapidapi.com/search/${text}`,
    headers: {
        'x-rapidapi-key': '5429963261msh2a15d87840d5f5bp1468d2jsn265821d0744d',
        'x-rapidapi-host': 'hapi-books.p.rapidapi.com'
    }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}
*/
export { mostPopularBooks, popularBooks, nominateBooks, singleBook, mostPopularAuthors, authorData, searchByName };