export type CarouselItemType = {
  id: string;
  title: string;
  url: string;
};
export type GuessItemType = {
  id: string;
  title: string;
  image: string;
};
export interface CarouselDataType {
  carouselItems: CarouselItemType[];
  guessItems: GuessItemType[];
  setCarouselItems: (items: CarouselItemType[]) => void;
  setGuessItems: (items: GuessItemType[]) => void;
}
export interface StoreType {
  homeStore: CarouselDataType;
}

export interface IChannel {
  id: string;
  title: string;
  image: string;
  remark: string;
  played: number;
  playing: number;
}
