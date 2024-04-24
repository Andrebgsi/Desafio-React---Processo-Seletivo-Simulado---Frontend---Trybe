import { useContext } from 'react';
import IBGEContext from '../../context/IBGEContext';
import CardNews from '../../components/CardNews';
import styles from './Favorites.module.css';

export default function Favorites() {
  const { favorite } = useContext(IBGEContext);

  return (
    <div className={ styles.Favorites }>
      <div className={ styles.HeaderFavorites }>
        <h1>Notícias Favoritas</h1>
      </div>
      <div className={ styles.BodyFavorites }>
        {(favorite.length === 0)
          ? <h2>Sem Notícias Favoritas</h2>
          : favorite.map((news) => (
            <div key={ news.id }>
              <CardNews
                id={ news.id }
                titulo={ news.titulo }
                introducao={ news.introducao }
                link={ news.link }
                tipo={ news.tipo }
                data_publicacao={ news.data_publicacao }
                imageIntro={ news.imageIntro }
              />
            </div>
          ))}
      </div>
    </div>
  );
}
