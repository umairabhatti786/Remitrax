import {
  FlatList,
  Image,
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

const TierProgress = ({ navigation }: any) => {
  const TierLevelsSummaryData = [
    {
      title: `Bronze\n0–100 pts`,
      label: "✅ Completed",
      des: "“Your starting tier”",
      icon: images.bronze,
      progress: 100,
      backgroundColor: theme.colors.card_yellow,
    },
    {
      title: `Silver\n101–300 pts`,
      label: "🔘 Current",
      des: "“You’re here now”",
      icon: images.silver,
      progress: 100,
      backgroundColor: theme.colors.dark_pink,
    },
    {
      title: `Silver\n101–300 pts`,
      label: "🔘 Current",
      des: "“You’re here now”",
      icon: images.silver,
      progress: 100,
      backgroundColor: theme.colors.dark_pink,
    },
    {
      title: `Gold\n301–600 pts`,
      label: "🔒 Locked",
      des: '“Unlocks Premium Rewards”',
      icon: images.gold,
      backgroundColor: theme.colors.Card_white_dull,
    },
    {
      title: `Platinum\n601+ pts`,
      label: "🔒 Locked",
      des: '“Coming Soon!”',
      icon: images.Platinum,
      backgroundColor: "#D5D7FF",
    },
  ];
  return (
    <>
      <ScreenLayout
        style={{
          flex: 1,
          paddingHorizontal: sizeHelper.calWp(30),
          gap: sizeHelper.calWp(30),
        }}
      >
        <CustomHeader title={"Your Tier Progress"} isNotification />

        <View style={{ gap: sizeHelper.calHp(25) }}>
          <FlatList
            data={TierLevelsSummaryData}
            
            ListHeaderComponent={() => {
              return (
                <View style={{ gap: sizeHelper.calHp(25) }}>
                  <CustomText
                    text={"Current Tier"}
                    fontFam={fonts.Inter_SemiBold}
                    fontWeight="600"
                    size={22}
                  />
                  <TierCard
                    backgroundColor={theme.colors.black}
                    textColor={theme.colors.white}
                    title={"Silver"}
                    icon={images.silver}
                    progress={100}
                    label={"220 / 300 Points"}
                    des={'"80 more points to reach Gold!"'}
                  />
                  <DealCard />
                  <CustomText
                    text={"Current Tier"}
                    fontFam={fonts.Inter_SemiBold}
                    fontWeight="600"
                    size={22}
                  />
                </View>
              );
            }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              gap: sizeHelper.calWp(20),
              paddingBottom: sizeHelper.calHp(100),
              // justifyContent: "space-between",
            }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }: any) => {
              return (
                <>
                  <TierCard
                    backgroundColor={item?.backgroundColor}
                    textColor={theme.colors.black}
                    progressBgColor={theme.colors.white}
                    progress={item?.progress}
                    descriptionColor={theme.colors.black + "60"}
                    progressColor={theme.colors.black}
                    title={item?.title}
                    icon={item?.icon}
                    label={item?.label}
                    des={item?.des}
                  />
                </>
              );
            }}
          />
        </View>
      </ScreenLayout>
    </>
  );
};
export default TierProgress;

const styles = StyleSheet.create({
  user_point_btn: {
    width: "43%",
    paddingVertical: sizeHelper.calHp(20),
    backgroundColor: theme.colors.white,
    borderRadius: 999,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: sizeHelper.calWp(20),
  },
});
