import axios from 'axios';

const API_KEY = 'pub_49809da669dd5b5613caa6380cfe3d8733535'; 
const BASE_URL = 'https://newsdata.io/api/1/latest';

export const fetchNews = async (categories) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        size: 10, 
        country: 'tr',
        category: categories.join(','), 
        language: 'tr',
        image: 1 
      }
    });
    return response.data.results; 
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};
