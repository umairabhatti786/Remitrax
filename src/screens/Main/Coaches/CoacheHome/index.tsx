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

const CoacheHome = ({ navigation }: any) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [markDone, setMarkDone] = useState(false);
  const taskReviewData = [
    {
      title: "Ball Control Drills",
      name: "Salman Haider",
      time: " (5:00 PM – 6:00 PM)",
      status_text: "Completed ✅",
      isVerified: false,
      status: "completed",

      btn_color: theme.colors?.white,
    },
    {
      title: "Study Geometry",
      name: "Mia Lopez",
      time: " (5:00 PM – 6:00 PM)",
      status_text: "Ongoing",
      status: "pending",

      btn_color: theme.colors?.pending_highlight,
    },
  ];

  const taskProgress = [
    { icon: images.grow, title: "Total Tasks Assigned", label: "24" },
    { icon: icons.task_check, title: "Tasks Completed", label: "18" },
    { icon: images.left_right, title: "Team Completion Rate", label: "75%" },
    { icon: images.streak, title: "Points Verified", label: "185" },
    { icon: images.idea, title: "Top Performer", label: "Jordan Smith" },
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
            width: "100%",
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
              text={` ${name} ${time}`}
              fontFam={fonts.Inter_SemiBold}
              color={"#FFFFFF80"}
              fontWeight="600"
            />
            <View
              style={{
                width: "100%",
                height: sizeHelper.calHp(1),
                backgroundColor: theme.colors.white + "80",
              }}
            />

            <View style={appStyles.rowjustify}>
              <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
                <CustomText
                  text={"Status:"}
                  fontFam={fonts.Inter_SemiBold}
                  color={"#FFFFFF80"}
                  fontWeight="600"
                />
                <CustomText
                  text={status_text}
                  fontFam={fonts.Inter_SemiBold}
                  color={theme.colors.white}
                  fontWeight="600"
                />
              </View>

              <CustomButton
                text={
                  item?.status == "pending"
                    ? "Pending"
                    : item?.status == "completed"
                    ? "Verify Task"
                    : ""
                }
                height={65}
                size={21}
                width={"45%"}
                bgColor={
                  item?.status == "pending"
                    ? theme.colors.pending_highlight + "25"
                    : theme.colors.white
                }
                textColor={
                  item?.status == "pending"
                    ? theme.colors.pending_highlight
                    : theme.colors.black
                }
                borderRadius={999}
              >
                {item?.status == "completed" && (
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
              </CustomButton>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const WeekProgress = () => {
    return (
      <View
        style={{
          width: "100%",
          backgroundColor: theme.colors.card_yellow,
          borderRadius: sizeHelper.calWp(40),
          gap: sizeHelper.calHp(30),
          padding: sizeHelper.calWp(25),
          justifyContent: "space-between",
        }}
      >
        <CustomText
          text={`This Week’s Progress`}
          fontFam={fonts.Inter_SemiBold}
          fontWeight="600"
          size={25}
        />
        <View style={appStyles.rowjustify}>
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
                        // size={18}
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

            <CustomText
              text={"(6 tasks completed)"}
              style={{ textAlign: "right" }}
              color={theme.colors.black}
              size={18}
            />
          </View>
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

  
  return (
    <>
      <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <View
          style={{
            width: "100%",
            backgroundColor: theme.colors.primary,
            paddingTop: sizeHelper.calHp(Platform.OS == "ios" ? 100 : 20),
            paddingHorizontal: sizeHelper.calWp(30),
            paddingBottom: sizeHelper.calHp(20),
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
              text={"You have 2 tasks to verify today."}
              size={20}
              color={theme.colors.white}
            />
          </View>
        </View>
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: theme.colors.background,
          }}
          contentContainerStyle={{ paddingBottom: sizeHelper.calHp(200) }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: theme.colors.background,
              padding: sizeHelper.calWp(30),
              gap: sizeHelper.calHp(10),
            }}
          >
            <View style={appStyles.rowjustify}>
              <CustomText
                text={"Tasks Review"}
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
                      <TodayTaskContainer
                        icon={icons.volleyball}
                        title={item?.title}
                        name={item?.name}
                        time={item?.time}
                        item={item}
                        status_text={item?.status_text}
                        reward={"+15"}
                      />
                    </View>
                  </>
                );
              }}
            />

            <TouchableOpacity
              onPress={() => navigation.navigate("AssignNewTask")}
              style={{
                width: "100%",
                height: sizeHelper.calHp(80),
                flexDirection: "row",
                gap: sizeHelper.calWp(30),
                alignItems: "center",
                justifyContent: "center",
                marginVertical: sizeHelper.calHp(20),

                borderRadius: sizeHelper.calWp(20),
                backgroundColor: theme.colors.primary,
              }}
            >
              <Image
                style={{
                  width: sizeHelper.calWp(25),
                  height: sizeHelper.calWp(25),
                }}
                source={icons.plus}
              />

              <CustomText
                text={"Assign New Task"}
                fontFam={fonts.Inter_SemiBold}
                color={theme.colors.white}
                fontWeight="600"
                size={23}
              />
            </TouchableOpacity>

            <WeekProgress />
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
export default CoacheHome;

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
