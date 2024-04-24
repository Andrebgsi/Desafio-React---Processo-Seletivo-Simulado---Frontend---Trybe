import Menu from '../Menu';
import style from './Header.module.css';

export default function Header() {
  return (
    <header className={ style.style }>
      <h1 className={ style.title }>News fron IBGE</h1>
      <p className={ style.subTitle }>
        The Brazilian Institute of Geography and Statistics
      </p>
      <Menu />
    </header>
  );
}
