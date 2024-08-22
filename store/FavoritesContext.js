import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (newsItem) => {},
  removeFavorite: (article_id) => {},
});

function FavoritesContextProvider({ children }) { // uygulama kapatılığında favorileri asyncStorage da tutma func.
  const [favoriteNews, setFavoriteNews] = useState([]);

  const saveFavoritesToStorage = async (favorites) => { // favorites(array) kaydetmek istediğimiz fav haberleri alır
    try {
      await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
    } catch (error) {
      console.error('Favorileri kaydederken hata oluştu ', error);
    }
  };

  const loadFavoritesFromStorage = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem('favorites');
      if (storedFavorites) {
        setFavoriteNews(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error('Favorileri yüklerken hata oluştu ', error);
    }
  };

  useEffect(() => {
    loadFavoritesFromStorage();
  }, []);

  useEffect(() => {
    saveFavoritesToStorage(favoriteNews);
  }, [favoriteNews]);

  function addFavorite(newsItem) {
    setFavoriteNews((currentFavs) => [...currentFavs, newsItem]);
  }

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
