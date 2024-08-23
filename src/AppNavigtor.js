import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnBoardingScreen from "./screens/OnBoardingScreen";
import TabNavigator from "./TabNavigator";
import NewsDetailScreen from "./screens/NewsDetailScreen";
import FavoritesContextProvider from "../store/FavoritesContext";
import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
if (!publishableKey) {
  throw new Error("Missing Publishable Key.");
}

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <ClerkProvider publishableKey={publishableKey}>
      <ClerkLoaded>
        <NavigationContainer>
          <FavoritesContextProvider>
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
                component={NewsDetailScreen}
                options={{ headerShown: true, title: "Detay" }}
              />
            </Stack.Navigator>
          </FavoritesContextProvider>
        </NavigationContainer>
      </ClerkLoaded>
    </ClerkProvider>
  );
};

export default AppNavigator;
