import styles from './Desafio.module.css';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';

export default function Desafio() {
  return (
    <div className={ styles.BgDesafio }>
      <div className={ styles.Desafio }>
        <h1 className={ styles.TituloDesafio }>
          Desafio Frontend Trybe
        </h1>
        <h2 className={ styles.SubtituloDesafio }>
          :: Processo Seletivo Simulado ::
        </h2>
        <div className={ styles.BodyDesafio }>
          <h2>Objetivo</h2>
          <p>
            Desenvolver uma aplicação que consuma a API de notícias do IBGE
            e exiba as notícias em uma lista. Cada item da lista deve ter um
            botão de favoritar. Ao clicar no botão de favoritar, a notícia
            deve ser salva no localStorage e o botão deve mudar de cor para
            indicar que a notícia foi favoritada. A aplicação deve ter uma
            página de favoritos que exibe as notícias favoritadas.
          </p>

          <h2>Requisitos</h2>
          <ul>
            <li>Consumir a API de notícias do IBGE</li>
            <li>Exibir as notícias em uma lista</li>
            <li>Botão de favoritar</li>
            <li>Salvar notícias favoritadas no localStorage</li>
            <li>Página de favoritos</li>
          </ul>

          <h2>Observações</h2>
          <p>
            O layout da aplicação é livre, mas deve ser responsivo. A aplicação
            deve ser desenvolvida em React.
          </p>

          <h2>Entrega</h2>
          <p>
            O código da aplicação deve ser disponibilizado em um repositório
            público no GitHub.
          </p>

          <h2>Tempo</h2>
          <p>
            O tempo para desenvolvimento do desafio é de 10 dias.
          </p>
          <h2>Fornecedor da API</h2>
          <a target="_blank" href="https://www.ibge.gov.br/" rel="noreferrer">Site do IBGE</a>
          <h2>Vectors and icons by:</h2>
          <a href="https://www.svgrepo.com" target="_blank" rel="noreferrer">SVG Repo</a>

          <h3>Retornar ao repositorio no GitHub desse projeto:</h3>
          <a
            href="https://github.com/Andrebgsi/Desafio-React---Processo-Seletivo-Simulado---Frontend---Trybe"
            target="_blank"
            rel="noreferrer"
          >
            GitHub desse projeto
          </a>
        </div>
        <h1 className={ styles.ContatosTitle }>Meus contatos:</h1>
        <div className={ styles.Contatos }>
          <a
            href="https://github.com/Andrebgsi"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ github } alt="GitHub" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/andre-bacelar-goncalves/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ linkedin } alt="LinkedIn" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}
