import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer>
      <h3 className={ styles.FooterTitle } data-testid="Layout-Footer">
        Desafio Frontend Trybe - Processo Seletivo Simulado
      </h3>
    </footer>
  );
}
