import {
  FlatList,
  Image,
  Platform,
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
import CustomMenu from "../../../../components/CustomMenu";
import CustomButton from "../../../../components/Button";
import AnimatedProgressBar from "../../../../components/AnimatedProgressBar";
import RedemCard from "../../../../components/RedemCard";
import LineChartWithDots from "../Analytics/LineChartWithDots";

const AdminHome = ({ navigation }: any) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [markDone, setMarkDone] = useState(false);
  const taskReviewData = [
    {
      title: "Ball Control Drills",
      name: "Salman Haider",
      time: " (5:00 PM – 6:00 PM)",
      isVerified: false,
      status: "Completed",
      reward: "+15",
      btn_color: theme.colors?.dark_highlight,
    },
    {
      title: "Study Geometry",
      name: "Mia Lopez",
      time: " (5:00 PM – 6:00 PM)",
      reward: "+10",

      status: "Pending",
      btn_color: theme.colors?.pending_highlight,
    },
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

  const taskProgress = [
    { icon: images.total_users, title: "Total Users", label: "210" },
    { icon: images.tasks_assigned, title: "Tasks Assigned Today", label: "92" },
    { icon: icons.task_check, title: "Tasks Verified Today", label: "64" },
    { icon: images.active_students, title: "Active Students", label: "125" },
    { icon: images.reward, title: "Rewards Redeemed", label: "48" },
    { icon: images.brand_partners, title: "Brand Partners", label: "4" },

  ];

 

  const WeekProgress = () => {
    return (
      <View
        style={{
          width: "90%",
          backgroundColor: theme.colors.white,
          borderRadius: sizeHelper.calWp(60),
          gap: sizeHelper.calHp(30),
          paddingHorizontal: sizeHelper.calWp(30),
          paddingVertical: sizeHelper.calHp(30),
          alignItems: "center",
          // padding: sizeHelper.calWp(15),
          justifyContent: "space-between",

          
          position: "absolute",
          bottom: sizeHelper.calHp(-140),
          alignSelf: "center",
          borderWidth:1,
          borderColor:theme.colors.placeholder
        }}
      >
        <View style={appStyles.rowjustify}>
          <View
            style={{
              gap: sizeHelper.calWp(20),
              //   backgroundColor: "red",
              flex: 1,
            }}
          >
            {taskProgress.map((item, index) => {
              return (
                <View
                  style={{
                    gap: sizeHelper.calWp(20),
                  }}
                >
                  <View style={appStyles.rowjustify}>
                    <View
                      style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}
                    >
                      <Image
                        style={{
                          width: sizeHelper.calWp(35),
                          height: sizeHelper.calWp(35),
                        }}
                        source={item?.icon}
                      />
                      <CustomText
                        text={item?.title}
                        color={theme.colors.black}
                        // size={18}
                      />
                    </View>
                    <CustomText
                      text={item?.label}
                      fontWeight="700"
                      fontFam={fonts.Inter_Bold}
                      color={theme.colors.black+"80"}
                      size={23}
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
      </View>
    );
  };

  
  return (
    <>
      <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <View>
          <View
            style={{
              width: "100%",
              backgroundColor: theme.colors.primary,
              paddingTop: sizeHelper.calHp(Platform.OS=="ios"? 100:20),
              paddingHorizontal: sizeHelper.calWp(30),
              paddingBottom: sizeHelper.calHp(320),
              borderBottomLeftRadius: sizeHelper.calWp(100),
              borderBottomRightRadius: sizeHelper.calWp(100),
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity onPress={() => setIsMenuVisible(true)}>
                <Image
                  style={{
                    width: sizeHelper.calWp(45),
                    height: sizeHelper.calWp(45),
                    marginTop: sizeHelper.calHp(10),
                  }}
                  source={icons.drawer}
                />
              </TouchableOpacity>

              <Image
                style={{
                  width: sizeHelper.calWp(140),
                  height: sizeHelper.calWp(140),
                  marginLeft: sizeHelper.calWp(50),
                }}
                source={images.user_img}
              />
              <View
                style={{
                  flexDirection: "row",
                  gap: sizeHelper.calWp(30),
                  marginTop: sizeHelper.calHp(10),
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("NotificationsScreen")}
                >
                  <Image
                    style={{
                      width: sizeHelper.calWp(40),
                      height: sizeHelper.calWp(40),
                    }}
                    source={icons.notification}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={{
                      width: sizeHelper.calWp(40),
                      height: sizeHelper.calWp(40),
                    }}
                    source={icons.user}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                alignItems: "center",
                paddingTop: sizeHelper.calHp(10),
                gap: sizeHelper.calHp(5),
              }}
            >
              <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
                <CustomText
                  text={"Hello"}
                  fontFam={fonts.Inter_SemiBold}
                  fontWeight="600"
                  size={23}
                  color={"#FFFFFF50"}
                />
                <CustomText
                  text={"Anas Ali"}
                  fontFam={fonts.Inter_SemiBold}
                  fontWeight="600"
                  size={23}
                  color={theme.colors.white}
                />
              </View>
              <CustomText
                text={"Here’s a quick look at Mia’s progress today."}
                size={20}
                color={theme.colors.white}
              />
            </View>
          </View>
          <WeekProgress />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            flex: 1,
            backgroundColor: theme.colors.background,
            marginTop: sizeHelper.calHp(150),
          }}
          contentContainerStyle={{ paddingBottom: sizeHelper.calHp(150) }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: theme.colors.background,
              padding: sizeHelper.calWp(30),
              gap: sizeHelper.calHp(20),
            }}
          >
            <LineChartWithDots/>
            {/* <View style={appStyles.rowjustify}>
                <CustomText
                  text={"Today’s Tasks for Mia"}
                  fontFam={fonts.Inter_SemiBold}
                  fontWeight="600"
                  size={22}
                />
                <CustomText
                  text={"See All"}
                  textDecorationLine="underline"
                  fontFam={fonts.Inter_SemiBold}
                  fontWeight="600"
                />
              </View>

              <View
                        style={{
                          width: "100%",
                          backgroundColor: theme.colors.black,
                          paddingHorizontal: sizeHelper.calWp(20),
                          paddingVertical: sizeHelper.calHp(30),
                          borderRadius: sizeHelper.calWp(40),
                          gap: sizeHelper.calHp(30),
                        }}
                      >
                          <FlatList
                data={taskReviewData}
                style={{ flex: 1 }}
                contentContainerStyle={{
                  gap: sizeHelper.calWp(20),
                  // justifyContent: "space-between",
                }}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }: any) => {
                  return (
                    <>
                    <TodayTaskContainer
                          icon={icons.volleyball}
                          title={item?.title}
                          name={item?.name}
                          time={item?.time}
                          item={item}
                          status_text={item?.status_text}
                          reward={"+15"}
                        />
                    
                    </>
                  );
                }}
              />
                        
                      </View>
            

<View style={{ gap: sizeHelper.calHp(25) }}>
                    <CustomText
                      text={"Latest Redeemed Rewards"}
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
                      {RedemsData.map((item, index) => {
                        return (
                            <RedemCard
                            item={item}
                            color={theme.colors.black}
                            index={index}
                            />

                        );
                      })}
                    </View>
                  </View>
   */}
          </View>
        </ScrollView>
      </View>
      <CustomMenu
        isModalVisible={isMenuVisible}
        setModalVisible={setIsMenuVisible}
      />
    </>
  );
};
export default AdminHome;

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
  box: {
    width: "100%",
    backgroundColor: theme.colors.black,
    paddingHorizontal: sizeHelper.calWp(30),
    paddingBottom: sizeHelper.calHp(30),
    borderRadius: sizeHelper.calWp(40),
    gap: sizeHelper.calHp(30),
  },
});
