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
import SuccessModal from "../../../../components/SuccessModal";

const RewardsScreen = ({ navigation }: any) => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [isSuccessModal, setIsSuccessModal] = useState(false);

  const tabData = [
    { icon: icons.all_tab, title: "All", id: 1 },
    { icon: icons.redeemed, title: "Redeemed", id: 2 },
    { icon: icons.locked, title: "Locked", id: 3 },
  ];

  const UpcomingRewardsData = [
    {
      icon: images.gift,
      title: "Game Store Gift Card",
      label: "Redeem for 100 Points",
      btn_title: "🔒  Locked",
      isBtn: true,
    },
    {
      icon: images.Iced_coffee,
      title: "Free Iced Coffee",
      label: "250 Points\n(🔒 130 more needed)",
      btn_title: "🔒  Locked",
      isBtn: true,
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
  const Tabs = () => {
    return (
      <View style={styles.tabMain}>
        {tabData.map((item, index) => {
          return (
            <TabCard
              onPress={() => setSelectedTab(item?.id)}
              item={item}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          );
        })}
      </View>
    );
  };

  const TaskStatus = ({ icon, title, label }: any) => {
    return (
      <View style={{ alignItems: "center", gap: sizeHelper.calHp(10) }}>
        <Image
          style={{
            width: sizeHelper.calWp(50),
            height: sizeHelper.calWp(50),
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
        <CustomText text={label} color={theme.colors.black + "60"} size={22} />
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
          <CustomHeader title={"Rewards"} isNotification />
        </View>
        <ImageBackground
          style={{ width: "100%", height: sizeHelper.calHp(300) }}
          source={images.reward_img}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "center",
              paddingBottom: sizeHelper.calHp(20),
              //   gap: sizeHelper.calHp(10),
              paddingHorizontal: sizeHelper.calWp(40),
            }}
          >
            <CustomText
              text={"Gametime Smart Rewards"}
              fontFam={fonts.Inter_Bold}
              color={theme.colors.white}
              fontWeight="700"
              size={27}
            />
            <CustomText
              text={
                "Complete tasks, earn points, and unlock real-world rewards from your favorite brands."
              }
              style={{ textAlign: "center" }}
              color={theme.colors.white}
            />
          </View>
        </ImageBackground>
        <View
          style={{
            paddingHorizontal: sizeHelper.calWp(30),
            paddingTop: sizeHelper.calHp(30),
            flex: 1,
            gap: sizeHelper.calHp(30),
          }}
        >
          <Tabs />
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              gap: sizeHelper.calHp(30),
            }}
          >
            {selectedTab == 1 && (
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
                    paddingHorizontal: sizeHelper.calWp(40),
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
                <View
                  style={{
                    ...styles.tabMain,
                    borderWidth: -1,
                    backgroundColor: theme.colors.dark_pink,
                    justifyContent: "center",
                    alignItems: "center",
                    gap: sizeHelper.calWp(20),
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
                <View style={{ gap: sizeHelper.calHp(15) }}>
                  <CustomText
                    text={"Available Rewards"}
                    fontWeight="700"
                    size={22}
                    fontFam={fonts.Inter_Bold}
                  />
                  <View style={{...styles.box,paddingVertical:sizeHelper.calHp(30)}}>
                    
                    <RewardsCard
                      icon={images.fries}

                      onRedeem={()=>setIsSuccessModal(true)}
                      isBtn={true}
                      iconBgColor={theme.colors.white + "40"}
                      title={"Free Small Fries"}
                      btn_title={"Redeem"}
                      btn_img={images.reward}
                      label={"Redeem for 100 Points"}
                      reward={"+15"}
                    />
                  </View>
                </View>

                <View style={{ gap: sizeHelper.calHp(15) }}>
                  <CustomText
                    text={"Upcoming Rewards"}
                    fontWeight="700"
                    size={22}
                    fontFam={fonts.Inter_Bold}
                  />
                  <View
                    style={{
                      ...styles.box,
                      backgroundColor: theme.colors.sky_blue,
                    }}
                  >
                    {UpcomingRewardsData.map((item, index) => {
                      return (
                        <View style={{ gap: sizeHelper.calHp(30) }}>
                          <View
                            style={{
                              width: "90%",
                              height: sizeHelper.calHp(1),
                              backgroundColor:
                                index > 0
                                  ? theme.colors.black + "40"
                                  : "transoarent",
                              alignSelf: "center",
                            }}
                          />
                          <RewardsCard
                            title_color={theme.colors.black}
                            label_color={theme.colors.black + "80"}
                            icon={item?.icon}
                            iconBgColor={theme.colors.white + "40"}
                            title={item?.title}
                            isBtn={item?.isBtn}
                            btn_title={item?.btn_title}
                            label={item?.label}
                            reward={"+15"}
                          />
                        </View>
                      );
                    })}
                  </View>
                </View>

                <View style={{ gap: sizeHelper.calHp(15) }}>
                  <CustomText
                    text={"My Redemptions"}
                    fontWeight="700"
                    size={22}
                    fontFam={fonts.Inter_Bold}
                  />
                  <View
                    style={{
                      ...styles.box,
                      backgroundColor: theme.colors.card_yellow,
                    }}
                  >
                    {RedemptionsData.map((item, index) => {
                      return (
                        <View style={{ gap: sizeHelper.calHp(30) }}>
                          <View
                            style={{
                              width: "90%",
                              height: sizeHelper.calHp(1),
                              backgroundColor:
                                index > 0
                                  ? theme.colors.black + "40"
                                  : "transoarent",
                              alignSelf: "center",
                            }}
                          />
                          <RewardsCard
                            title_color={theme.colors.black}
                            label_color={theme.colors.black + "80"}
                            icon={item?.icon}
                            iconBgColor={theme.colors.white + "40"}
                            title={item?.title}
                            btn_title={item?.btn_title}
                            label={item?.label}
                            reward={"+15"}
                          />
                        </View>
                      );
                    })}
                  </View>
                </View>
              </View>
            )}

            {selectedTab == 2 && (
              <View
                style={{
                  gap: sizeHelper.calHp(30),
                }}
              >
                <View style={{ gap: sizeHelper.calHp(15) }}>
                  <CustomText
                    text={"My Redemptions"}
                    fontWeight="700"
                    size={22}
                    fontFam={fonts.Inter_Bold}
                  />
                  <View
                    style={{
                      ...styles.box,
                      backgroundColor: theme.colors.card_yellow,
                    }}
                  >
                    {RedemptionsData.map((item, index) => {
                      return (
                        <View style={{ gap: sizeHelper.calHp(30) }}>
                          <View
                            style={{
                              width: "90%",
                              height: sizeHelper.calHp(1),
                              backgroundColor:
                                index > 0
                                  ? theme.colors.black + "40"
                                  : "transoarent",
                              alignSelf: "center",
                            }}
                          />
                          <RewardsCard
                            title_color={theme.colors.black}
                            label_color={theme.colors.black + "80"}
                            icon={item?.icon}
                            iconBgColor={theme.colors.white + "40"}
                            title={item?.title}
                            btn_title={item?.btn_title}
                            label={item?.label}
                            reward={"+15"}
                          />
                        </View>
                      );
                    })}
                  </View>
                </View>
              </View>
            )}

{selectedTab == 3 && (
              <View
                style={{
                  gap: sizeHelper.calHp(30),
                }}
              >
                <View style={{ gap: sizeHelper.calHp(15) }}>
                  <CustomText
                    text={"My Redemptions"}
                    fontWeight="700"
                    size={22}
                    fontFam={fonts.Inter_Bold}
                  />
                  <View
                    style={{
                      ...styles.box,
                      backgroundColor: theme.colors.sky_blue,
                    }}
                  >
                    {UpcomingRewardsData.map((item, index) => {
                      return (
                        <View style={{ gap: sizeHelper.calHp(30) }}>
                          <View
                            style={{
                              width: "90%",
                              height: sizeHelper.calHp(1),
                              backgroundColor:
                                index > 0
                                  ? theme.colors.black + "40"
                                  : "transoarent",
                              alignSelf: "center",
                            }}
                          />
                          <RewardsCard
                            title_color={theme.colors.black}
                            label_color={theme.colors.black + "80"}
                            icon={item?.icon}
                            iconBgColor={theme.colors.white + "40"}
                            title={item?.title}
                            btn_title={item?.btn_title}
                            label={item?.label}
                            reward={"+15"}
                          />
                        </View>
                      );
                    })}
                  </View>
                </View>
              </View>
            )}
          </ScrollView>
        </View>

        {/* <View style={{ gap: sizeHelper.calHp(25) }}>
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
          </View> */}
      </ScreenLayout>

      {isSuccessModal && (
        <SuccessModal
          modalVisible={isSuccessModal}
          iconSize={300}
          isShopNow={true}
          onShopNow={()=>setIsSuccessModal(false)}
          setModalVisible={setIsSuccessModal}
          icon={images.celeberation}
          title={"Awesome!"}
          des={"You have been rewarded 20%Off on the product."}
        />
      )}
    </>
  );
};
export default RewardsScreen;

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
    paddingHorizontal: sizeHelper.calWp(20),
    paddingVertical: sizeHelper.calHp(15),
    borderRadius: sizeHelper.calWp(40),
    gap: sizeHelper.calHp(30),
  },
});
