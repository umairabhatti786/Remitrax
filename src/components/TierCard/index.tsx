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
import { fonts } from "../../utils/Themes/fonts";
import { theme } from "../../utils/Themes";
import icons from "../../utils/Constants/icons";
import CustomText from "../Text";
import { appStyles } from "../../utils/GlobalStyles";
import images from "../../utils/Constants/images";
import { useNavigation } from "@react-navigation/native";
import AnimatedProgressBar from "../AnimatedProgressBar";

const TierCard = ({
  title,
  textColor,
  tintColor,
  isNotification,
  backgroundColor,
  icon,
  label,
  des,
  progress,
  progressBgColor,
  progressColor,
  descriptionColor
}: any) => {
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          width: "100%",
          backgroundColor: backgroundColor || theme.colors.sky_blue,
          paddingHorizontal: sizeHelper.calWp(20),
          paddingVertical: sizeHelper.calHp(30),
          borderRadius: sizeHelper.calWp(40),
          gap: sizeHelper.calHp(30),
        }}
      >
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
              <Image style={{ width: "70%", height: "70%" }} source={icon} />
            </View>
          </View>
          <View style={{ gap: sizeHelper.calHp(15), flex: 1 }}>
            <View style={appStyles.rowjustify}>
              <CustomText
                text={title}
                color={textColor}
                fontFam={fonts.Inter_Medium}
                fontWeight="600"
              />
              <CustomText
                text={label}
                color={textColor}
                fontFam={fonts.Inter_Medium}
                fontWeight="600"
              />
            </View>
            <AnimatedProgressBar
              backgroundColor={progressBgColor}
              color={progressColor}
              // width={"83%"}
              progress={progress}
            />
            <CustomText
              text={des}
              color={descriptionColor ||theme.colors.white + "70"}
              fontFam={fonts.Inter_Medium}
              fontWeight="600"
            />
          </View>
        </View>
      </View>
    </>
  );
};
export default TierCard;

const styles = StyleSheet.create({});
