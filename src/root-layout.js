import React from "react";
import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!publishableKey) {
  throw new Error("Missing Publishable Key. ");
}

const RootLayoutNav = ({ children }) => {
  return (
    <ClerkProvider publishableKey={publishableKey}>
      <ClerkLoaded>{children}</ClerkLoaded>
    </ClerkProvider>
  );
};

export default RootLayoutNav;
