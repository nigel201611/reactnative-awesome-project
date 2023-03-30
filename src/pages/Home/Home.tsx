import { RootStackNavigation } from '@navigator/index';
import { StyleSheet, ScrollView } from 'react-native';
import MyCarousel from './MyCarousel';
import Guess from './Guess';
interface Iprops {
  navigation: RootStackNavigation;
}
function HomeScreen({ navigation }: Iprops): JSX.Element {
  return (
    <ScrollView>
      <MyCarousel></MyCarousel>
      <Guess></Guess>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  homeWrap: {
    // overflow: 'auto',
  },
});

export default HomeScreen;
