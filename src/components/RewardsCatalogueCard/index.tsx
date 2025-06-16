import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";
import sizeHelper, { screenWidth, screentHeight } from "../../utils/Helpers";
import { theme } from "../../utils/Themes";
import CustomText from "../Text";
import { appStyles } from "../../utils/GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../Button";
import SwitchToggle from "react-native-switch-toggle";
import icons from "../../utils/Constants/icons";

const RewardsCatalogueCard = ({
  selectedTab,
  item,
  onPress,
  onMarkDone,
  onInComplete,
  onVerifyTask,
  isEdit,
  onIsEdit,
  onSwitch,
}: any) => {
  console.log("ckdbckd", selectedTab);
  const navigation: any = useNavigation();
  return (
    <>
      <View
        style={{
          backgroundColor: item?.backgroundColor,
          borderRadius: sizeHelper.calWp(20),
          padding: sizeHelper.calWp(20),
          gap: sizeHelper.calHp(20),
        }}
      >
        <View style={appStyles.rowjustify}>
          <View style={{ ...appStyles.row, gap: sizeHelper.calWp(15) }}>
            <View
              style={{
                width: sizeHelper.calWp(95),
                height: sizeHelper.calWp(95),
                backgroundColor: theme.colors.Input_field,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: sizeHelper.calWp(95),
              }}
            >
              <Image
                style={{
                  width: "50%",
                  height: "50%",
                  tintColor: theme.colors.black,
                }}
                source={item?.icon}
              />
            </View>

            <View style={{ gap: sizeHelper.calHp(5) }}>
              <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
                <CustomText
                  text={item?.name}
                  // color={title_color ||theme.colors.white}
                  size={21}
                />
                <CustomText
                  text={item?.active ? "Active" : "Inactive"}
                  color={
                    item?.active ? theme.colors.primary : theme.colors.warning
                  }
                  size={21}
                />
              </View>

              <CustomText
                text={item?.coupon}
                color={theme.colors.black + "80"}
                fontWeight="400"
              />
              <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
                <CustomText
                  text={"Value"}
                  color={theme.colors.black + "80"}
                  fontWeight="400"
                />
                <CustomText
                  text={item?.value}
                  // color={ theme.colors.black+"80"}
                  // fontWeight="400"
                />
              </View>
            </View>
          </View>
          <View>
            <SwitchToggle
              switchOn={item?.isEnable}
              onPress={onSwitch}
              circleColorOff="#ffff"
              circleColorOn="#ffff"
              backgroundColorOn={theme.colors.dark_highlight}
              backgroundColorOff="#F2F2F2"
              containerStyle={styles.containerStyle}
              circleStyle={styles.circleStyle}
            />
            <Image
              style={item?.isEnable ? styles?.left_icon : styles.right_icon}
              source={item?.isEnable ? icons?.tick : icons.cross}
            />
          </View>
        </View>

        <View
          style={{
            ...appStyles.rowjustify,
            marginTop: sizeHelper.calHp(10),
          }}
        >
          <CustomButton
            bgColor={theme.colors.white}
            borderWidth={1}
            width={"48%"}
            height={70}
            size={23}
            onPress={onInComplete}
            borderColor={theme.colors.warning}
            text="Remove Reward"
            borderRadius={15}
            textColor={theme.colors.warning}
          />
          <CustomButton
            bgColor={theme.colors.white}
            borderWidth={1}
            width={"48%"}
            borderRadius={15}
            height={70}
            size={23}
            borderColor={theme.colors.primary}
            onPress={onVerifyTask}
            text="Edit Reward Info"
            textColor={theme.colors.primary}
          />
        </View>
      </View>
    </>
  );
};
export default RewardsCatalogueCard;

const styles = StyleSheet.create({
  containerStyle: {
    width: sizeHelper.calWp(115),
    height: sizeHelper.calHp(50),
    borderRadius: 25,
    padding: 5,
  },
  right_icon: {
    width: sizeHelper.calWp(22),
    height: sizeHelper.calWp(22),
    position: "absolute",
    right: sizeHelper.calWp(20),
    tintColor: theme.colors.warning,
    top: sizeHelper.calHp(15),
  },
  left_icon: {
    width: sizeHelper.calWp(22),
    height: sizeHelper.calWp(22),
    position: "absolute",
    left: sizeHelper.calWp(20),
    tintColor: theme.colors.white,
    top: sizeHelper.calHp(15),
  },

  circleStyle: {
    width: 25,
    height: 25,
    borderRadius: 999,
  },
  label: {
    marginTop: 10,
    fontSize: 18,
  },
});
