import { RootStackNavigation } from '@navigator/index';
import { Text, View, Button } from 'react-native';
import MyCarousel from './MyCarousel';
interface Iprops {
  navigation: RootStackNavigation;
}
function HomeScreen({ navigation }: Iprops): JSX.Element {
  return (
    <View>
      <MyCarousel></MyCarousel>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
}

export default HomeScreen;
