import axios from 'axios'

export async function getMostPopularBooks(){
    const options = {
        method: 'GET',
        url: 'https://hapi-books.p.rapidapi.com/month/2024/12',
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