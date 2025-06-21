import React, {useEffect, useState} from 'react';
import { StatusBar } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppStackParamList} from '../../utils/Types';
import GetStarted from '../../screens/Auth/GetStarted';
import LoginScreen from '../../screens/Auth/LoginScreen';
import SignupScreen from '../../screens/Auth/SignupScreen';
import YourIdentity from '../../screens/Auth/YourIdentity';
import ProofOfResidency from '../../screens/Auth/ProofOfResidency';
import PassportPhotoInstruction from '../../screens/Auth/PassportPhotoInstruction';



const Stack = createNativeStackNavigator<AppStackParamList>();
const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'GetStarted'} component={GetStarted} /> 
  
      <Stack.Screen name={'LoginScreen'} component={LoginScreen} /> 
      <Stack.Screen name={'SignupScreen'} component={SignupScreen} /> 
      <Stack.Screen name={'YourIdentity'} component={YourIdentity} /> 
      <Stack.Screen name={'ProofOfResidency'} component={ProofOfResidency} /> 
      <Stack.Screen name={'PassportPhotoInstruction'} component={PassportPhotoInstruction} /> 

      
      
      
    </Stack.Navigator>
  );
};
export default AppStack;
