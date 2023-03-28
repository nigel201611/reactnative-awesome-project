import { observable, action, runInAction } from 'mobx';
import { CarouselDataType } from '@config/types';
import { getCarouselImgs, getGuessItems } from '../mock/index';
export default observable<CarouselDataType>(
  {
    carouselItems: [],
    guessItems: [],
    async setCarouselItems() {
      const { data } = await getCarouselImgs();
      runInAction(() => {
        this.carouselItems = (data && data.items) || [];
      });
    },
    async setGuessItems() {
      const { data } = await getGuessItems();
      runInAction(() => {
        this.guessItems = (data && data.items) || [];
      });
    },
  },
  {
    setCarouselItems: action.bound,
    setGuessItems: action.bound,
  },
);
