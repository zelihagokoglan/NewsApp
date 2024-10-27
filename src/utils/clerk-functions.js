// import { useClerk } from "@clerk/clerk-expo";
// import * as WebBrowser from "expo-web-browser";
// import * as Linking from "expo-linking";

// export const useSignOut = (navigation) => {
//   const { signOut } = useClerk();

//   const handleSignOut = async () => {
//     try {
//       await signOut();
//       navigation.navigate("SignScreen");
//     } catch (error) {
//       console.log("Sign out error:", error);
//     }
//   };

//   return handleSignOut;
// };
// export const useGoogleOAuthIn = (navigation) => {
//   const { useOAuth } = useClerk();
//   const googleOauth = useOAuth({ strategy: "oauth_google" });

//   const onGoogleSignIn = async () => {
//     try {
//       const redirectUrl = Linking.createURL("/");
//       const oAuthFlow = await googleOauth.startOAuthFlow({ redirectUrl });
//       if (oAuthFlow.authSessionResult?.type === "success") {
//         if (oAuthFlow.setActive) {
//           await oAuthFlow.setActive({ session: oAuthFlow.createdSessionId });
//         }
//         navigation.navigate("TabNavigator");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return onGoogleSignIn;
// };
// export const useGoogleOAuthUp = (navigation) => {
//   const { useOAuth } = useClerk();
//   const googleOauth = useOAuth({ strategy: "oauth_google" });

//   const onGoogleSignUp = async () => {
//     try {
//       const redirectUrl = Linking.createURL("/");
//       const oAuthFlow = await googleOauth.startOAuthFlow({ redirectUrl });
//       if (oAuthFlow.authSessionResult?.type === "success") {
//         if (oAuthFlow.setActive) {
//           await oAuthFlow.setActive({ session: oAuthFlow.createdSessionId });
//         }
//         navigation.navigate("TabNavigator");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return onGoogleSignUp;
// };
