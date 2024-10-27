import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Doğru import

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (newsItem) => {},
  removeFavorite: (article_id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteNews, setFavoriteNews] = useState([]);

  // AsyncStorage veriyi kaydetmek için
  const storeData = async (favorites) => {
    try {
      const jsonValue = JSON.stringify(favorites);
      await AsyncStorage.setItem("favorites", jsonValue); // AsyncStorage
    } catch (error) {
      console.error("Favorileri kaydederken hata oluştu ", error);
    }
  };

  // AsyncStorage'dan veriyi okumak için
  const readData = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem("favorites"); // AsyncStorage
      if (storedFavorites) {
        setFavoriteNews(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error("Favorileri yüklerken hata oluştu ", error);
    }
  };

  // İlk açılışta favorileri AsyncStorage'dan oku
  useEffect(() => {
    readData();
  }, []);

  // Favoriler her değiştiğinde AsyncStorage'a kaydet
  useEffect(() => {
    storeData(favoriteNews);
  }, [favoriteNews]);

  // Favorilere haber eklemek için
  function addFavorite(newsItem) {
    setFavoriteNews((currentFavs) => [...currentFavs, newsItem]);
  }

  // Favorilerden haber silmek için
  function removeFavorite(article_id) {
    setFavoriteNews((currentFavs) =>
      currentFavs.filter((news) => news.article_id !== article_id)
    );
  }

  const value = {
    ids: favoriteNews,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
