import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import OnboardingScreen from "../../screens/Auth/Onboarding";
import AppStack from "../AppStack";
import CoachesStack from "../CoachesStack";
import ParentsStack from "../ParentsStack";
import AdminsStack from "../AdminsStack";
import SuccessScreen from "../../screens/Main/SuccessScreen";

const RootNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#FFFFFF"} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AppStack" component={AppStack} />
        <Stack.Screen name="CoachesStack" component={CoachesStack} />
        <Stack.Screen name="ParentsStack" component={ParentsStack} />
        <Stack.Screen name="AdminsStack" component={AdminsStack} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
