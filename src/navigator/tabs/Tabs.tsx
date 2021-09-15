import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Icon} from '../../assets/icons';
import Navigation from '../../base/Navigation';
import {HomeScreen} from '../../screens/Home/HomeScreen';
import {TodoScreen} from '../../screens/Todo/TodoScreen';
import {screens} from '../consts/screens';

const Tab = createBottomTabNavigator();

// const getTabBarVisible = (route: any) => {
//   const routeName = getFocusedRouteNameFromRoute(route);
//
//   if (!routeName) {
//     return true;
//   }
//
//   return hideOnScreens.indexOf(routeName) === -1;
// };

export const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName={Navigation.initialRoute}>
      <Tab.Screen
        name={screens.TODO}
        component={TodoScreen}
        options={{
          // tabBarLabel: 'Задачи',
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon name="todo" color={focused ? 'red' : 'gray'} />
          ),
        }}
      />

      <Tab.Screen
        name={screens.HOME}
        component={HomeScreen}
        options={{
          // tabBarLabel: 'Главная',
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon name="home" color={focused ? 'red' : 'gray'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
