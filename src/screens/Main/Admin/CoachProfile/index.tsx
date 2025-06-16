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
import CustomMenu from "../../../../components/CustomMenu";
import CustomButton from "../../../../components/Button";
import AnimatedProgressBar from "../../../../components/AnimatedProgressBar";
import RedemCard from "../../../../components/RedemCard";
import UserCard from "../../../../components/UserCard";

const CoachProfile = ({ navigation, route }: any) => {
  const routesData = route?.params?.data;
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [markDone, setMarkDone] = useState(false);

  const UserData = [
    {
      icon: images.user_img,
      name: "Anas Ali",
      id: 1,
      type: "Student",
      task_completed: 24,
      backgroundColor: theme.colors.card_yellow,
    },
    {
      icon: images.user_img,
      name: "Davis",
      id: 1,
      type: "Coach",
      assign_students: 53,
      backgroundColor: theme.colors.dark_pink,
    },
    {
      icon: images.user_img,
      name: "Anas Ali",
      id: 1,
      type: "Parent",
      linked_child: "Mia Lopez",
      backgroundColor: theme.colors.Card_white_dull,
    },
  ];
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
    { icon: images.grow, title: "Total Tasks Assigned", label: "24" },
    { icon: icons.task_check, title: "Tasks Completed", label: "18" },
    { icon: images.reward, title: "Rewards Redeemed", label: "185" },
    { icon: images.streak, title: "Current Streak", label: "4 Days" },
  ];

  const TodayTaskContainer = ({
    title,
    time,
    icon,
    name,
    status_text,

    item,
  }: any) => {
    return (
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View
          style={{
            flexDirection: "row",
            gap: sizeHelper.calWp(15),
            width: "60%",
          }}
        >
          <View
            style={{
              width: sizeHelper.calWp(85),
              height: sizeHelper.calWp(85),
              backgroundColor: theme.colors.Input_field,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: sizeHelper.calWp(85),
            }}
          >
            <Image style={{ width: "50%", height: "50%" }} source={icon} />
          </View>
          <View style={{ gap: sizeHelper.calHp(10), flex: 1 }}>
            <CustomText
              text={title}
              fontFam={fonts.Inter_SemiBold}
              color={theme.colors.white}
              fontWeight="600"
              size={23}
            />
            <CustomText
              text={`${time}`}
              fontFam={fonts.Inter_SemiBold}
              color={"#FFFFFF80"}
              fontWeight="600"
              size={21}
            />

            <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
              <Image
                style={{
                  width: sizeHelper.calWp(30),
                  height: sizeHelper.calWp(30),
                }}
                source={images.reward}
              />

              <CustomText text={item?.reward} color={theme.colors.white} />
            </View>
          </View>
        </View>

        <CustomButton
          text={item?.status}
          height={65}
          size={21}
          width={"35%"}
          bgColor={item?.btn_color + "30"}
          textColor={item?.btn_color}
          borderRadius={999}
        ></CustomButton>
      </View>
    );
  };

  const WeekProgress = () => {
    return (
      <View
        style={{
          width: "90%",
          backgroundColor: theme.colors.white,
          borderRadius: sizeHelper.calWp(60),
          gap: sizeHelper.calHp(30),
          paddingHorizontal: sizeHelper.calWp(30),
          paddingVertical: sizeHelper.calHp(10),
          alignItems: "center",
          // padding: sizeHelper.calWp(15),
          justifyContent: "space-between",

          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          shadowColor: theme.colors.black + "60",
          shadowRadius: 6,
          elevation: 10,
          position: "absolute",
          bottom: sizeHelper.calHp(-110),
          alignSelf: "center",
        }}
      >
        <View style={appStyles.rowjustify}>
          <View
            style={{
              gap: sizeHelper.calWp(10),
              //   backgroundColor: "red",
              flex: 1,
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
          <Image
            style={{
              width: sizeHelper.calWp(230),
              height: sizeHelper.calWp(230),
              marginLeft: sizeHelper.calWp(50),
              // alignSelf: "center",
            }}
            source={images.graph}
          />
        </View>
      </View>
    );
  };

  const RewardAvailable = () => {
    return (
      <View
        style={{
          width: "100%",
          height: "49%",

          backgroundColor: theme.colors.dark_pink,
          borderRadius: sizeHelper.calWp(40),
          gap: sizeHelper.calHp(15),
          padding: sizeHelper.calWp(20),
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            width: sizeHelper.calWp(70),
            height: sizeHelper.calWp(70),
            alignSelf: "center",
          }}
          source={images.reward}
        />
        <CustomText
          text={`1 reward available to redeem!`}
          fontFam={fonts.Inter_Medium}
          style={{ textAlign: "center" }}
          fontWeight="600"
          size={21}
        />

        <CustomButton
          text="View Rewards"
          bgColor={theme.colors.white}
          textColor={theme.colors.black}
          size={22}
          height={75}
          borderWidth={1}
          borderColor={theme.colors.primary}
          onPress={() => navigation.navigate("RewardsScreen")}
          width={"100%"}
        >
          <Image
            source={icons.arrow_next}
            style={{
              width: sizeHelper.calWp(40),
              height: sizeHelper.calWp(40),
              tintColor: theme.colors.black,
            }}
          />
        </CustomButton>
      </View>
    );
  };

  const CurrentTier = () => {
    return (
      <View style={{ ...appStyles.rowjustify, gap: sizeHelper.calWp(20) }}>
        <View style={{ ...appStyles.row, gap: sizeHelper.calWp(15) }}>
          <View
            style={{
              width: sizeHelper.calWp(95),
              height: sizeHelper.calWp(95),
              backgroundColor: theme.colors.Input_field,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: sizeHelper.calWp(85),
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={images.silver}
            />
          </View>
          {/* <View style={{ gap: sizeHelper.calHp(10) }}>
              <CustomText
                text={title}
                fontFam={fonts.Inter_SemiBold}
                color={theme.colors.white}
                fontWeight="600"
                size={23}
              />
              <CustomText
                text={time}
                fontFam={fonts.Inter_SemiBold}
                color={"#FFFFFF80"}
                fontWeight="600"
              />
              <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
                <Image
                  style={{
                    width: sizeHelper.calWp(35),
                    height: sizeHelper.calWp(35),
                  }}
                  source={images.reward}
                />
                <CustomText
                  text={reward}
                  fontFam={fonts.Inter_SemiBold}
                  color={theme.colors.white}
                  fontWeight="600"
                />
              </View>
            </View> */}
        </View>
        <View style={{ gap: sizeHelper.calHp(15), flex: 1 }}>
          <View style={appStyles.rowjustify}>
            <CustomText
              text={"Silver"}
              fontFam={fonts.Inter_Medium}
              fontWeight="600"
            />
            <CustomText
              text={"220 / 300 Points"}
              fontFam={fonts.Inter_Medium}
              fontWeight="600"
            />
          </View>
          <AnimatedProgressBar
            // width={"83%"}
            progress={140}
          />
          <CustomText
            text={'"80 more points to reach Gold!"'}
            fontFam={fonts.Inter_Medium}
            fontWeight="600"
          />
        </View>
        {/* <CustomButton
            text={btnTitle || "Complete"}
            height={68}
            size={21}
            width={"37%"}
            bgColor={btnBgColor || theme.colors.dark_highlight + "30"}
            textColor={btnTxtColor || theme.colors.dark_highlight}
            borderRadius={999}
          >
            {isMarkDone && (
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setMarkDone(!markDone)}
                style={{
                  width: sizeHelper.calWp(40),
                  height: sizeHelper.calWp(40),
                  borderRadius: sizeHelper.calWp(10),
                  borderWidth: 1,
                  borderColor: theme.colors.highlght,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: markDone
                    ? theme.colors.primary
                    : theme.colors.white,
                }}
              >
                {markDone && (
                  <Image
                    style={{
                      width: "60%",
                      height: "60%",
                      tintColor: theme.colors.white,
                    }}
                    source={icons.check}
                  />
                )}
              </TouchableOpacity>
            )}
          </CustomButton> */}
      </View>
    );
  };

  const renderUserItem = ({ item }: any) => (
    <UserCard
      onPress={() => navigation.navigate("CoachProfile", { data: item })}
      item={item}
    />
  );

  return (
    <>
      <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <View>
          <View
            style={{
              width: "100%",
              backgroundColor: theme.colors.primary,
              paddingTop: sizeHelper.calHp(100),
              paddingHorizontal: sizeHelper.calWp(30),
              paddingBottom: sizeHelper.calHp(140),
              borderBottomLeftRadius: sizeHelper.calWp(100),
              borderBottomRightRadius: sizeHelper.calWp(100),
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  style={{
                    width: sizeHelper.calWp(45),
                    height: sizeHelper.calWp(45),
                    marginTop: sizeHelper.calHp(10),
                    tintColor: theme.colors.white + "70",
                  }}
                  source={icons.arrow_back}
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
              <View style={{ width: sizeHelper.calWp(100) }} />
            </View>
            <View
              style={{
                alignItems: "center",
                paddingTop: sizeHelper.calHp(10),
                gap: sizeHelper.calHp(5),
              }}
            >
              <CustomText
                text={"Anas Ali"}
                fontFam={fonts.Inter_SemiBold}
                fontWeight="600"
                size={23}
                color={theme.colors.white}
              />
              <CustomText
                text={routesData?.type}
                size={20}
                fontWeight="400"
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
            marginTop: sizeHelper.calHp(130),
          }}
          contentContainerStyle={{ paddingBottom: sizeHelper.calHp(200) }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: theme.colors.background,
              padding: sizeHelper.calWp(30),
              gap: sizeHelper.calHp(20),
            }}
          >
            {routesData?.type == "Coach" && (
              <View
                style={{
                  gap: sizeHelper.calHp(20),
                }}
              >
                <View style={appStyles.rowjustify}>
                  <CustomText
                    size={21}
                    text={`Student Managed`}
                    color={theme.colors.black}
                    fontWeight="700"
                  />
                  <CustomText
                    text={`View All`}
                    textDecorationLine="underline"
                    color={theme.colors.black}
                    fontWeight="700"
                  />
                </View>

                <FlatList
                  data={UserData}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{
                    gap: sizeHelper.calHp(20),
                  }}
                  style={{
                    flex: 1,
                    backgroundColor: theme.colors.background,
                  }}
                  renderItem={renderUserItem}
                />
              </View>
            )}

            <CustomText
              text={"Action History"}
              fontFam={fonts.Inter_SemiBold}
              fontWeight="600"
              size={22}
            />

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
            {
                routesData?.type !== "Coach"&&(
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

                )
            }

<CustomButton
                  text="Deactivate Account"
                  style={{ marginTop: sizeHelper.calHp(20) }}
                  borderColor={theme.colors.warning}
                  borderWidth={1}
                  bgColor={"transparent"}
                textColor={theme.colors.warning}
                  width={"100%"}
                >
                  <Image
                    source={icons.arrow_next}
                    style={{
                      width: sizeHelper.calWp(40),
                      height: sizeHelper.calWp(40),
                      tintColor:theme.colors.warning
                    }}
                  />
                </CustomButton>

           
          </View>
        </ScrollView>
      </View>
     
    </>
  );
};
export default CoachProfile;

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
