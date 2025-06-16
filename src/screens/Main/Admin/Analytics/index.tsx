import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  SectionList,
  FlatList,
  ScrollView,
} from "react-native";
import sizeHelper from "../../../../utils/Helpers";
import ScreenLayout from "../../../../components/ScreenLayout";
import images from "../../../../utils/Constants/images";
import { theme } from "../../../../utils/Themes";
import CustomText from "../../../../components/Text";
import { fonts } from "../../../../utils/Themes/fonts";
import icons from "../../../../utils/Constants/icons";
import TabHeader from "../../../../components/TabHeader";
import { AssignTaskData, rewardData } from "../../../../utils/Data";
import TabCard from "../../../../components/TabCard";
import TaskCard from "../../../../components/TaskCard";
import { appStyles } from "../../../../utils/GlobalStyles";
import CustomSearch from "../../../../components/Search";
import WarningModal from "../../../../components/WarningModal";
import UserCard from "../../../../components/UserCard";
import CustomDropDown from "../../../../components/DropDown";
import RewardsCatalogueCard from "../../../../components/RewardsCatalogueCard";
import CustomHeader from "../../../../components/Header/inde";
import CustomButton from "../../../../components/Button";
import UserDistributionChart from "./UserDistributionChart";
import AvgTimeSpentChart from "./AvgTimeSpentChart";
import LineChartWithDots from "./LineChartWithDots";

const Analytics = ({ navigation }: any) => {
  const [selectedDay, setSelectedDay] = useState("Sun");
  const [selectedTab, setSelectedTab] = useState(1);
  const [isWarningModal, setIsWarningModal] = useState(false);
  const [tasksData, setTasksData] = useState(AssignTaskData);
  const [isChooseUserTypeModal, setIsChooseUserTypeModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("Coach A");
  const [isNext, seIsNext] = useState(false);
  const [rewards, setReward] = useState(rewardData);
  const statusData = [
    { label: "Coach A", value: "Coach A", id: 1 },
    { label: "Coach B", value: "Coach B", id: 2 },

    { label: "Coach C", value: "Coach C", id: 3 },
    { label: "Coach C", value: "Coach A", id: 4 },
  ];

  const TabData = [
    { icon: icons.all_tab, title: "Today’s", id: 1 },
    { icon: icons.redeemed, title: "Weekly", id: 2 },
    { icon: icons.locked, title: "Monthly", id: 3 },
  ];

  const Tabs = () => {
    return (
      <View style={styles.tabMain}>
        {TabData.map((ite, index) => {
          return (
            <TabCard
              onPress={() => {setSelectedTab(ite?.id)}}
              item={ite}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          );
        })}
      </View>
    );
  };

  const AnalyticsReport = ({
    icon,
    title,
    count,
    growth,
    backgroundColor,
  }: any) => {
    return (
      <View
        style={{
          padding: sizeHelper.calWp(20),
          gap: sizeHelper.calHp(10),
          backgroundColor: backgroundColor,
          flex: 1,
          borderRadius: sizeHelper.calWp(30),
        }}
      >
        <View
          style={{
            width: sizeHelper.calWp(90),
            height: sizeHelper.calWp(90),

            alignItems: "center",
            justifyContent: "center",
            borderRadius: sizeHelper.calWp(20),
            backgroundColor: theme.colors.white,
          }}
        >
          <Image
            style={{
              width: sizeHelper.calWp(45),
              height: sizeHelper.calWp(45),
              tintColor: theme.colors.primary,
            }}
            source={icon}
          />
        </View>
        <CustomText text={title} size={21} />
        <CustomText
          text={count}
          fontFam={fonts.Inter_Bold}
          fontWeight="700"
          size={25}
        />
        <CustomText
          text={growth}
          fontFam={fonts.Inter_Light}
          fontWeight="400"
          color={theme.colors.primary}
          // size={23}
        />
      </View>
    );
  };

  const renderItem = ({ item }: any) => (
    <RewardsCatalogueCard
      onPress={() => navigation.navigate("CoachProfile", { data: item })}
      item={item}
      onSwitch={() => {
        setReward((prevData) => {
          return prevData.map((category) => {
            if (category.id === item?.id) {
              return {
                ...category,
                isEnable: !category.isEnable, // Toggle the isSelected status
              };
            } else {
              return category;
            }
          });
        });
      }}
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
        <CustomHeader title={"Analytics"} isNotification />
        <ScrollView
          contentContainerStyle={{ gap: sizeHelper.calHp(30) }}
          showsVerticalScrollIndicator={false}
        >
          <LineChartWithDots />

          <Tabs />
          <View style={{ ...appStyles.rowjustify, gap: sizeHelper.calWp(10) }}>
            <AnalyticsReport
              icon={icons.filled_users}
              title={"Total Registered Users"}
              count={"(2,785)"}
              growth={"(↑ 5.2% from last week)"}
              backgroundColor={theme.colors.card_yellow}
            />
            <AnalyticsReport
              icon={icons.filled_users}
              title={"Total Registered Users"}
              count={"(2,785)"}
              growth={"(↑ 5.2% from last week)"}
              backgroundColor={theme.colors.dark_pink}
            />
          </View>
          <View style={{ ...appStyles.rowjustify, gap: sizeHelper.calWp(10) }}>
            <AnalyticsReport
              icon={icons.filled_reward}
              title={"Rewards Redeemed"}
              count={"(398)"}
              growth={"(↓ 3.8%)"}
              backgroundColor={theme.colors.Card_white_dull}
            />
            <AnalyticsReport
              icon={icons.Ai_chat_menu}
              title={"AI Assistant Interactions"}
              count={"(690)"}
              growth={"(↑ 9.1%)"}
              backgroundColor={"#C1EFF3"}
            />
          </View>
          <UserDistributionChart />
          <AvgTimeSpentChart />

          <CustomButton text="Export Report (PDF/CSV)" />
        </ScrollView>
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

export default Analytics;

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
