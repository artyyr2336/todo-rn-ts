import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Navigation from '../../base/Navigation';
import {TabsStack} from '../stack/TabsStack';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer ref={Navigation.navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {TabsStack}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
