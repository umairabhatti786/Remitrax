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
import { calendarData, taskData } from "../../../../utils/Data";
import TabCard from "../../../../components/TabCard";
import TaskCard from "../../../../components/TaskCard";
import CustomSearch from "../../../../components/Search";
import { appStyles } from "../../../../utils/GlobalStyles";

const MyStudent = ({ navigation }: any) => {
  const [selectedDay, setSelectedDay] = useState("Sun");
  const [selectedTab, setSelectedTab] = useState(1);
  const [tasksData, setTasksData] = useState(taskData);
  const StudentData = [
    {
     
      backgroundColor: theme.colors.card_yellow,
    },

    {
      
      backgroundColor: theme.colors.dark_pink,
    },
    {
      
      backgroundColor: theme.colors.Card_white_dull,
    },
    {
     
      backgroundColor: theme.colors.card_yellow,
    },
  ];

  const StudentCard = ({ item }: any) => {
    const taskProgress = [
      { icon: images.grow, title: "Total Tasks Assigned", label: "24" },
      { icon: icons.task_check, title: "Tasks Completed", label: "18" },
      { icon: images.streak, title: "Points Verified", label: "185" },
    ];

    return (
      <TouchableOpacity
      onPress={()=>navigation.navigate("StudentProfile")}

        style={{
          width: "100%",
          backgroundColor: item?.backgroundColor,
          borderRadius: sizeHelper.calWp(50),
          gap: sizeHelper.calHp(30),
          padding: sizeHelper.calWp(20),
          justifyContent: "space-between",
        }}
      >
        <View style={appStyles.rowjustify}>
          <View
            style={{
              gap: sizeHelper.calWp(40),
              width: "50%",
              //   backgroundColor: "red",
            }}
          >
            <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
              <Image
                style={{
                  width: sizeHelper.calWp(60),
                  height: sizeHelper.calWp(60),
                }}
                source={images.user_img}
              />
              <CustomText
                text={`Anas Ali`}
                fontFam={fonts.Inter_SemiBold}
                fontWeight="600"
                //   size={25}
              />
            </View>

            <View
              style={{
                gap: sizeHelper.calWp(10),
                width: "100%",
                //   backgroundColor: "red",
              }}
            >
              {taskProgress.map((item, index) => {
                return (
                  <View
                    style={{
                      gap: sizeHelper.calWp(10),
                    }}
                  >
                    <View style={appStyles.rowjustify}>
                      <View
                        style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}
                      >
                        <Image
                          style={{
                            width: sizeHelper.calWp(28),
                            height: sizeHelper.calWp(28),
                          }}
                          source={item?.icon}
                        />
                        <CustomText
                          text={item?.title}
                          fontFam={fonts.Inter_Light}
                          color={theme.colors.black + "80"}
                          fontWeight="400"
                          size={18}
                        />
                      </View>
                      <CustomText
                        text={item?.label}
                        color={theme.colors.black}
                        size={18}
                      />
                    </View>
                    {taskProgress.length - 1 !== index && (
                      <View
                        style={{
                          height: 1,
                          backgroundColor: theme.colors.black + "10",
                        }}
                      />
                    )}
                  </View>
                );
              })}
            </View>
          </View>

          <Image
            style={{
              width: sizeHelper.calWp(270),
              height: sizeHelper.calWp(270),
              alignSelf: "center",
            }}
            source={images.graph}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const renderStudent = ({ item, index }: any) => {
    return <StudentCard item={item} />;
  };

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
        <TabHeader title={"My Students"} isNotification />
        <CustomSearch placeholder="Search student.." />

        <FlatList
          data={StudentData}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            gap: sizeHelper.calHp(15),
            paddingBottom: sizeHelper.calHp(200),
          }}
          style={{
            flex: 1,
            backgroundColor: theme.colors.background,
          }}
          renderItem={renderStudent}
        />
      </ScreenLayout>
    </>
  );
};

export default MyStudent;

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
