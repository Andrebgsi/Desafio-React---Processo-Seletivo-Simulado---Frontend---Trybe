export type IBGEContextType = {
  data: NewsType[];
  loading: boolean,
  error: string | null,
  favorite: FavoriteType[],
  updateFavorite: (NewsFavoriteObj: FavoriteType) => void;
  filterSelect: OptionsType,
  setFilterSelect: (filter: OptionsType) => void,
  inputSearch: string,
  setInputSearch: (input: string) => void,
};

export type NewsQueryType = {
  data: NewsType[];
  loading: boolean,
  error: string | null,
};

export type FavoriteType = {
  id: number;
  introducao: string;
  tipo: string;
  link: string;
  titulo: string;
  data_publicacao: string;
  imageIntro: string;
};

export type NewsType = {
  imageIntro: any;
  id: number;
  tipo: string;
  titulo: string;
  introducao: string;
  data_publicacao: string;
  link: string;
};

export type NewsTypeAPI = {
  imagens: string;
  imageIntro: any;
  id: number;
  tipo: string;
  titulo: string;
  introducao: string;
  data_publicacao: string;
  link: string;
};

export type OptionsType =
'all' |
'Notícia' |
'Release';

export type FilterOptionType = {
  column: OptionsType,
  value: number;
};

export type FilterType = {
  filterList: FilterOptionType[];
  addFilter: (filter: FilterOptionType) => void;
  removeFilter: (column: OptionsType) => void;
  removeAllFilters: () => void;
};

export type CardNewsProps = {
  id : number;
  imageIntro: any;
  titulo: string;
  introducao: string;
  link: string;
  tipo: string;
  data_publicacao: string;
};
