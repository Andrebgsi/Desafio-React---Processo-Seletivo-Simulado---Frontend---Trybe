import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import IBGEProvider from './context/IBGEProvider.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <IBGEProvider>
      <App />
    </IBGEProvider>
  </BrowserRouter>,
);
