import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import CustomDrawerContent from './components/CustomDrawerContent'; // Özel Drawer içeriğini import edin
import FavoritesScreen from './screens/FavoritesScreen';
import ProfileScreen from './screens/ProfileScreen';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName='Home'
      drawerContent={props => <CustomDrawerContent {...props} />} // Özel Drawer içeriğini kullanın
    >
      <Drawer.Screen name='Top' component={HomeScreen}/>
      <Drawer.Screen name='Favorites' component={FavoritesScreen}/>
      <Drawer.Screen name='Profile' component={ProfileScreen}/>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
