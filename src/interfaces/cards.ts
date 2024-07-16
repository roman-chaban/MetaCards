export interface CreatorsCard {
  backgroundImage: string;
  mainImage: string;
  title: string;
  iconPrimary: string;
  itemsList: {
    title: string;
    subTitle: string;
    iconSecondary?: string;
  }[];
  galleryImages: {
    primary: string;
    secondary: string;
    ternary: string;
  }[];
}

export type TypeCreatorsCards = CreatorsCard[];
