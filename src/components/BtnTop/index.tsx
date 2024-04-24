import styles from './BtnTop.module.css';
import ArrowUp from '../../assets/ArrowUp.svg';

function BtnTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={ styles.BtnTop }
      onClick={ scrollToTop }
    >
      <img
        src={ ArrowUp }
        alt="Top Button"
      />
    </button>
  );
}

export default BtnTop;
