import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteNewsIds, setFavoriteNewsIds] = useState([]);

  function addFavorite(id) {
    setFavoriteNewsIds((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavorite(id) {
    setFavoriteNewsIds((currentFavIds) =>
      currentFavIds.filter((newsId) => newsId !== id)
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
