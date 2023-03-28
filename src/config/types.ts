export type CarouselItemType = {
  id: string;
  title: string;
  url: string;
};
export interface CarouselDataType {
  carouselItems: CarouselItemType[];
  guessItems: CarouselItemType[];
  setCarouselItems: (items: CarouselItemType[]) => void;
  setGuessItems: (items: CarouselItemType[]) => void;
}
export interface StoreType {
  homeStore: CarouselDataType;
}
