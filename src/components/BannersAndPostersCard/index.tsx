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

const BannersAndPostersCard = ({ item, index, color, onPress,onIsActive }: any) => {
  const navigation: any = useNavigation();
  // date: "May 20 – May 25",
  // gameTime_off: "15% Off Gametime",
  // tier: "Silver Tier Only",
  // show_on: "Home Screen",
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={{
          flexDirection:"row",

         
          backgroundColor: item?.backgroundColor,
          justifyContent:"space-between",
          padding: sizeHelper.calWp(20),
          borderRadius: sizeHelper.calWp(30),
        }}
      >
        <View
          style={{ ...appStyles.row, gap: sizeHelper.calWp(10), width: "70%",}}
        >
          <Image
            style={{
              width: sizeHelper.calWp(60),
              height: sizeHelper.calWp(60),
            }}
            source={item?.icon}
            resizeMode="contain"
          />
          <View style={{ gap: sizeHelper.calHp(10) }}>
            <CustomText
              size={25}
              text={item?.name}
              fontWeight="600"
              color={theme.colors.black}
            />
            <View
              style={{
                ...appStyles.row,
                gap: sizeHelper.calWp(10),
              }}
            >
              <CustomText
                size={19}
                text={item?.gameTime_off}
                color={theme.colors.black}
                fontWeight="600"
              />
              <CustomText
                size={19}
                text={`(${item?.tier})`}
                fontFam="400"
                color={theme.colors.black + "80"}
              />
            </View>
            <CustomText
              size={19}
              text={item?.date}
              color={theme.colors.black}
            />

            <View
              style={{
                ...appStyles.row,
                gap: sizeHelper.calWp(20),
              }}
            >
              <CustomText
                size={21}
                text={"Shown On:"}
                color={theme.colors.black + "80"}
                fontWeight="400"
              />
              <CustomText text={item?.show_on} color={theme.colors.black} />
            </View>
          </View>
        </View>
        <CustomButton
            height={55}
            bgColor={theme.colors.dark_highlight+"30"}
            borderColor={theme.colors.warning}
            borderRadius={999}
            size={18}
            paddingHorizontal={sizeHelper.calWp(45)}
            textColor={theme.colors.dark_highlight}
            onPress={onIsActive}
            // width={'48%'}
            text={'Active'}
            // onPress={onCancel}
          />

      
      </TouchableOpacity>
    </>
  );
};
export default BannersAndPostersCard;

const styles = StyleSheet.create({});
