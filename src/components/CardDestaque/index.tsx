import { CardNewsProps } from '../../types';
import BtnFavorite from '../BtnFavorite';
import styles from './CardDestaque.module.css';

export default function CardDestaque({
  id,
  imageIntro,
  titulo,
  introducao,
  link,
  tipo,
  data_publicacao,
}:CardNewsProps) {
  // Função para calcular a quantidade de dias passados desde a publicação
  // https://www.hashtagtreinamentos.com/como-calcular-diferenca-entre-datas-em-javascript/

  function calcularDiasPassados(dataCalcular: string): number {
    const partesData: string[] = dataCalcular.split('/');
    const dia: number = parseInt(partesData[0], 10);
    const mes: number = parseInt(partesData[1], 10) - 1;
    const ano: number = parseInt(partesData[2], 10);

    const agora: Date = new Date();
    const dataPublicacao: Date = new Date(ano, mes, dia);
    const diferencaMilissegundos: number = agora.getTime() - dataPublicacao.getTime();

    // Converter a diferença em milissegundos para dias
    const diasPassados: number = Math
      .floor(diferencaMilissegundos / (1000 * 60 * 60 * 24));

    return diasPassados;
  }

  const DataReroativa = calcularDiasPassados(data_publicacao);
  const DataReroativaString = DataReroativa === 1
    ? `${DataReroativa} dia atrás`
    : `${DataReroativa} dias atrás`;

  const ImgSrting = `https://agenciadenoticias.ibge.gov.br/${imageIntro}`;

  return (
    <div className={ styles.CardDestaque } data-testid={ `${id}-recommendation-title` }>
      <p className={ styles.CardDestaque__DestTitle }>Notícia mais recente</p>
      <div className={ styles.CardDestaque__Content }>
        <div className={ styles.CardDestaque__Image }>
          <img src={ ImgSrting } alt="NewsImg" />
        </div>
        <div className={ styles.CardDestaque__Body }>
          <h2 className={ styles.CardDestaque__Title }>
            {titulo}
          </h2>
          <p className={ styles.CardDestaque__Introducao }>
            {introducao}
          </p>
          <div className={ styles.CardDestaque__Line }>
            <p className={ styles.CardDestaque__Data }>
              {DataReroativaString}
            </p>

            <a
              href={ link }
              className={ styles.CardDestaque__Link }
              target="_blank"
              rel="noopener noreferrer"
            >
              Leia a notícia aqui
            </a>
          </div>

          <div className={ styles.CardDestaque__Line }>
            <p className={ styles.CardDestaque__Tipo }>
              {tipo}
            </p>
            <BtnFavorite
              newsFavorite={ {
                id,
                titulo,
                introducao,
                tipo,
                data_publicacao,
                link,
                imageIntro,
              } }
            />

          </div>
        </div>
      </div>

    </div>
  );
}
