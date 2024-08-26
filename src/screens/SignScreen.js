import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { colors } from "react-native-elements";
import globalStyles from "../styles/globalStyles";

function SignScreen() {
  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignIn, setIsSignIn] = useState(false);

  const handleGoogleSignIn = () => {};

  const handleEmailSignIn = () => {};

  const handleEmailSignUp = () => {};

  const handleGoogleSignUp = () => {};

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.headerText}>
        {isSignIn ? "Sign In" : "Sign Up"}
      </Text>
      <Text style={globalStyles.orText}>with</Text>
      {isSignIn ? (
        <TouchableOpacity onPress={handleGoogleSignIn}>
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
        <TouchableOpacity onPress={handleGoogleSignUp}>
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
        <TouchableOpacity onPress={handleEmailSignIn}>
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
        <TouchableOpacity onPress={handleEmailSignUp}>
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

      <TouchableOpacity onPress={() => setIsSignIn(!isSignIn)}>
        <Text style={globalStyles.toggleText}>
          {isSignIn
            ? "Don't have an account? Sign Up"
            : "Already have an account? Sign In"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default SignScreen;
