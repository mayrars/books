import axios from 'axios'

async function mostPopularBooks() {

    const options = {
      method: 'GET',
      url: 'https://hapi-books.p.rapidapi.com/month/2022/3',
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_API_KEY,
        'x-rapidapi-host': 'hapi-books.p.rapidapi.com'
      }
    };
    
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

async function popularBooks() {

    const options = {
      method: 'GET',
      url: 'https://hapi-books.p.rapidapi.com/week/horror/10',
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_API_KEY,
        'x-rapidapi-host': 'hapi-books.p.rapidapi.com'
      }
    };
    
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

async function nominateBooks() {

    const options = {
      method: 'GET',
      url: 'https://hapi-books.p.rapidapi.com/nominees/romance/2020',
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_API_KEY,
        'x-rapidapi-host': 'hapi-books.p.rapidapi.com'
      }
    };
    
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

async function singleBook(book_id) {
    const options = {
    method: 'GET',
    url: `https://hapi-books.p.rapidapi.com/book/${book_id}`,
    headers: {
        'x-rapidapi-key': import.meta.env.VITE_API_KEY,
        'x-rapidapi-host': 'hapi-books.p.rapidapi.com'
    }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

async function mostPopularAuthors() {

    const options = {
    method: 'GET',
    url: 'https://hapi-books.p.rapidapi.com/top_authors',
    headers: {
        'x-rapidapi-key': import.meta.env.VITE_API_KEY,
        'x-rapidapi-host': 'hapi-books.p.rapidapi.com'
    }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
    return mostPopularauthors;
}

async function authorData(author_id) {

    const options = {
      method: 'GET',
      url: `https://hapi-books.p.rapidapi.com/author/${author_id}`,
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_API_KEY,
        'x-rapidapi-host': 'hapi-books.p.rapidapi.com'
      }
    };
    
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
async function searchByName(text) {
    const options = {
    method: 'GET',
    url: `https://hapi-books.p.rapidapi.com/search/${text}`,
    headers: {
        'x-rapidapi-key': import.meta.env.VITE_API_KEY,
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
export { mostPopularBooks, popularBooks, nominateBooks, singleBook, mostPopularAuthors, authorData, searchByName };