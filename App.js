import 'react-native-gesture-handler'; // En üstte import edilmelidir
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/DrawerNavigator'; // DrawerNavigator'ı import edin
import AppNavigator from './src/AppNavigtor';

const App = () => {
  return (
    <AppNavigator/>
  );
};

export default App;
