import { useEffect, useState, useContext } from 'react';
import { FavoriteType } from '../../types';
import styles from './BtnFavorite.module.css';
import FavoriteYes from '../../assets/FavoriteYes.svg';
import FavoriteNo from '../../assets/FavoriteNo.svg';
import IBGEContext from '../../context/IBGEContext';

export default function BtnFavorite({ newsFavorite }: { newsFavorite: FavoriteType }) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const { favorite, updateFavorite } = useContext(IBGEContext);

  useEffect(() => {
    const check = favorite.some((item: any) => item.id === newsFavorite.id);
    setIsFavorite(check);
  }, [favorite, newsFavorite.id]);

  const handleClick = () => {
    updateFavorite(newsFavorite);
  };

  return (
    <button
      className={ styles.BtnFavorite }
      type="button"
      onClick={ () => { handleClick(); } }
      data-testid="favorite-btn"
    >
      <img
        className={ styles.BtnImage }
        src={ isFavorite ? FavoriteYes : FavoriteNo }
        alt="Favorite"
      />
    </button>
  );
}
