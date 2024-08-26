import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnBoardingScreen from "./screens/OnBoardingScreen";
import TabNavigator from "./TabNavigator";
import NewsDetailScreen from "./screens/NewsDetailScreen";
import FavoritesContextProvider from "../store/FavoritesContext";
import SignScreen from "./screens/SignScreen";
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <FavoritesContextProvider>
        <Stack.Navigator initialRouteName="OnBoardingScreen">
          <Stack.Screen
            name="OnBoardingScreen"
            component={OnBoardingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignScreen"
            component={SignScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NewsDetailScreen"
            component={NewsDetailScreen}
            options={{ headerShown: true, title: "Detay" }}
          />
        </Stack.Navigator>
      </FavoritesContextProvider>
    </NavigationContainer>
  );
};

export default AppNavigator;
