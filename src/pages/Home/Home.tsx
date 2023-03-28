import { RootStackNavigation } from '@navigator/index';
import { Text, View, Button } from 'react-native';
import MyCarousel from './MyCarousel';
import Guess from './Guess';
interface Iprops {
  navigation: RootStackNavigation;
}
function HomeScreen({ navigation }: Iprops): JSX.Element {
  return (
    <View>
      <MyCarousel></MyCarousel>
      <Guess></Guess>
    </View>
  );
}

export default HomeScreen;
