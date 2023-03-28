import { observable, action, runInAction } from 'mobx';
import { CarouselDataType, CarouselItemType } from '@config/types';
import { getCarouselImgs } from '../mock/index';
export default observable<CarouselDataType>(
  {
    items: [],
    async setItems() {
      const { data } = await getCarouselImgs();
      runInAction(() => {
        this.items = (data && data.items) || [];
      });
    },
  },
  {
    setItems: action,
  },
);
