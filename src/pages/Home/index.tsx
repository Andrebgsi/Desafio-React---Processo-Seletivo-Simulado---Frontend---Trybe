import { useContext, useEffect, useState } from 'react';
import IBGEContext from '../../context/IBGEContext';
import BtnTop from '../../components/BtnTop';
import Search from '../../components/Search';
import Filter from '../../components/Filter';
import CardNews from '../../components/CardNews';
import CardDestaque from '../../components/CardDestaque';
import styles from './Home.module.css';

export default function Home() {
  const { data, filterSelect, inputSearch } = useContext(IBGEContext);
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    if (filterSelect === 'all') {
      setFilteredData(
        data.filter((news) => news.titulo.toLowerCase()
          .includes(inputSearch.toLowerCase())),
      );
    } else if (filterSelect === 'Notícia') {
      const noticias = data.filter((news) => news.tipo === filterSelect);
      setFilteredData(
        noticias.filter((news) => news.titulo.toLowerCase()
          .includes(inputSearch.toLowerCase())),
      );
    } else if (filterSelect === 'Release') {
      const release = data.filter((news) => news.tipo === filterSelect);
      setFilteredData(
        release.filter((news) => news.titulo.toLowerCase()
          .includes(inputSearch.toLowerCase())),
      );
    }
  }, [filterSelect, data, inputSearch]);

  return (
    <div className={ styles.Home }>

      <div className={ styles.DestaqueHome }>
        {filteredData.length > 0
        && <CardDestaque
          id={ filteredData[0].id }
          imageIntro={ filteredData[0].imageIntro }
          titulo={ filteredData[0].titulo }
          introducao={ filteredData[0].introducao }
          link={ filteredData[0].link }
          tipo={ filteredData[0].tipo }
          data_publicacao={ filteredData[0].data_publicacao }
        />}
      </div>

      <div className={ styles.HeaderHome }>
        <Search />
        <Filter />
      </div>

      <div className={ styles.BodyHome }>
        {filteredData.map((news) => (
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
      <BtnTop />
    </div>
  );
}
