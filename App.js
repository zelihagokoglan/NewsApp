import "react-native-gesture-handler";
import React from "react";
import AppNavigator from "./src/AppNavigtor";
import RootLayoutNav from "./src/root-layout";

const App = () => {
  return (
    <RootLayoutNav>
      <AppNavigator />
    </RootLayoutNav>
  );
};
export default App;
