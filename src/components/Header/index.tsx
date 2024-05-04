import Menu from '../Menu';
import style from './Header.module.css';

export default function Header() {
  return (
    <header
      className={ style.Style }
      data-testid="Layout-Header"
    >
      <h1 className={ style.Title }>IBGE News</h1>
      <p className={ style.Subtitle }>
        The Brazilian Institute of Geography and Statistics
      </p>
      <Menu />
    </header>
  );
}
