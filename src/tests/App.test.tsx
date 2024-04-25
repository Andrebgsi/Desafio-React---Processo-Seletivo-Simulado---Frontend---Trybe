import { screen } from '@testing-library/react';
import { afterEach, describe, vi } from 'vitest';
import { mockTestData } from './mocks/testData';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

beforeEach(async () => {
  vi.spyOn(global, 'fetch')
    .mockResolvedValue({
      json: async () => mockTestData,
    } as Response);
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('Testando a aplicação, testando a página Home', () => {
  it('01. Se o App renderiza', () => {
    renderWithRouter(<App />);
    const appElement = screen.getByTestId('app-render');  
    expect(appElement).toBeInTheDocument(); 
  });

  it('02. Se a Home renderiza o Header', async () => {
    renderWithRouter(<App />);
    const header = screen.getByTestId('Layout-Header');
    expect(header).toBeInTheDocument();
  });

  it('03. Se a Home renderiza o Footer', async () => {
    renderWithRouter(<App />);
    const footer = screen.getByTestId('Layout-Footer');
    expect(footer).toBeInTheDocument();
  });
});

describe('Testando campos de filtro e Pesquisa', () => {
  it('01. Se a Home renderiza campo de pesquisa', async () => {
    renderWithRouter(<App />);
    const searchbox = screen.getByRole('searchbox');
    expect(searchbox).toBeInTheDocument();
  });

  it('02. Se a Home renderiza campo de filtro', async () => {
    renderWithRouter(<App />);
    const filter = screen.getByTestId('Box-Filter-News');
    expect(filter).toBeInTheDocument();
  });

  it('03. Se a Home renderiza campo de filtro de notícias', async () => {
    renderWithRouter(<App />);
    const filter = screen.getByTestId('Filter-Input-Noticias');
    expect(filter).toBeInTheDocument();
  });

  it('04. Se a Home renderiza campo de filtro de releases', async () => {
    renderWithRouter(<App />);
    const filter = screen.getByTestId('Filter-Input-Release');
    expect(filter).toBeInTheDocument();
  });

  it('05. Se a Home renderiza campo de filtro de todas as notícias', async () => {
    renderWithRouter(<App />);
    const filter = screen.getByTestId('Filter-Input-all');
    expect(filter).toBeInTheDocument();
  });
});

describe('Testando a navegação do Menu', () => {
  it('01. Se a Home renderiza o menu', async () => {
    vi.spyOn(global, 'fetch')
    .mockResolvedValue({
      json: async () => mockTestData,
    } as Response);
    renderWithRouter(<App />);
    const menu = screen.getByTestId('Menu-Header-Inicio');
    expect(menu).toBeInTheDocument();
  });

  it('02. Se a Home renderiza o menu de favoritos', async () => {
    renderWithRouter(<App />);
    const menu = screen.getByTestId('Menu-Header-Favoritos');
    expect(menu).toBeInTheDocument();
  });

  it('03. Se a Home renderiza o menu de desafio', async () => {
    renderWithRouter(<App />);
    const menu = screen.getByTestId('Menu-Header-Desafio');
    expect(menu).toBeInTheDocument();
  });
});
