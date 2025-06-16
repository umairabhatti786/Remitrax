import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  SectionList,
  FlatList,
} from "react-native";
import sizeHelper from "../../../../utils/Helpers";
import ScreenLayout from "../../../../components/ScreenLayout";
import images from "../../../../utils/Constants/images";
import { theme } from "../../../../utils/Themes";
import CustomText from "../../../../components/Text";
import { fonts } from "../../../../utils/Themes/fonts";
import icons from "../../../../utils/Constants/icons";
import TabHeader from "../../../../components/TabHeader";
import { AssignTaskData } from "../../../../utils/Data";
import TabCard from "../../../../components/TabCard";
import TaskCard from "../../../../components/TaskCard";
import { appStyles } from "../../../../utils/GlobalStyles";
import CustomSearch from "../../../../components/Search";
import WarningModal from "../../../../components/WarningModal";
import UserCard from "../../../../components/UserCard";
import ChooseUserTypeModal from "./ChooseUserTypeModal";

const ManageUsers = ({ navigation }: any) => {
  const [selectedDay, setSelectedDay] = useState("Sun");
  const [selectedTab, setSelectedTab] = useState(1);
  const [isWarningModal, setIsWarningModal] = useState(false);
  const [tasksData, setTasksData] = useState(AssignTaskData);
  const [isChooseUserTypeModal,setIsChooseUserTypeModal]=useState(false)
  const UserData = [
    {
      icon: images.user_img,
      name: "Anas Ali",
      id: 1,
      type: "Student",
      task_completed: 24,
      backgroundColor: theme.colors.card_yellow,
    },
    {
      icon: images.user_img,
      name: "Davis",
      id: 1,
      type: "Coach",
      assign_students: 53,
      backgroundColor: theme.colors.dark_pink,
    },
    {
      icon: images.user_img,
      name: "Anas Ali",
      id: 1,
      type: "Parent",
      linked_child: "Mia Lopez",
      backgroundColor: theme.colors.Card_white_dull,
    },
    {
      icon: images.user_img,
      name: "Anas Ali",
      id: 1,
      type: "Student",
      task_completed: 24,
      backgroundColor: theme.colors.card_yellow,
    },
    {
      icon: images.user_img,
      name: "Davis",
      id: 1,
      type: "Coach",
      assign_students: 53,
      backgroundColor: theme.colors.dark_pink,
    },
    {
      icon: images.user_img,
      name: "Anas Ali",
      id: 1,
      type: "Student",
      linked_child: "Mia Lopez",
      backgroundColor: theme.colors.Card_white_dull,
    },
  ];
  const TabData = [
    { icon: icons.all_tab, title: "All", id: 1 },
    { icon: icons.redeemed, title: "Students", id: 2 },
    { icon: icons.locked, title: "Coaches", id: 3 },
  ];

  const Tabs = () => {
    return (
      <View style={styles.tabMain}>
        {TabData.map((ite, index) => {
          return (
            <TabCard
              onPress={() => {
                setSelectedTab(ite?.id)
               
              }}
              item={ite}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          );
        })}
      </View>
    );
  };

  const renderItem = ({ item }: any) => <UserCard 
  onPress={()=>navigation.navigate("CoachProfile",{data:item})}
  item={item} />;

  return (
    <>
      <ScreenLayout
        style={{
          flex: 1,
          paddingHorizontal: sizeHelper.calWp(30),
          gap: sizeHelper.calWp(30),
        }}
      >
        <TabHeader title={"Manage Users"} isNotification />
        <View
          style={{
            ...appStyles.rowjustify,

            width: "100%",
            gap: sizeHelper.calWp(15),
          }}
        >
          <CustomSearch
            ContainerStyle={{ flex: 1 }}
            placeholder="Search by name or email..."
          />
          <TouchableOpacity
          onPress={()=>setIsChooseUserTypeModal(true)}
            style={{
              width: "15%",
              height: sizeHelper.calHp(80),
              borderRadius: sizeHelper.calWp(20),
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: theme.colors.primary,
            }}
          >
            <Image
              style={{ width: "20%", height: "20%" }}
              source={icons.plus}
            />
          </TouchableOpacity>
        </View>
        <Tabs />
        <View style={appStyles.rowjustify}>
          <CustomText
            size={21}
            text={`Total Users`}
            color={theme.colors.black}
            fontWeight="700"
          />
          <CustomText
            size={21}
            text={`210`}
            color={theme.colors.black}
            fontWeight="700"
          />
        </View>
        <FlatList
          data={UserData}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            gap: sizeHelper.calHp(20),
            paddingBottom: sizeHelper.calHp(200),
          }}
          style={{
            flex: 1,
            backgroundColor: theme.colors.background,
          }}
          renderItem={renderItem}
        />
      </ScreenLayout>
      <WarningModal
        onDone={() => setIsWarningModal(false)}
        onCancel={() => setIsWarningModal(false)}
        title={"Warning!"}
        des={"Are you sure to mark the task incomplete!"}
        modalVisible={isWarningModal}
        setModalVisible={setIsWarningModal}
      />

<ChooseUserTypeModal
        onDone={() => setIsWarningModal(false)}
        onCancel={() => setIsWarningModal(false)}
        title={"Warning!"}
        des={"Are you sure to mark the task incomplete!"}
        modalVisible={isChooseUserTypeModal}
        setModalVisible={setIsChooseUserTypeModal}
      />
    </>
  );
};

export default ManageUsers;

const styles = StyleSheet.create({
  tabMain: {
    width: "100%",
    height: sizeHelper.calHp(80),
    borderRadius: sizeHelper.calWp(90),
    backgroundColor: theme.colors.Input_field,
    borderWidth: 1,
    borderColor: theme.colors.black + "20",
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
