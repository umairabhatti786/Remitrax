import React, {useEffect, useState} from 'react';
import { StatusBar } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppStackParamList} from '../../utils/Types';
import LoginScreen from '../../screens/Auth/Login';
import SignupScreen from '../../screens/Auth/Signup';
import EnterEmailScreen from '../../screens/Auth/EnterEmail';
import TwoFAScreen from '../../screens/Auth/2FA';
import ForgotPassword from '../../screens/Auth/ForgotPassword';
import LoginAndSignupScreen from '../../screens/Auth/LoginAndSignup';
import StudentBottomTab from '../StudentBottomTab';
import NotificationsScreen from '../../screens/Main/Notifications';
import ProfileScreen from '../../screens/Main/Profile';
import ChangePassword from '../../screens/Main/ChangePassword';
import NotificationSetting from '../../screens/Main/NotificationSetting';
import EditProfileScreen from '../../screens/Main/EditProfile';
import AIChatBoot from '../../screens/Main/Student/AIChatBoot';
import TierProgress from '../../screens/Main/Student/TierProgress';
import RewardsScreen from '../../screens/Main/Student/Rewards';
import OnboardingScreen from '../../screens/Auth/Onboarding';
import UserType from '../../screens/Auth/UserType';
import CoachesStack from '../CoachesStack';

const Stack = createNativeStackNavigator<AppStackParamList>();
const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'OnboardingScreen'} component={OnboardingScreen} /> 
      <Stack.Screen name={'LoginAndSignup'} component={LoginAndSignupScreen} /> 
      <Stack.Screen name={'Login'} component={LoginScreen} />
      <Stack.Screen name={'Signup'} component={SignupScreen} />
       <Stack.Screen name={'EnterEmailScreen'} component={EnterEmailScreen} />
       <Stack.Screen name={'TwoFAScreen'} component={TwoFAScreen} />
       <Stack.Screen name={'ForgotPassword'} component={ForgotPassword} />
       <Stack.Screen name={'StudentBottomTab'} component={StudentBottomTab} />
       <Stack.Screen name={'ChangePassword'} component={ChangePassword} />
       <Stack.Screen name={'NotificationSetting'} component={NotificationSetting} />
       <Stack.Screen name={'EditProfileScreen'} component={EditProfileScreen} />
       <Stack.Screen name={'AIChatBoot'} component={AIChatBoot} />
       <Stack.Screen name={'NotificationsScreen'} component={NotificationsScreen} />
       <Stack.Screen name={'ProfileScreen'} component={ProfileScreen} />
       <Stack.Screen name={'TierProgress'} component={TierProgress} />
       <Stack.Screen name={'UserType'} component={UserType} />
       <Stack.Screen name={'RewardsScreen'} component={RewardsScreen} />

    </Stack.Navigator>
  );
};
export default AppStack;
