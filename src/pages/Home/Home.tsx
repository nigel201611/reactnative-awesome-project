import { RootStackNavigation } from '@navigator/index';
import { Text, View, Button } from 'react-native';
import MyCarousel from './MyCarousel';
interface Iprops {
  navigation: RootStackNavigation;
}
function HomeScreen({ navigation }: Iprops): JSX.Element {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <MyCarousel></MyCarousel>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
}

export default HomeScreen;
