import { RouteProp, TabNavigationState } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from '@pages/Home';
import ListenScreen from '@pages/Listen';
import FoundScreen from '@pages/Found';
import AcountScreen from '@pages/Acount';
import { RootStackNavigation, RootStackParamList } from '.';
import { useEffect } from 'react';
import IconFont from '@assets/iconfont';
import HomeTabs from './HomeTabs';
export type BottomTabParamList = {
  HomeTabs: undefined;
  Listen: undefined;
  Found: undefined;
  Account: undefined;
};
const Tab = createBottomTabNavigator<BottomTabParamList>();
type Route = RouteProp<RootStackParamList, 'BottomTabs'>;
interface Iprops {
  navigation: RootStackNavigation;
  route: Route;
}

const TAB_TITLE_MAP = {
  HomeTabs: '首页',
  Listen: '我听',
  Found: '发现',
  Account: '我的',
};

function BottomTabs({ navigation, route }: Iprops): JSX.Element {
  useEffect(() => {
    const tabState = navigation.getState().routes[0].state;
    const tabName = tabState?.routes[tabState.index as number].name;
    navigation.setOptions({
      headerTitle:
        TAB_TITLE_MAP[tabName as keyof typeof TAB_TITLE_MAP] || '首页',
    });
  }, [navigation, route]);

  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarActiveTintColor: '#f86442' }}>
      <Tab.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{
          tabBarLabel: '首页',
          tabBarIcon: ({ color, size }) => (
            <IconFont name="icon-shouye" size={size} color={color}></IconFont>
          ),
        }}
      />
      <Tab.Screen
        name="Listen"
        component={ListenScreen}
        options={{
          tabBarLabel: '我听',
          tabBarIcon: ({ color, size }) => (
            <IconFont name="icon-yinle" size={size} color={color}></IconFont>
          ),
        }}
      />
      <Tab.Screen
        name="Found"
        component={FoundScreen}
        options={{
          tabBarLabel: '发现',
          tabBarIcon: ({ color, size }) => (
            <IconFont name="icon-zhaopian" size={size} color={color}></IconFont>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AcountScreen}
        options={{
          tabBarLabel: '我的',
          tabBarIcon: ({ color, size }) => (
            <IconFont name="icon-wode" size={size} color={color}></IconFont>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTabs;
