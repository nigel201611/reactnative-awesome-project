import Carousel from 'react-native-snap-carousel';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { viewportWidth, wp, hp } from '@utils/index';

const sliderWrapWidth = viewportWidth;
const itemWidth = wp(90) + wp(2) * 2;

const sliderHeight = hp(26);

export default function MyCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselItems = [
    {
      title: 'Item 1',
      text: 'Text 1',
    },
    {
      title: 'Item 2',
      text: 'Text 2',
    },
    {
      title: 'Item 3',
      text: 'Text 3',
    },
    {
      title: 'Item 4',
      text: 'Text 4',
    },
    {
      title: 'Item 5',
      text: 'Text 5',
    },
  ];
  const renderItem = ({ item }: { item: { title: string; text: string } }) => {
    return (
      <View style={styles.slider}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
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
          onSnapToItem={index => setActiveIndex(index)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sliderwrap: {
    backgroundColor: 'rebeccapurple',
    marginBottom: 50,
  },
  slidercontent: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 50,
  },
  slider: {
    backgroundColor: 'floralwhite',
    borderRadius: 5,
    height: sliderHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
  },
});
