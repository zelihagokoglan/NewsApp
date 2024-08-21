import axios from 'axios';
import { News } from '../models/newsModel';
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
        image: 1,
      }
    });

    const newsArray = response.data.results.map((newsItem) => new News({ // gelen nesneleri map ler
      article_id: newsItem.id, 
      country: newsItem.country, 
      category: newsItem.category, 
      language: newsItem.language, 
      image: newsItem.image_url,
      title: newsItem.title, 
      description: newsItem.description, 
      source_name: newsItem.source_name, 
      pubDate: newsItem.pubDate,
    }));

    return newsArray;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};
