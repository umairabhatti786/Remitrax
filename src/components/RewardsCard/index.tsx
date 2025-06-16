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
import CustomButton from "../Button";

import { appStyles } from "../../utils/GlobalStyles";
import images from "../../utils/Constants/images";
import { useNavigation } from "@react-navigation/native";
import AnimatedProgressBar from "../AnimatedProgressBar";

const RewardsCard = ({
  title,
  label,
  reward,
  icon,
  iconBgColor,
  btn_title,
  btn_img,
  title_color,
  label_color,
  isBtn,
  onRedeem
}: any) => {
  const navigation = useNavigation();
  return (
    <>
      <View style={{ ...appStyles.rowjustify }}>
        <View style={{ ...appStyles.row, gap: sizeHelper.calWp(15) }}>
          <View>
            <View
              style={{
                width: sizeHelper.calWp(90),
                height: sizeHelper.calWp(90),
                backgroundColor: iconBgColor || theme.colors.Input_field,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: sizeHelper.calWp(90),
              }}
            >
              <Image
                style={{
                  width: sizeHelper.calWp(65),
                  height: sizeHelper.calWp(90),
                  position: "absolute",
                  top: sizeHelper.calHp(-8),
                  right: sizeHelper.calWp(5),
                }}
                source={icon}
              />
            </View>
          </View>

          <View style={{ gap: sizeHelper.calHp(10) }}>
            <CustomText
              text={title}
              fontFam={fonts.Inter_SemiBold}
              color={title_color ||theme.colors.white}
              fontWeight="600"
              size={23}
            />
            <CustomText
              text={label}
              fontFam={fonts.Inter_SemiBold}
              color={label_color|| "#FFFFFF80"}
              fontWeight="600"
            />
          </View>
        </View>
        {
          isBtn&&(
            <TouchableOpacity
            onPress={onRedeem}
            style={{
              backgroundColor: theme.colors.white,
              flexDirection: "row",
              alignItems: "center",
              gap: sizeHelper.calWp(20),
              height: sizeHelper.calHp(57),
              width: "32%",
              justifyContent: "center",
              borderRadius: sizeHelper.calWp(20),
            }}
          >
            {
              btn_img&&(
                <Image
                style={{
                  width: sizeHelper.calWp(30),
                  height: sizeHelper.calWp(30),
                }}
                source={btn_img}
              />
  
              )
            }
          
            <CustomText
              text={btn_title}
        
              // size={23}
            />
          </TouchableOpacity>

          )
        }
      
      </View>
    </>
  );
};
export default RewardsCard;

const styles = StyleSheet.create({});
