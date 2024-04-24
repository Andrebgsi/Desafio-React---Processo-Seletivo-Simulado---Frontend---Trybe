import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './Layout.module.css';

export default function Layout() {
  return (
    <div className={ styles.Layout }>
      <Header />
      <main className={ styles.BodyPage }>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
