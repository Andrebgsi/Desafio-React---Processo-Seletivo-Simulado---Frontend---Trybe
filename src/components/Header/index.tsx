import Menu from '../Menu';
import style from './Header.module.css';

export default function Header() {
  return (
    <header className={ style.style }>
      <div className={ style.Logo }>
        <img src="https://www.ibge.gov.br/templates/novo_portal_base/imagens/logo_mobile.png" alt="IBGE" />
        <h1 className={ style.title }>News fron IBGE</h1>
      </div>
      <Menu />
    </header>
  );
}
