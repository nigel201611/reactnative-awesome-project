import { RootStackNavigation } from '@navigator/index';
import { Text, View, Button } from 'react-native';

interface Iprops {
  navigation: RootStackNavigation;
}
function FoundScreen({ navigation }: Iprops): JSX.Element {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>FoundScreen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
}

export default FoundScreen;
