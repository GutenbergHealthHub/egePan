// (C) Copyright IBM Deutschland GmbH 2021.  All rights reserved.

/***********************************************************************************************
imports
***********************************************************************************************/

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AboutContainer from "../screens/about/aboutContainer";
import LoginContainer from "../screens/login/loginContainer";
import { CheckIn as CheckInContainer } from "../screens/checkIn/checkInContainer";

import { Routes, Stacks } from "./constants";

/***********************************************************************************************
export and AppContainer-creation
***********************************************************************************************/

// creates the stack-navigator for the navigation while NOT LOGGED IN

function SignedOutView() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
      initialRouteName={Routes.LANDING}
    >
      <Stack.Screen name={Routes.LANDING} component={LoginContainer} />
      <Stack.Screen name={Routes.LOGIN} component={LoginContainer} />
    </Stack.Navigator>
  );
}

// creates the stack-navigator for the navigation while LOGGED IN

function SignedInView() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
      initialRouteName={Routes.CHECK_IN}
    >
      <Stack.Screen name={Routes.CHECK_IN} component={CheckInContainer} />
      <Stack.Screen name={Routes.SURVEY} component={CheckInContainer} />
      <Stack.Screen name={Routes.SUMMARY} component={CheckInContainer} />
      <Stack.Screen name={Routes.ABOUT} component={AboutContainer} />
      <Stack.Screen name={Routes.WEBVIEW} component={AboutContainer} />
      <Stack.Screen name={Routes.HELP} component={AboutContainer} />
      <Stack.Screen name={Routes.SUPPORT} component={AboutContainer} />
      <Stack.Screen
        name={Routes.LEGAL_INFORMATION}
        component={AboutContainer}
      />
    </Stack.Navigator>
  );
}

/**
 * creates the app container based on the two stack-navigators
 */
function AppNavigator() {
  const RootStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}
        initialRouteName={Stacks.SIGNED_OUT}
      >
        <RootStack.Screen name={Stacks.SIGNED_IN} component={SignedInView} />
        <RootStack.Screen name={Stacks.SIGNED_OUT} component={SignedOutView} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
