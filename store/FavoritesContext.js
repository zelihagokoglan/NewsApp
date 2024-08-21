import React, { createContext, useState } from 'react';


export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (newsItem) => {},
  removeFavorite: (article_id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteNews, setFavoriteNews] = useState([]);

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
