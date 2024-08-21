import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import colors from './styles/colors';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Top"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Top') {
            iconName = 'home';
            return <AntDesign name={iconName} size={size} color={color} />;
          } else if (route.name === 'Favorites') {
            iconName = 'favorite-border';
            return <MaterialIcons name={iconName} size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: colors.black, 
        tabBarInactiveTintColor: colors.border, 
        tabBarStyle: {
          backgroundColor: colors.white, 
          borderTopWidth: 1, 
          borderTopColor: '#ddd', 
        },
        headerShown: true, 
      })}
    >
      <Tab.Screen name="Top" component={HomeScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      
    </Tab.Navigator>
  );
};

export default TabNavigator;
