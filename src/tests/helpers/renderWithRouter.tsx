import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import IBGEProvider from '../../context/IBGEProvider';

const renderWithRouter = (ui: JSX.Element, { route = '/' } = {}) => {
  window.history.pushState({}, '', route);

  return {
    user: userEvent.setup(),
    ...render(
      <IBGEProvider>
        {ui}
      </IBGEProvider>,
      { wrapper: BrowserRouter },
    ),
  };
};

export default renderWithRouter;
