import {
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

const StudentHome = ({ navigation }: any) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [markDone, setMarkDone] = useState(false);

  const TodayTaskContainer = ({
    title,
    time,
    reward,
    icon,
    btnTitle,
    isMarkDone,
    btnBgColor,
    btnTxtColor,
  }: any) => {
    return (
      <View style={{ ...appStyles.rowjustify }}>
        <View style={{ ...appStyles.row, gap: sizeHelper.calWp(15) }}>
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
          <View style={{ gap: sizeHelper.calHp(10) }}>
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
          </View>
        </View>
        <CustomButton
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
        </CustomButton>
      </View>
    );
  };

  const WeekProgress = () => {
    return (
      <View
        style={{
          width: "49%",
          backgroundColor: theme.colors.card_yellow,
          borderRadius: sizeHelper.calWp(40),
          gap: sizeHelper.calHp(30),
          padding: sizeHelper.calWp(25),
          justifyContent: "space-between",
        }}
      >
        <CustomText
          text={`This Week’s\nProgress`}
          fontFam={fonts.Inter_SemiBold}
          fontWeight="600"
          size={22}
        />
        <Image
          style={{
            width: "100%",
            height: sizeHelper.calWp(250),
            alignSelf: "center",
          }}
          source={images.graph}
        />
        <View style={{ gap: sizeHelper.calWp(10) }}>
          <View style={appStyles.rowjustify}>
            <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
              <Image
                style={{
                  width: sizeHelper.calWp(25),
                  height: sizeHelper.calWp(25),
                }}
                source={icons.task_check}
              />
              <CustomText
                text={"Tasks Completed"}
                fontFam={fonts.Inter_Medium}
                color={theme.colors.black + "40"}
                fontWeight="600"
                size={18}
              />
            </View>
            <CustomText
              text={"9/12"}
              fontFam={fonts.Inter_Medium}
              color={theme.colors.black}
              fontWeight="600"
              size={18}
            />
          </View>
          <View
            style={{ height: 1, backgroundColor: theme.colors.black + "10" }}
          />
          <View style={appStyles.rowjustify}>
            <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
              <Image
                style={{
                  width: sizeHelper.calWp(25),
                  height: sizeHelper.calWp(25),
                }}
                source={images.streak}
              />
              <CustomText
                text={"Streak"}
                fontFam={fonts.Inter_Medium}
                color={theme.colors.black + "40"}
                fontWeight="600"
                size={18}
              />
            </View>
            <CustomText
              text={"3 days"}
              fontFam={fonts.Inter_Medium}
              color={theme.colors.black}
              fontWeight="600"
              size={16}
            />
          </View>
          <View
            style={{ height: 1, backgroundColor: theme.colors.black + "10" }}
          />

          <View style={appStyles.rowjustify}>
            <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
              <Image
                style={{
                  width: sizeHelper.calWp(25),
                  height: sizeHelper.calWp(25),
                }}
                source={images.reward}
              />
              <CustomText
                text={"Points Earned"}
                fontFam={fonts.Inter_Medium}
                color={theme.colors.black + "40"}
                fontWeight="600"
                size={18}
              />
            </View>
            <CustomText
              text={"120"}
              fontFam={fonts.Inter_Medium}
              color={theme.colors.black}
              fontWeight="600"
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
          <AnimatedProgressBar progress={140} />
          <CustomText
            text={'"80 more points to reach Gold!"'}
            fontFam={fonts.Inter_Medium}
            fontWeight="600"
          />
        </View>
      </View>
    );
  };

  const NotesContainer = () => {
    return (
      <View
        style={{
          width: "100%",
          height: "49%",

          backgroundColor: theme.colors.Card_white_dull,
          borderRadius: sizeHelper.calWp(40),
          gap: sizeHelper.calHp(15),
          padding: sizeHelper.calWp(20),
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            width: sizeHelper.calWp(60),
            height: sizeHelper.calWp(60),
            alignSelf: "center",
          }}
          source={images.notes_progress}
        />
        <View style={{ gap: sizeHelper.calHp(3) }}>
          <CustomText
            text={`Study Biology Notes`}
            fontFam={fonts.Inter_Medium}
            style={{ textAlign: "center" }}
            fontWeight="600"
            size={21}
          />
          <CustomText
            text={`7:00 PM – 7:45 PM`}
            color={theme.colors.black + "50"}
            style={{ textAlign: "center" }}
            size={21}
          />
        </View>

        <CustomText
          text={`In progress`}
          fontFam={fonts.Inter_SemiBold}
          color={theme.colors.dark_highlight}
          style={{ textAlign: "center" }}
          fontWeight="600"
          size={25}
        />
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
              text={"You're on track. Keep it up!"}
              size={20}
              color={theme.colors.white}
            />
            <View
              style={{
                ...appStyles.row,
                gap: sizeHelper.calWp(10),
                paddingTop: sizeHelper.calHp(10),
              }}
            >
              <TouchableOpacity style={styles.user_point_btn}>
                <Image
                  style={{
                    width: sizeHelper.calWp(40),
                    height: sizeHelper.calWp(40),
                  }}
                  source={images.streak}
                />
                <CustomText
                  text={"Streak: 3 Days"}
                  fontFam={fonts.Inter_SemiBold}
                  fontWeight="600"
                  // size={2}
                  color={theme.colors.black}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.user_point_btn}>
                <Image
                  style={{
                    width: sizeHelper.calWp(40),
                    height: sizeHelper.calWp(40),
                  }}
                  source={images.reward}
                />
                <CustomText
                  text={"Points:  120 "}
                  fontFam={fonts.Inter_SemiBold}
                  fontWeight="600"
                  // size={2}
                  color={theme.colors.black}
                />
              </TouchableOpacity>
            </View>
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
              gap: sizeHelper.calHp(30),
            }}
          >
            <View style={appStyles.rowjustify}>
              <CustomText
                text={"Today’s Tasks"}
                fontFam={fonts.Inter_SemiBold}
                fontWeight="600"
                size={23}
              />
              <CustomText
                text={"See All"}
                textDecorationLine="underline"
                fontFam={fonts.Inter_SemiBold}
                fontWeight="600"
                // size={23}
              />
            </View>
            <View
              style={{
                width: "100%",
                backgroundColor: theme.colors.black,
                paddingHorizontal: sizeHelper.calWp(20),
                paddingVertical: sizeHelper.calHp(40),
                borderRadius: sizeHelper.calWp(40),
                gap: sizeHelper.calHp(30),
              }}
            >
              <TodayTaskContainer
                icon={icons.volleyball}
                title={"Ball Control Drills"}
                time={"(5:00 PM – 6:00 PM)"}
                reward={"+15"}
              />
              <TodayTaskContainer
                icon={icons.book_alt}
                isMarkDone
                title={"Study Biology Notes"}
                time={"7:00 PM – 7:45 PM"}
                reward={"+10"}
                btnTxtColor={theme.colors.black}
                btnBgColor={theme.colors.Input_field}
                btnTitle="Mark Done"
              />
            </View>
            <View style={{ gap: sizeHelper.calHp(20) }}>
              <CustomText
                text={"Current Tier"}
                fontFam={fonts.Inter_SemiBold}
                fontWeight="600"
                size={23}
              />

              <TouchableOpacity
                onPress={() => navigation.navigate("TierProgress")}
                style={{
                  width: "100%",
                  backgroundColor: theme.colors.sky_blue,
                  paddingHorizontal: sizeHelper.calWp(20),
                  paddingVertical: sizeHelper.calHp(30),
                  borderRadius: sizeHelper.calWp(40),
                  gap: sizeHelper.calHp(30),
                }}
              >
                <CurrentTier />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                height: sizeHelper.calHp(490),
              }}
            >
              <WeekProgress />
              <View style={{ width: "49%", gap: sizeHelper.calHp(10) }}>
                <RewardAvailable />
                <NotesContainer />
              </View>
            </View>
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
export default StudentHome;

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
