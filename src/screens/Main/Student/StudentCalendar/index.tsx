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
import { calendarData } from "../../../../utils/Data";
import TabCard from "../../../../components/TabCard";
import TaskCard from "../../../../components/TaskCard";

const StudentCalendar = ({ navigation }: any) => {
  const [selectedDay, setSelectedDay] = useState("Sun");
  const [selectedTab, setSelectedTab] = useState(1);
  const [tasksData, setTasksData] = useState(calendarData);
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
                  setTasksData(calendarData);

                  return;
                }

                const result = calendarData
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

  const renderItem = ({ item }: any) => <TaskCard item={item} />;
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
        <TabHeader title={"Calendar"} isNotification />
        <TouchableOpacity
          style={{
            width: "100%",
            paddingHorizontal: sizeHelper.calWp(15),
            height: sizeHelper.calHp(135),
            paddingVertical: sizeHelper.calHp(10),
            borderRadius: sizeHelper.calWp(40),
            backgroundColor: theme.colors.black,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          {DayWeek.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => setSelectedDay(item?.day)}
                style={{
                  alignItems: "center",
                  gap: sizeHelper.calHp(20),
                  backgroundColor:
                    selectedDay == item?.day
                      ? theme.colors.white
                      : "transparent",
                  padding: sizeHelper.calWp(10),
                  justifyContent: "center",
                  borderRadius: 999,
                  height: "100%",

                  width: "14%",
                }}
              >
                <CustomText
                  text={item?.day}
                  color={
                    selectedDay == item?.day
                      ? theme.colors.black
                      : theme.colors.white + "40"
                  }
                  size={21}
                />
                <CustomText
                  text={item?.count}
                  color={
                    selectedDay == item?.day
                      ? theme.colors.black
                      : theme.colors.white + "70"
                  }
                  fontWeight="700"
                  fontFam={fonts.Poppins_Bold}
                  size={21}
                />
              </TouchableOpacity>
            );
          })}
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: theme.colors.dark_pink + "80",
            justifyContent: "center",
            alignItems: "center",
            gap: sizeHelper.calWp(20),
            flexDirection: "row",
            borderRadius: sizeHelper.calWp(90),
            paddingVertical: sizeHelper.calHp(20),
          }}
        >
          <Image
            style={{
              width: sizeHelper.calWp(40),
              height: sizeHelper.calWp(40),
              alignSelf: "center",
            }}
            source={images.liked}
          />
          <CustomText
            text={"Just 2 tasks away from you daily target"}
            style={{ textAlign: "center" }}
          />
        </View>
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

export default StudentCalendar;

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
