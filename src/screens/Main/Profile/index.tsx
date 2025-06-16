import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import { theme } from "../../../utils/Themes";
import sizeHelper from "../../../utils/Helpers";
import icons from "../../../utils/Constants/icons";
import images from "../../../utils/Constants/images";
import { appStyles } from "../../../utils/GlobalStyles";
import CustomText from "../../../components/Text";
import { fonts } from "../../../utils/Themes/fonts";

const ProfileScreen = ({ navigation }: any) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const DetailCard = ({ title, icon, color,border,paddingBottom,onPress }: any) => {
    return (
      <TouchableOpacity
      onPress={onPress}
        style={{
          gap: sizeHelper.calHp(20),
          borderBottomWidth:border||  1,
          borderBottomColor: theme.colors.black + "20",
        }}
      >
        <View
          style={{
            ...appStyles.rowjustify,
            paddingBottom:paddingBottom || sizeHelper.calHp(25),
          }}
        >
          <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
            <Image
              style={{
                width: sizeHelper.calWp(35),
                height: sizeHelper.calWp(35),
                tintColor: color || theme.colors.primary,
              }}
              source={icon}
              resizeMode="contain"
            />
            <CustomText color={color} text={title} size={22} />
          </View>
          <Image
            style={{
              width: sizeHelper.calWp(35),
              height: sizeHelper.calWp(35),
            }}
            source={icons.nexr_arrow}
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <View
          style={{
            width: "100%",
            backgroundColor: theme.colors.primary,
            paddingTop: sizeHelper.calHp(Platform.OS=="ios"? 100:20),
            paddingHorizontal: sizeHelper.calWp(40),
            paddingBottom: sizeHelper.calHp(50),
            borderBottomLeftRadius: sizeHelper.calWp(150),
            borderBottomRightRadius: sizeHelper.calWp(150),
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
                  tintColor: theme.colors.placeholder + "80",
                }}
                source={icons.arrow_back}
              />
            </TouchableOpacity>

            <Image
              style={{
                width: sizeHelper.calWp(240),
                height: sizeHelper.calWp(240),
              }}
              source={images.user_img}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate("EditProfileScreen")}
            >
              <Image
                style={{
                  width: sizeHelper.calWp(40),
                  height: sizeHelper.calWp(40),
                  marginTop: sizeHelper.calHp(10),
                }}
                source={icons.edit}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignItems: "center",
              paddingTop: sizeHelper.calHp(20),
            }}
          >
            <CustomText
              text={"Anas Ali"}
              fontFam={fonts.Inter_SemiBold}
              fontWeight="700"
              size={29}
              color={theme.colors.white}
            />

            <View
              style={{
                ...appStyles.row,
                gap: sizeHelper.calWp(10),
                position: "absolute",
                bottom: sizeHelper.calHp(-90),
                alignSelf: "center",
                left: "10%",
              }}
            >
              <TouchableOpacity style={styles.user_point_btn}>
                <Image
                  style={{
                    width: sizeHelper.calWp(35),
                    height: sizeHelper.calWp(35),
                  }}
                  source={images.streak}
                />
                <CustomText
                  text={"Streak: 3 Days"}
                  fontFam={fonts.Inter_SemiBold}
                  fontWeight="600"
                  // size={2}
                  size={19}
                  color={theme.colors.black}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.user_point_btn}>
                <Image
                  style={{
                    width: sizeHelper.calWp(35),
                    height: sizeHelper.calWp(35),
                  }}
                  source={images.reward}
                />
                <CustomText
                  text={"Points:  120 "}
                  fontFam={fonts.Inter_SemiBold}
                  fontWeight="600"
                  size={19}
                  color={theme.colors.black}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ paddingTop: sizeHelper.calHp(80) }}>
          <View
            style={{
              marginHorizontal: sizeHelper.calWp(40),
              padding: sizeHelper.calWp(40),

              borderRadius: sizeHelper.calWp(30),
              borderWidth: 1,
              borderColor: theme.colors.black + "30",
              gap: sizeHelper.calWp(30),
            }}
          >
            <DetailCard
              icon={icons.notification_bell}
              title={"Notifications"}
              onPress={()=>navigation.navigate("NotificationSetting")}

            />
            <DetailCard 
                          onPress={()=>navigation.navigate("ChangePassword")}

            icon={icons.shield} title={"Change Password"} />
            <DetailCard
              color={theme.colors.warning}
              title={"Logout"}
              icon={icons.logout}
              border={-1}
              paddingBottom={-1}
            />
          </View>
        </View>
      </View>
    </>
  );
};
export default ProfileScreen;

const styles = StyleSheet.create({
  user_point_btn: {
    width: "43%",
    paddingVertical: sizeHelper.calHp(20),
    backgroundColor: theme.colors.white,
    borderRadius: 999,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: sizeHelper.calWp(10),
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowColor: theme.colors.black + "30",
    shadowRadius: 2,
    elevation: 5,
  },
});
