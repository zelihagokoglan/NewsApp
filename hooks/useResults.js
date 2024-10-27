import { useState, useEffect } from "react";
import { fetchNews } from "../src/services/api";

const useResult = (category) => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchNews([category]);
        setNewsData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, [category]);

  return { newsData, loading, error };
};

export default useResult;
