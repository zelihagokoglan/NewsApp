import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { colors } from "react-native-elements";
import globalStyles from "../styles/globalStyles";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";
// import {
//   schedulePushNotification,
//   registerForPushNotificationsAsync,
// } from "../utils/notifications";

WebBrowser.maybeCompleteAuthSession();

function SignScreen({ navigation }) {
  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignIn, setIsSignIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  //const [expoPushToken, setExpoPushToken] = useState("");

  useEffect(() => {
    WebBrowser.warmUpAsync();
    return () => {
      WebBrowser.coolDownAsync();
    };
  }, []);
  // useEffect(() => {
  //   registerForPushNotificationsAsync().then((token) => {
  //     if (token) {
  //       setExpoPushToken(token);
  //     }
  //   });
  // }, []);

  const googleOauth = useOAuth({ strategy: "oauth_google" });

  async function onGoogleSignIn() {
    try {
      const redirectUrl = Linking.createURL("/");

      setIsLoading(true);
      const oAuthFlow = await googleOauth.startOAuthFlow({ redirectUrl });
      if (oAuthFlow.authSessionResult?.type === "success") {
        if (oAuthFlow.setActive) {
          await oAuthFlow.setActive({ session: oAuthFlow.createdSessionId });
        }

        navigation.navigate("TabNavigator");
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }
  async function onGoogleSignUp() {
    try {
      const redirectUrl = Linking.createURL("/");

      setIsLoading(true);
      const oAuthFlow = await googleOauth.startOAuthFlow({ redirectUrl });
      if (oAuthFlow.authSessionResult?.type === "success") {
        if (oAuthFlow.setActive) {
          await oAuthFlow.setActive({ session: oAuthFlow.createdSessionId });
        }
        navigation.navigate("TabNavigator");
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }
  const handleGoogleSignIn = () => {
    if (!isLoading) {
      onGoogleSignIn();
    }
  };
  const handleGoogleSignUp = () => {
    if (!isLoading) {
      onGoogleSignUp();
    }
  };
  const handleEmailSignIn = () => {};
  const handleEmailSignUp = () => {};

  const toggleSignInSignUp = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.headerText}>
        {isSignIn ? "Sign In" : "Sign Up"}
      </Text>
      <Text style={globalStyles.orText}>with</Text>
      {isSignIn ? (
        <TouchableOpacity onPress={handleGoogleSignIn} disabled={isLoading}>
          <Button
            style={globalStyles.signButton}
            textColor={colors.black}
            icon="google"
            mode="outlined"
          >
            Google
          </Button>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handleGoogleSignUp} disabled={isLoading}>
          <Button
            style={globalStyles.signButton}
            textColor={colors.black}
            icon="google"
            mode="outlined"
          >
            Google
          </Button>
        </TouchableOpacity>
      )}

      <Text style={globalStyles.orText}>or</Text>

      <TextInput
        style={globalStyles.input}
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={[globalStyles.input, { marginBottom: 30 }]}
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

      {isSignIn ? (
        <TouchableOpacity onPress={handleEmailSignIn} disabled={isLoading}>
          <Button
            style={globalStyles.signButton}
            textColor={colors.white}
            mode="outlined"
            buttonColor={colors.black}
          >
            Sign In
          </Button>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handleEmailSignUp} disabled={isLoading}>
          <Button
            style={globalStyles.signButton}
            textColor={colors.white}
            mode="outlined"
            buttonColor={colors.black}
          >
            Sign Up
          </Button>
        </TouchableOpacity>
      )}

      <Text style={globalStyles.toggleText}>
        {isSignIn ? (
          <Text>
            Don't have an account?{" "}
            <TouchableOpacity onPress={toggleSignInSignUp}>
              <Text style={{ color: colors.blue }}>Sign Up</Text>
            </TouchableOpacity>
          </Text>
        ) : (
          <Text>
            Already have an account?{" "}
            <TouchableOpacity onPress={toggleSignInSignUp}>
              <Text style={{ color: colors.blue }}>Sign In</Text>
            </TouchableOpacity>
          </Text>
        )}
      </Text>
    </View>
  );
}

export default SignScreen;
