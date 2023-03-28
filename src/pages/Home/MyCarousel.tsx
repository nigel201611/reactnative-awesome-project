import Carousel, {
  AdditionalParallaxProps,
  ParallaxImage,
  Pagination,
} from 'react-native-snap-carousel';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { useEffect, useState } from 'react';
import { viewportWidth, wp, hp } from '@utils/index';
import { CarouselItemType } from '@config/types';
import { observer } from 'mobx-react';
import useStore from '../../hooks/useStore';

const sliderWrapWidth = viewportWidth;
const itemWidth = wp(90) + wp(2) * 2;
const sliderHeight = hp(20);
function Mypagination({
  data,
  activeIndex,
}: {
  data: CarouselItemType[];
  activeIndex: number;
}) {
  return (
    <View style={styles.paginationWrapper}>
      <Pagination
        containerStyle={styles.paginationContainer}
        dotContainerStyle={styles.dotContainer}
        dotStyle={styles.dot}
        activeDotIndex={activeIndex}
        dotsLength={data.length}
        inactiveDotScale={0.7}
        inactiveDotOpacity={0.4}
      />
    </View>
  );
}

function MyCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { carouselItems, setCarouselItems } = useStore('homeStore');
  useEffect(() => {
    setCarouselItems([]);
  }, [carouselItems.length]);
  const renderItem = (
    { item }: { item: { title: string; url?: string } },
    parallaxProps?: AdditionalParallaxProps,
  ) => {
    return (
      <View style={styles.slider}>
        <ParallaxImage
          source={{ uri: item.url }}
          containerStyle={styles.imgContainer}
          parallaxFactor={0.4}
          spinnerColor="rgba(0,0,0,0.25)"
          style={styles.image}
          {...parallaxProps}
        />
      </View>
    );
  };

  const snapToItem = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <SafeAreaView style={styles.sliderwrap}>
      <View style={styles.slidercontent}>
        <Carousel
          layout={'default'}
          data={carouselItems}
          sliderWidth={sliderWrapWidth}
          itemWidth={itemWidth}
          renderItem={renderItem}
          onSnapToItem={snapToItem}
          hasParallaxImages={true}
        />
        <Mypagination
          data={carouselItems}
          activeIndex={activeIndex}></Mypagination>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sliderwrap: {
    marginBottom: 50,
  },
  slidercontent: {
    position: 'relative',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  slider: {
    borderRadius: 5,
    height: sliderHeight,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  imgContainer: {
    width: itemWidth,
    height: sliderHeight,
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  paginationWrapper: {
    position: 'absolute',
    bottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    paddingHorizontal: 3,
    paddingVertical: 4,
    borderRadius: 8,
  },
  dotContainer: {
    marginHorizontal: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
  title: {
    fontSize: 30,
  },
});

export default observer(MyCarousel);
