import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoardingScreen from './screens/OnBoardingScreen';
import TabNavigator from './TabNavigator';
import NewsDetailScreen from './screens/NewsDetailScreen'; // Eksik bileşeni ekleyin

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnBoardingScreen">
        <Stack.Screen 
          name="OnBoardingScreen" 
          component={OnBoardingScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="TabNavigator" 
          component={TabNavigator} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="NewsDetailScreen" 
          component={NewsDetailScreen} // Bileşeni ekleyin
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
