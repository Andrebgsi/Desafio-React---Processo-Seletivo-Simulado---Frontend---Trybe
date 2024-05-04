import { useContext } from 'react';
import IBGEContext from '../../context/IBGEContext';
import styles from './Search.module.css';

export default function Search() {
  const { inputSearch, setInputSearch } = useContext(IBGEContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(e.target.value);
  };

  return (
    <div>
      <input
        onChange={ handleChange }
        className={ styles.Search }
        type="search"
        value={ inputSearch }
        placeholder="Search"
      />
    </div>
  );
}
