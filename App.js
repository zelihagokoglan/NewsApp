import 'react-native-gesture-handler';
import React from 'react';
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/AppNavigtor';
import RootLayoutNav from './src/root-layout';
const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!publishableKey) {
  throw new Error(
    'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env'
  );
}

const App = () => {
  return (
        <RootLayoutNav>
        <NavigationContainer>
          <AppNavigator />
      </NavigationContainer>
          </RootLayoutNav>
      
  );
};

export default App;
