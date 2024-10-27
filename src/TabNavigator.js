import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import colors from "./styles/colors";
import { useClerk } from "@clerk/clerk-expo";

const Tab = createBottomTabNavigator();

const TabNavigator = ({ navigation }) => {
  const { signOut } = useClerk();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigation.navigate("SignScreen");
    } catch (error) {
      console.log("Sign out error:", error);
    }
  };

  return (
    <Tab.Navigator
      initialRouteName="Top"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Top") {
            iconName = "home";
            return <AntDesign name={iconName} size={size} color={color} />;
          } else if (route.name === "Favorites") {
            iconName = "favorite-border";
            return <MaterialIcons name={iconName} size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: colors.black,
        tabBarInactiveTintColor: colors.border,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopWidth: 1,
          borderTopColor: "#ddd",
        },
        headerShown: true,

        headerRight: () => (
          <TouchableOpacity onPress={handleSignOut} style={{ padding: 15 }}>
            <MaterialIcons name="logout" size={24} color={colors.black} />
          </TouchableOpacity>
        ),
      })}
    >
      <Tab.Screen name="Top" component={HomeScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
