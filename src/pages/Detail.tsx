import { Text, View } from 'react-native';
import { RootStackParamList } from '@navigator/index';
import { RouteProp } from '@react-navigation/native';
interface Iprops {
  route: RouteProp<RootStackParamList, 'Detail'>;
}
function DetailScreen({ route }: Iprops): JSX.Element {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default DetailScreen;
