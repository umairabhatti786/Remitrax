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
import { AssignTaskData, rewardData } from "../../../../utils/Data";
import TabCard from "../../../../components/TabCard";
import TaskCard from "../../../../components/TaskCard";
import { appStyles } from "../../../../utils/GlobalStyles";
import CustomSearch from "../../../../components/Search";
import WarningModal from "../../../../components/WarningModal";
import UserCard from "../../../../components/UserCard";
import CustomDropDown from "../../../../components/DropDown";
import RewardsCatalogueCard from "../../../../components/RewardsCatalogueCard";

const RewardsCatalogue = ({ navigation }: any) => {
  const [selectedDay, setSelectedDay] = useState("Sun");
  const [selectedTab, setSelectedTab] = useState(1);
  const [isWarningModal, setIsWarningModal] = useState(false);
  const [tasksData, setTasksData] = useState(AssignTaskData);
  const [isChooseUserTypeModal, setIsChooseUserTypeModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("Coach A");
  const [isNext, seIsNext] = useState(false);
  const [rewards,setReward]=useState(rewardData)
  const statusData = [
    { label: "Coach A", value: "Coach A", id: 1 },
    { label: "Coach B", value: "Coach B", id: 2 },

    { label: "Coach C", value: "Coach C", id: 3 },
    { label: "Coach C", value: "Coach A", id: 4 },
  ];

  
  const TabData = [
    { icon: icons.all_tab, title: "All", id: 1 },
    { icon: icons.redeemed, title: "Coupons", id: 2 },
    { icon: icons.locked, title: "Physical", id: 3 },
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
        <TabHeader title={"Rewards Catalogue"} isNotification />
        <Tabs />
        <View style={{ width: "100%" }}>
          <CustomText
            text={"Status"}
            style={{ marginBottom: sizeHelper.calHp(10) }}
            fontWeight="400"
            fontFam={fonts.Inter_Light}
          />
          <View style={{ ...appStyles.rowjustify, gap: sizeHelper.calWp(15) }}>
            <View style={{ flex: 1 }}>
              <CustomDropDown
                placeholder={""}
                dropWidth={"81%"}
                setValue={setSelectedStatus}
                value={selectedStatus}
                onSelect={(it: any) => {
                  setSelectedStatus(it?.value);
                }}
                data={statusData.map((item, _index) => {
                  return {
                    id: item?.id,
                    label: item?.label,
                    value: item?.value,
                  };
                })}
              />
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("AddNewReward")}
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
        </View>

        <FlatList
          data={rewards}
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

export default RewardsCatalogue;

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
