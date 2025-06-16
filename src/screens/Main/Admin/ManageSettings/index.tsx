import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import sizeHelper from "../../../../utils/Helpers";
import { theme } from "../../../../utils/Themes";
import { appStyles } from "../../../../utils/GlobalStyles";
import CustomText from "../../../../components/Text";
import icons from "../../../../utils/Constants/icons";
import images from "../../../../utils/Constants/images";
import { fonts } from "../../../../utils/Themes/fonts";
import TabHeader from "../../../../components/TabHeader";
import ScreenLayout from "../../../../components/ScreenLayout";

const ManageSettings = ({ navigation }: any) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const DetailCard = ({
    title,
    icon,
    color,
    border,
    paddingBottom,
    onPress,
  }: any) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          gap: sizeHelper.calHp(20),
          borderBottomWidth: border || 1,
          borderBottomColor: theme.colors.black + "20",
        }}
      >
        <View
          style={{
            ...appStyles.rowjustify,
            paddingBottom: paddingBottom || sizeHelper.calHp(25),
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
      <ScreenLayout
        style={{
          flex: 1,
          paddingHorizontal: sizeHelper.calWp(40),
          gap: sizeHelper.calWp(30),
        }}
      >
        <TabHeader title={"Manage Users"} isNotification />

        <View style={{ paddingTop: sizeHelper.calHp(20) }}>
          <View
            style={{
              padding: sizeHelper.calWp(40),

              borderRadius: sizeHelper.calWp(30),
              borderWidth: 1,
              borderColor: theme.colors.black + "30",
              gap: sizeHelper.calWp(30),
            }}
          >
            <DetailCard
              icon={icons.info}
              title={"Manage Info"}
              onPress={() => navigation.navigate("ManageInformation")}
            />
            <DetailCard
              onPress={() => navigation.navigate("ChangePassword")}
              icon={icons.shield}
              title={"Change Password"}
            />
            <DetailCard
              onPress={() => navigation.navigate("NotificationSetting")}
              title={"Notifications"}
              icon={icons.notification_bell}
              border={-1}
              paddingBottom={-1}
            />
          </View>
        </View>
      </ScreenLayout>
    </>
  );
};
export default ManageSettings;

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
