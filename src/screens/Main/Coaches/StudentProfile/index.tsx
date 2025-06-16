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
  import CustomHeader from "../../../../components/Header/inde";
  import ScreenLayout from "../../../../components/ScreenLayout";
  import TierCard from "../../../../components/TierCard";
  import DealCard from "../../../../components/DealCard";
  import TabCard from "../../../../components/TabCard";
  import RewardsCard from "../../../../components/RewardsCard";
import RedemCard from "../../../../components/RedemCard";
  
  const StudentProfile = ({ navigation }: any) => {
    const [selectedTab, setSelectedTab] = useState(1);
    const tabData = [
      { icon: icons.all_tab, title: "All", id: 1 },
      { icon: icons.redeemed, title: "Redeemed", id: 2 },
      { icon: icons.locked, title: "Locked", id: 3 },
    ];
  
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
            size={25}
          />
          <CustomText text={label} 
           size={18}
          color={theme.colors.black + "60"}  />
        </View>
      );
    };
  
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
              gap: sizeHelper.calWp(30),
            }}
          >
            <CustomHeader title={"Anas Ali"} isNotification />
          </View>
       
          <View
            style={{
              paddingHorizontal: sizeHelper.calWp(30),
              paddingTop: sizeHelper.calHp(30),
              flex: 1,
              gap: sizeHelper.calHp(30),
            }}
          >
   
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                gap: sizeHelper.calHp(30),
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
                    source={images.graph}
                  />
                  <View
                    style={{
                      ...appStyles.rowjustify,
                      paddingHorizontal: sizeHelper.calWp(60),
                    }}
                  >
                    <TaskStatus
                      title={"3 Days"}
                      label={"Streak"}
                      icon={images.streak}
                    />
                    <TaskStatus
                      title={"9/12"}
                      label={"Task Completed"}
                      icon={icons.task_check}
                    />
                    <TaskStatus
                      title={"120"}
                      label={"Points"}
                      icon={images.reward}
                    />
                  </View>
                
                 
  
                  <View style={{ gap: sizeHelper.calHp(15) }}>
                    <CustomText
                      text={"Redemptions"}
                      fontWeight="700"
                      size={22}
                      fontFam={fonts.Inter_Bold}
                    />
                    <View
                      style={{
                        ...styles.box,
                        backgroundColor: theme.colors.black,
                      }}
                    >
                      {RedemsData.map((item, index) => {
                        return (
                            <RedemCard
                            item={item}
                            index={index}
                            />

                        );
                      })}
                    </View>
                  </View>
  
                  
                </View>
             
            </ScrollView>
          </View>
  
          
        </ScreenLayout>
      </>
    );
  };
  export default StudentProfile;
  
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
  