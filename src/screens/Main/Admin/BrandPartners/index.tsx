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
import CustomHeader from "../../../../components/Header/inde";

const BrandPartners = ({ navigation }: any) => {
  const [selectedDay, setSelectedDay] = useState("Sun");
  const [selectedTab, setSelectedTab] = useState(1);
  const [isWarningModal, setIsWarningModal] = useState(false);
  const [tasksData, setTasksData] = useState(AssignTaskData);
  const [isChooseUserTypeModal,setIsChooseUserTypeModal]=useState(false)
  const BrandPartnersData = [
    {
      icon: images.gametimeshop,
      name: "Gametimeshop",
      id: 1,
      category:"Apparel",
      active_rewards:"3",
      redemptions:"210",
      backgroundColor: theme.colors.card_yellow,
    },
    {
      icon: images.subway,
      name: "Subway",
      id: 1,
      category:"Apparel",
      active_rewards:"3",
      redemptions:"210",
      backgroundColor: theme.colors.dark_pink,
    },
    {
      icon: images.spotify,
      name: "Spotify",
      id: 1,
      category:"Apparel",
      active_rewards:"3",
      redemptions:"210",
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

  const renderItem = ({ item }: any) => <BrandPartnerCard 
  onPress={()=>navigation.navigate("BrandPartnersProfile",{data:item})}
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
        <CustomHeader title={"Brand Partners"} isNotification />
        <View
          style={{
            ...appStyles.rowjustify,

            width: "100%",
            gap: sizeHelper.calWp(15),
          }}
        >
          <CustomSearch
            ContainerStyle={{ flex: 1 }}
            placeholder="Search Brand Name..."
          />
          <TouchableOpacity
          onPress={()=>navigation.navigate("AddNewBrandPartner")}
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

export default BrandPartners;

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
