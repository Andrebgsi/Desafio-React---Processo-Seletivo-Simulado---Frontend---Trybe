import { useContext } from 'react';
import IBGEContext from '../../context/IBGEContext';
import styles from './Filter.module.css';
import { OptionsType } from '../../types';

export default function Filter() {
  const { setFilterSelect } = useContext(IBGEContext);

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterSelect(event.target.value as OptionsType);
  };

  return (
    <div className={ styles.FilterForm }>
      <label className={ styles.radio }>
        <input type="radio" name="filter" value="all" onChange={ handleFilter } />
        <span className={ styles.name }>Todas</span>
      </label>
      <label className={ styles.radio }>
        <input type="radio" name="filter" value="Notícia" onChange={ handleFilter } />
        <span className={ styles.name }>Notícia</span>
      </label>

      <label className={ styles.radio }>
        <input type="radio" name="filter" value="Release" onChange={ handleFilter } />
        <span className={ styles.name }>Release</span>
      </label>
    </div>
  );
}
