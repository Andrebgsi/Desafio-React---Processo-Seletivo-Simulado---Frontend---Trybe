import { NavLink } from 'react-router-dom';
import style from './Menu.module.css';

function NavBar() {
  return (
    <nav className={ style.Nav }>
      <NavLink
        data-testid="Menu-Header-Inicio"
        className={ style.ButtonMenu }
        to="/"
      >
        Início
      </NavLink>

      <NavLink
        data-testid="Menu-Header-Favoritos"
        className={ style.ButtonMenu }
        to="/favorites"
      >
        Favoritos
      </NavLink>

      <NavLink
        data-testid="Menu-Header-Desafio"
        className={ style.ButtonMenu }
        to="/desafio"
      >
        Desafio
      </NavLink>
    </nav>
  );
}

export default NavBar;
