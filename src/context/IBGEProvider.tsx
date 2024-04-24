import React, { useState } from 'react';
import IBGEContext from './IBGEContext';
import { fetchApiNoticia } from '../services/api';
import useFetch from '../hooks/useFetch';
import useLocalStorage from '../hooks/useLocalStorage';

import { FavoriteType, IBGEContextType, OptionsType } from '../types';

type IBGEProviderProps = {
  children: React.ReactNode;
};

type UpdateFavoriteType = (NewsFavoriteObj: FavoriteType) => void;

function IBGEProvider({ children }: IBGEProviderProps) {
  const { data, loading, error } = useFetch(fetchApiNoticia);
  const [filterSelect, setFilterSelect] = useState<OptionsType>('all');
  const [favorite, setFavorite] = useLocalStorage<FavoriteType[]>('favorites', []);
  const [inputSearch, setInputSearch] = useState('');

  // Atualizar lista de favoritos
  const updateFavorite: UpdateFavoriteType = (NewsFavoriteObj: FavoriteType) => {
    const { id } = NewsFavoriteObj;
    const isFavorite = favorite.some((item) => item.id === id);
    if (!isFavorite) {
      setFavorite([...favorite, NewsFavoriteObj]);
    } else {
      const newFavorite = favorite.filter((favoriteObj) => favoriteObj.id !== id);
      setFavorite(newFavorite);
    }
  };

  const values: IBGEContextType = {
    data,
    loading,
    error,
    filterSelect,
    setFilterSelect,
    favorite,
    updateFavorite,
    inputSearch,
    setInputSearch,
  };

  return (
    <IBGEContext.Provider value={ values }>
      {children}
    </IBGEContext.Provider>
  );
}

export default IBGEProvider;
