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
import BrandPartnerCard from "../../../../components/BrandPartnerCard";
import BannersAndPostersCard from "../../../../components/BannersAndPostersCard";
import ChooseBannerModal from "./ChooseBannerModal";

const BannersAndPosters = ({ navigation }: any) => {
  const [selectedDay, setSelectedDay] = useState("Sun");
  const [selectedTab, setSelectedTab] = useState(1);
  const [isWarningModal, setIsWarningModal] = useState(false);
  const [tasksData, setTasksData] = useState(AssignTaskData);
  const [isChoosBannerModal, setIsChoosBannerModal] = useState(false);

  const BrandPartnersData = [
    {
      icon: images.gametimeshop,
      name: "Banner",
      id: 1,
      date: "May 20 – May 25",
      gameTime_off: "15% Off Gametime",
      tier: "Silver Tier Only",
      show_on: "Home Screen",
      backgroundColor: theme.colors.card_yellow,
    },

    {
      icon: images.gametimeshop,
      name: "Banner",
      id: 1,
      date: "May 20 – May 25",
      gameTime_off: "15% Off Gametime",
      tier: "Silver Tier Only",
      show_on: "Home Screen",
      backgroundColor: theme.colors.dark_pink,
    },
    {
      icon: images.gametimeshop,
      name: "Poster / QR Campaign",
      id: 1,
      date: "May 20 – May 25",
      show_on: "Home Screen",
      gameTime_off: "nlock Starbucks Deal",
      tier: "Gold Only",
      backgroundColor: theme.colors.Card_white_dull,
    },
  ];
  const TabData = [
    { icon: icons.all_tab, title: "All", id: 1 },
    { icon: icons.redeemed, title: "Banners", id: 2 },
    { icon: icons.locked, title: "Posters/QR", id: 3 },
  ];

  const Tabs = () => {
    return (
      <View style={styles.tabMain}>
        {TabData.map((ite, index) => {
          return (
            <TabCard
              onPress={() =>setSelectedTab(ite?.id)}
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
    <BannersAndPostersCard
    onIsActive={()=>setIsChoosBannerModal(true)}
      onPress={() =>
        navigation.navigate("BrandPartnersProfile", { data: item })
      }
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
        <TabHeader title={"Banners & Posters"} isNotification />
        <View
          style={{
            ...appStyles.rowjustify,

            width: "100%",
            gap: sizeHelper.calWp(15),
          }}
        >
          <CustomSearch
            ContainerStyle={{ flex: 1 }}
            placeholder="Search by title"
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("AddNewBanner")}
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
          data={BrandPartnersData}
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
      <ChooseBannerModal
        onNext={() => 
          {
            setIsChoosBannerModal(false)
            setTimeout(() => {
              navigation.navigate("AddNewPosterQRCampaign")

              
            }, 500);

          }
          }
        onCancel={() => setIsChoosBannerModal(false)}
        title={"Warning!"}
        des={"Are you sure to mark the task incomplete!"}
        modalVisible={isChoosBannerModal}
        setModalVisible={setIsChoosBannerModal}
      />
    </>
  );
};

export default BannersAndPosters;

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
