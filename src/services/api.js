import axios from "axios";
import { News } from "../models/newsModel";
import { API_KEY, BASE_URL } from "@env";

export const fetchNews = async (categories) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        size: 10,
        country: "tr",
        category: categories.join(","),
        language: "tr",
        image: 1,
      },
    });

    const newsArray = response.data.results.map(
      (newsItem) =>
        new News({
          article_id: newsItem.article_id,
          country: newsItem.country,
          category: newsItem.category,
          language: newsItem.language,
          image: newsItem.image_url,
          title: newsItem.title,
          description: newsItem.description,
          source_name: newsItem.source_name,
          pubDate: newsItem.pubDate,
        })
    );

    return newsArray;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};
