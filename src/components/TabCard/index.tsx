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

const TabCard = ({ selectedTab, item, onPress }: any) => {
  console.log("ckdbckd", selectedTab);
  const navigation: any = useNavigation();
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor:
            selectedTab == item?.id ? theme.colors.primary : "transparent",
          flexDirection: "row",
          alignItems: "center",
          gap: sizeHelper.calWp(20),
          height: "100%",
          width: "33%",
          justifyContent: "center",
          borderRadius: 999,
        }}
      >
        <Image
          style={{
            width: sizeHelper.calWp(30),
            height: sizeHelper.calWp(30),
            tintColor:
              selectedTab == item?.id
                ? theme.colors.white
                : theme.colors.black + "50",
          }}
          source={item.icon}
        />
        <CustomText
          text={item?.title}
          fontFam={fonts.Inter_Medium}
          color={
            selectedTab == item?.id
              ? theme.colors.white
              : theme.colors.black + "50"
          }
          fontWeight="600"
          size={23}
        />
      </TouchableOpacity>
      
    </>
  );
};
export default TabCard;

const styles = StyleSheet.create({});
