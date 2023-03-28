export type CarouselItemType = {
  title: string;
  url: string;
};
export interface CarouselDataType {
  items: CarouselItemType[];
  setItems: (items: CarouselItemType[]) => void;
}
export interface StoreType {
  carousels: CarouselDataType;
}
