import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Desafio from './pages/Desafio';
import NotFound from './pages/not-found';

function App() {
  return (
    <div data-testid="app-render">
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="favorites" element={ <Favorites /> } />
          <Route path="desafio" element={ <Desafio /> } />
        </Route>
        <Route path="/*" element={ <NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;
