import { NewsTypeAPI } from '../types';

const URL_API_ALL = 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100';

export const fetchApiNoticia = async () => {
  const response = await fetch(URL_API_ALL);
  const data = await response.json();

  const news = data.items.map((Item: NewsTypeAPI) => {
    const objeto = JSON.parse(Item.imagens);
    const imageIntro = objeto.image_intro;
    return {
      id: Item.id,
      imageIntro,
      titulo: Item.titulo,
      introducao: Item.introducao,
      link: Item.link,
      tipo: Item.tipo,
      data_publicacao: Item.data_publicacao,
    };
  });
  return news;
};
