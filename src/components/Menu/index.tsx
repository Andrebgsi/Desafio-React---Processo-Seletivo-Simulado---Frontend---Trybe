import { NavLink } from 'react-router-dom';
import style from './Menu.module.css';

function NavBar() {
  return (
    <nav className={ style.Nav }>
      <NavLink className={ style.ButtonMenu } to="/">Início</NavLink>
      <NavLink className={ style.ButtonMenu } to="/favorites">Favoritos</NavLink>
      <NavLink className={ style.ButtonMenu } to="/desafio">Desafio</NavLink>
    </nav>
  );
}

export default NavBar;
