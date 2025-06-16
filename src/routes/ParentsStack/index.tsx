import React, {useEffect, useState} from 'react';
import { StatusBar } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ParentsAppStackParamList} from '../../utils/Types';
import CoachesBottomTab from '../CoachesBottomTab';
import AssignNewTask from '../../screens/Main/Coaches/AssignNewTask';
import StudentProfile from '../../screens/Main/Coaches/StudentProfile';
import MyAssignedTask from '../../screens/Main/Coaches/MyAssignedTask';
import AIChatBoot from '../../screens/Main/Student/AIChatBoot';
import ParentsBottomTab from '../ParentsBottomTab';
import ProfileScreen from '../../screens/Main/Profile';

const Stack = createNativeStackNavigator<ParentsAppStackParamList>();
const ParentsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
     
       <Stack.Screen name={'ParentsBottomTab'} component={ParentsBottomTab} />
       <Stack.Screen name={'AssignNewTask'} component={AssignNewTask} />
       <Stack.Screen name={'StudentProfile'} component={StudentProfile} />
       <Stack.Screen name={'MyAssignedTask'} component={MyAssignedTask} />
       <Stack.Screen name={'AIChatBoot'} component={AIChatBoot} />
       <Stack.Screen name={'ProfileScreen'} component={ProfileScreen} />


       
    </Stack.Navigator>
  );
};
export default ParentsStack;
