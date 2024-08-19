import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (article_id) => {},
  removeFavorite: (article_id) => {},

});

function FavoritesContextProvider({ children }) {
  const [favoriteNewsIds, setFavoriteNewsIds] = useState([]);

  function addFavorite(article_id) {
    setFavoriteNewsIds((currentFavIds) => [...currentFavIds, article_id]);
  }

  function removeFavorite(article_id) {
    setFavoriteNewsIds((currentFavIds) =>
      currentFavIds.filter((newsId) => newsId !== article_id)
    );
  }

  const value = {
    ids: favoriteNewsIds,
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
