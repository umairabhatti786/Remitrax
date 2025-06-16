import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  SectionList,
} from "react-native";
import sizeHelper from "../../../../utils/Helpers";
import ScreenLayout from "../../../../components/ScreenLayout";
import images from "../../../../utils/Constants/images";
import { theme } from "../../../../utils/Themes";
import CustomText from "../../../../components/Text";
import { fonts } from "../../../../utils/Themes/fonts";
import icons from "../../../../utils/Constants/icons";
import TabHeader from "../../../../components/TabHeader";
import { calendarData, taskData } from "../../../../utils/Data";
import TabCard from "../../../../components/TabCard";
import TaskCard from "../../../../components/TaskCard";

const MyTask = ({ navigation }: any) => {
  const [selectedDay, setSelectedDay] = useState("Sun");
  const [selectedTab, setSelectedTab] = useState(1);
  const [tasksData, setTasksData] = useState(taskData);
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
                  setTasksData(taskData);

                  return;
                }

                const result = taskData
                  .map((day) => ({
                    ...day,
                    data: day.data.filter((item: any) => {
                      if (ite?.id === 2) {
                        return item.status.toLowerCase() === "completed";
                      } else if (ite?.id === 3) {
                        return item.status.toLowerCase() === "pending";
                      }
                      return true; // keep other items
                    }),
                  }))
                  .filter((day) => day.data.length > 0);
                setTasksData(result);
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

  const renderSectionHeader = ({ section }: any) => (
    <CustomText
      color={section?.color}
      fontWeight="700"
      fontFam={fonts.Inter_Bold}
      text={section.title}
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
        <Tabs />
        <SectionList
          sections={tasksData}
          showsVerticalScrollIndicator={false}
          stickySectionHeadersEnabled={false} // Disable sticky headers
          contentContainerStyle={{
            gap: sizeHelper.calHp(20),
            paddingBottom: sizeHelper.calHp(200),
          }}
          style={{
            flex: 1,
            backgroundColor: theme.colors.background,
          }}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
        />
      </ScreenLayout>
    </>
  );
};

export default MyTask;

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
