import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import { theme } from "../../../utils/Themes";
import sizeHelper from "../../../utils/Helpers";
import icons from "../../../utils/Constants/icons";
import { appStyles } from "../../../utils/GlobalStyles";
import CustomText from "../../../components/Text";
import CustomHeader from "../../../components/Header/inde";
import CustomInput from "../../../components/Input";
import CustomButton from "../../../components/Button";

const ChangePassword = ({ navigation }: any) => {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const [newPasssword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
      <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <View
          style={{
            width: "100%",
            backgroundColor: theme.colors.primary,
            paddingTop: sizeHelper.calHp(100),
            paddingHorizontal: sizeHelper.calWp(40),
            paddingBottom: sizeHelper.calHp(30),
            borderBottomLeftRadius: sizeHelper.calWp(80),
            borderBottomRightRadius: sizeHelper.calWp(80),
          }}
        >
          <CustomHeader
            title={"Change Password"}
            textColor={theme.colors.white}
            tintColor={theme.colors.placeholder + "80"}
          />
        </View>
        <View
          style={{
            paddingVertical: sizeHelper.calHp(50),
            paddingHorizontal: sizeHelper.calWp(30),
            flex: 1,
          }}
        >
          <View style={{ gap: sizeHelper.calHp(30), flex: 1 }}>
            <CustomInput
              label={"New Password"}
              value={newPasssword}
              rightSource={showPassword ? icons.eye : icons.eye}
              secureTextEntry={showPassword}
              rightIconPress={() => setShowPassword(!showPassword)}
              onChangeText={(txt: string) => setNewPassword(txt)}
            />
            <CustomInput
              label={"Confirm New Password"}
              value={confirmPassword}
              rightSource={showConfirmPassword ? icons.eye : icons.eye}
              secureTextEntry={showConfirmPassword}
              rightIconPress={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              onChangeText={(txt: string) => setConfirmPassword(txt)}
            />
          </View>
          <CustomButton
            text="Save Changes"
            style={{ marginTop: sizeHelper.calHp(80) }}
            // onPress={onLogin}
            onPress={() => navigation.navigate("StudentBottomTab")}
            width={"100%"}
          >
            <Image
              source={icons.arrow_next}
              style={{
                width: sizeHelper.calWp(40),
                height: sizeHelper.calWp(40),
              }}
            />
          </CustomButton>
        </View>
      </View>
    </>
  );
};
export default ChangePassword;

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
