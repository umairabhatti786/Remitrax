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

const MyAssignedTask = ({ navigation }: any) => {
  const [selectedDay, setSelectedDay] = useState("Sun");
  const [selectedTab, setSelectedTab] = useState(1);
  const [isWarningModal, setIsWarningModal] = useState(false);
  const [tasksData, setTasksData] = useState(AssignTaskData);
  const DayWeek = [
    { day: "Sun", count: 1 },
    { day: "Mon", count: 2 },
    { day: "Tue", count: 3 },
    { day: "Wed", count: 4 },
    { day: "Thu", count: 5 },
    { day: "Fri", count: 6 },
    { day: "Sat", count: 7 },
  ];
  const TabData = [
    { icon: icons.all_tab, title: "All", id: 1 },
    { icon: icons.redeemed, title: "Completed", id: 2 },
    { icon: icons.locked, title: "Pending", id: 3 },
  ];

  const Tabs = () => {
    return (
      <View style={styles.tabMain}>
        {TabData.map((ite, index) => {
          return (
            <TabCard
              onPress={() => {
                setSelectedTab(ite?.id);
                if (ite?.id == 1) {
                  setTasksData(AssignTaskData);

                  return;
                }
                if (ite?.id == 2) {
                  const result = AssignTaskData.filter(
                    (item) => item.status.toLowerCase() === "Verified"
                  );
                  setTasksData(result);

                  return;
                }
                if (ite?.id == 3) {
                  const result = AssignTaskData.filter(
                    (item) => item.status.toLowerCase() === "pending"
                  );
                  setTasksData(result);

                  return;
                }
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

  const renderItem = ({ item }: any) => (
    <TaskCard
   
      onInComplete={() => setIsWarningModal(true)}
      onMarkDone={() => {
        setTasksData((prevData) => {
          return prevData.map((category) => ({
            ...category,
            data: category.data.map((task) => {
              if (task.id === item?.id) {
                return {
                  ...task,
                  markDone: !task.markDone, // Toggle the markDone status
                };
              }
              return task;
            }),
          }));
        });
      }}
      item={item}
    />
  );

  return (
    <>
      <ScreenLayout
        style={{
          flex: 1,
          paddingHorizontal: sizeHelper.calWp(30),
          gap: sizeHelper.calWp(30),
        }}
      >
        <TabHeader title={"My Tasks"} isNotification />
        <View
          style={{
            ...appStyles.rowjustify,
            width: "100%",
            gap: sizeHelper.calWp(15),
          }}
        >
          <CustomSearch
            ContainerStyle={{ flex: 1 }}
            placeholder="Search student.."
          />
          <TouchableOpacity
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
        <FlatList
          data={tasksData}
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
    </>
  );
};

export default MyAssignedTask;

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
