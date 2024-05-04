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
      <p className={ styles.CardDestaqueDestTitle }>Notícia mais recente</p>
      <div className={ styles.CardDestaqueContent }>
        <div className={ styles.CardDestaqueImage }>
          <img src={ ImgSrting } alt="NewsImg" />
        </div>
        <div className={ styles.CardDestaqueBody }>
          <h2 className={ styles.CardDestaqueTitle }>
            {titulo}
          </h2>
          <p className={ styles.CardDestaqueIntroducao }>
            {introducao}
          </p>
          <div className={ styles.CardDestaqueLine }>
            <p className={ styles.CardDestaqueData }>
              {DataReroativaString}
            </p>

            <a
              href={ link }
              className={ styles.CardDestaqueLink }
              target="_blank"
              rel="noopener noreferrer"
            >
              Leia a notícia aqui
            </a>
          </div>

          <div className={ styles.CardDestaqueLine }>
            <p className={ styles.CardDestaqueTipo }>
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
