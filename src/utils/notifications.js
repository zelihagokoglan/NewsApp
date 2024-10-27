// import * as Notifications from "expo-notifications";
// import * as Device from "expo-device";
// import Constants from "expo-constants";
// import { Platform } from "react-native";

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: false,
//     shouldSetBadge: false,
//   }),
// });

// export async function schedulePushNotification({ title, body }) {
//   await Notifications.scheduleNotificationAsync({
//     content: {
//       title: title,
//       body: body,
//       data: { data: "goes here", test: { test1: "more data" } },
//     },
//     trigger: null,
//   });
// }

// export async function registerForPushNotificationsAsync() {
//   let token;

//   if (Platform.OS === "android") {
//     await Notifications.setNotificationChannelAsync("default", {
//       name: "default",
//       importance: Notifications.AndroidImportance.MAX,
//       vibrationPattern: [0, 250, 250, 250],
//       lightColor: "#FF231F7C",
//     });
//   }

//   if (Device.isDevice) {
//     const { status: existingStatus } =
//       await Notifications.getPermissionsAsync();
//     let finalStatus = existingStatus;
//     if (existingStatus !== "granted") {
//       const { status } = await Notifications.requestPermissionsAsync();
//       finalStatus = status;
//     }
//     if (finalStatus !== "granted") {
//       alert("Failed to get push token for push notification!");
//       return;
//     }

//     try {
//       const projectId =
//         Constants?.expoConfig?.extra?.eas?.projectId ??
//         Constants?.easConfig?.projectId;
//       if (!projectId) {
//         throw new Error("Project ID not found");
//       }
//       token = (
//         await Notifications.getExpoPushTokenAsync({
//           projectId,
//         })
//       ).data;
//       console.log(token);
//     } catch (error) {
//       token = `${error}`;
//     }
//   } else {
//     alert("Must use physical device for Push Notifications");
//   }

//   return token;
// }
