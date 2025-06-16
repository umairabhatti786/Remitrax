import React, {useEffect, useState} from 'react';
import { StatusBar } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AdminAppStackParamList} from '../../utils/Types';
import CoachesBottomTab from '../CoachesBottomTab';
import AssignNewTask from '../../screens/Main/Coaches/AssignNewTask';
import StudentProfile from '../../screens/Main/Coaches/StudentProfile';
import MyAssignedTask from '../../screens/Main/Coaches/MyAssignedTask';
import AIChatBoot from '../../screens/Main/Student/AIChatBoot';
import AdminBottomTab from '../AdminBottomTab';
import CoachProfile from '../../screens/Main/Admin/CoachProfile';
import TasksOverview from '../../screens/Main/Admin/TasksOverview';
import AddNewReward from '../../screens/Main/Admin/AddNewReward';
import ChangePassword from '../../screens/Main/ChangePassword';
import EditProfileScreen from '../../screens/Main/EditProfile';
import ManageInformation from '../../screens/Main/Admin/ManageInformation';
import NotificationSetting from '../../screens/Main/NotificationSetting';
import BrandPartners from '../../screens/Main/Admin/BrandPartners';
import BrandPartnersProfile from '../../screens/Main/Admin/BrandPartnersProfile';
import AddNewBrandPartner from '../../screens/Main/Admin/AddNewBrandPartner';
import BannersAndPosters from '../../screens/Main/Admin/BannersAndPosters';
import AddNewBanner from '../../screens/Main/Admin/AddNewBanner';
import AddNewPosterQRCampaign from '../../screens/Main/Admin/AddNewPosterQRCampaign';
import Analytics from '../../screens/Main/Admin/Analytics';

const Stack = createNativeStackNavigator<AdminAppStackParamList>();
const AdminsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
     
       <Stack.Screen name={'AdminBottomTab'} component={AdminBottomTab} />
       <Stack.Screen name={'AssignNewTask'} component={AssignNewTask} />
       <Stack.Screen name={'StudentProfile'} component={StudentProfile} />
       <Stack.Screen name={'MyAssignedTask'} component={MyAssignedTask} />
       <Stack.Screen name={'CoachProfile'} component={CoachProfile} />
       <Stack.Screen name={'AIChatBoot'} component={AIChatBoot} />
       <Stack.Screen name={'TasksOverview'} component={TasksOverview} />
       <Stack.Screen name={'AddNewReward'} component={AddNewReward} />
       <Stack.Screen name={'ChangePassword'} component={ChangePassword} />
       <Stack.Screen name={'ManageInformation'} component={ManageInformation} />
       <Stack.Screen name={'EditProfileScreen'} component={EditProfileScreen} />
       <Stack.Screen name={'NotificationSetting'} component={NotificationSetting} />
       <Stack.Screen name={'BrandPartners'} component={BrandPartners} />
       <Stack.Screen name={'BrandPartnersProfile'} component={BrandPartnersProfile} />
       <Stack.Screen name={'AddNewBrandPartner'} component={AddNewBrandPartner} />
       <Stack.Screen name={'BannersAndPosters'} component={BannersAndPosters} />
       <Stack.Screen name={'AddNewBanner'} component={AddNewBanner} />
       <Stack.Screen name={'AddNewPosterQRCampaign'} component={AddNewPosterQRCampaign} />
       <Stack.Screen name={'Analytics'} component={Analytics} />

       
       
       
       
       
       

       
    </Stack.Navigator>
  );
};
export default AdminsStack;
