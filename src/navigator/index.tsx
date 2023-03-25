import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import DetailScreen from '@pages/Detail';
export type RootStackParamList = {
  BottomTabs: undefined;
  Detail: undefined;
};
export type RootStackNavigation = NativeStackNavigationProp<RootStackParamList>;
const Stack = createNativeStackNavigator<RootStackParamList>();
function Navigator() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent></StatusBar>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          // gestureEnabled: true,
          // gestureDirection: 'horizontal',
        }}>
        <Stack.Screen name="BottomTabs" component={BottomTabs}></Stack.Screen>
        <Stack.Screen
          options={{ headerTitle: '详情' }}
          name="Detail"
          component={DetailScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
