import {
    FlatList,
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import { useEffect, useState } from "react";
  import { theme } from "../../../../utils/Themes";
  import sizeHelper from "../../../../utils/Helpers";
  import icons from "../../../../utils/Constants/icons";
  import images from "../../../../utils/Constants/images";
  import { appStyles } from "../../../../utils/GlobalStyles";
  import CustomText from "../../../../components/Text";
  import { fonts } from "../../../../utils/Themes/fonts";
  import ScreenLayout from "../../../../components/ScreenLayout";
  import RedemCard from "../../../../components/RedemCard";
  import TabHeader from "../../../../components/TabHeader";
import CustomHeader from "../../../../components/Header/inde";
import { rewardData } from "../../../../utils/Data";
import RewardsCatalogueCard from "../../../../components/RewardsCatalogueCard";
  
  const BrandPartnersProfile = ({ navigation,route }: any) => {
    const routeData=route?.params?.data
    const [rewards,setReward]=useState(rewardData)
    const RedemsData = [
      {
        icon: images.redem,
        name: "Free Iced Coffee",
        date: "Redeemed on Apr 1",
      },
      {
        icon: images.redem,
        name: "Free Iced Coffee",
        date: "Redeemed on Apr 1",
      },
      {
        icon: images.redem,
        name: "Free Iced Coffee",
        date: "Redeemed on Apr 1",
      },
    ];
  
    const RedemptionsData = [
      {
        icon: images.fries,
        title: "Free Small Fries",
        label: "Redeem for 100 Points",
        btn_title: "🔒  Locked",
      },
      {
        icon: images.gift,
        title: "Game Store Gift Card",
        label: "Redeem for 100 Points",
        btn_title: "🔒  Locked",
      },
      {
        icon: images.Iced_coffee,
        title: "Free Iced Coffee",
        label: "Redeem for 100 Points",
        btn_title: "🔒  Locked",
      },
    ];
  
    const TaskStatus = ({ icon, title, label }: any) => {
      return (
        <View style={{ alignItems: "center", gap: sizeHelper.calHp(10) }}>
          <Image
            style={{
              width: sizeHelper.calWp(40),
              height: sizeHelper.calWp(40),
              alignSelf: "center",
            }}
            source={icon}
          />
          <CustomText
            text={title}
            fontFam={fonts.Inter_Bold}
            fontWeight="700"
            size={27}
          />
          <CustomText 
          style={{textAlign:"center"}}
          text={label} size={18} color={theme.colors.black + "60"} />
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
            gap: sizeHelper.calWp(30),
          }}
        >
          <View
            style={{
              paddingHorizontal: sizeHelper.calWp(30),
              gap: sizeHelper.calWp(20),
            }}
          >
            <CustomHeader title={"Anas Ali"} isNotification />
          </View>
  
          <View
            style={{
              paddingHorizontal: sizeHelper.calWp(30),
              paddingTop: sizeHelper.calHp(30),
              flex: 1,
              gap: sizeHelper.calHp(20),
            }}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                gap: sizeHelper.calHp(20),
              }}
            >
              <View
                style={{
                  gap: sizeHelper.calHp(30),
                }}
              >
                <Image
                  style={{
                    width: sizeHelper.calWp(250),
                    height: sizeHelper.calWp(250),
                    alignSelf: "center",
                  }}
                  source={routeData?.icon}
                />
                <View
                  style={{
                    ...appStyles.rowjustify,
                    paddingHorizontal: sizeHelper.calWp(60),
                  }}
                >
                  <TaskStatus
                    title={"Apparel"}
                    label={"Category"}
                    icon={images.streak}
                  />
                  <TaskStatus
                    title={"Jan, 2025"}
                    label={"Partner Since"}
                    icon={icons.task_check}
                  />
                  <TaskStatus
                    title={"480"}
                    label={"Total\nRedemptions"}
                    icon={images.reward}
                  />
                </View>
  
                <View style={{ gap: sizeHelper.calHp(15) }}>
                  <CustomText
                    text={" Reward List"}
                    fontWeight="700"
                    size={22}
                    fontFam={fonts.Inter_Bold}
                  />
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
                </View>
              </View>
            </ScrollView>
          </View>
        </ScreenLayout>
      </>
    );
  };
  export default BrandPartnersProfile;
  
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
    box: {
      width: "100%",
      backgroundColor: theme.colors.black,
      padding: sizeHelper.calWp(30),
      borderRadius: sizeHelper.calWp(40),
      gap: sizeHelper.calHp(30),
    },
  });
  