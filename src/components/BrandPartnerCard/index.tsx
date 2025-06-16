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
  
  const BrandPartnerCard = ({ item, index, color,onPress, }: any) => {
    const navigation: any = useNavigation();
    return (
      <>
        <TouchableOpacity
        onPress={onPress}
          style={{
            ...appStyles.row,
            backgroundColor: item?.backgroundColor,
            padding: sizeHelper.calWp(20),
            borderRadius: sizeHelper.calWp(20),
          }}
        >
          <View style={{ ...appStyles.row, gap: sizeHelper.calWp(30),width:"90%" }}>
            <Image
              style={{
                width: sizeHelper.calWp(90),
                height: sizeHelper.calWp(90),
              }}
              source={item?.icon}
              resizeMode="contain"
            />
            <View style={{ gap: sizeHelper.calHp(10) }}>
              <CustomText
                size={24}
                text={item?.name}
                fontWeight="600"
                color={theme.colors.black}
              />
              <View
                style={{
                  ...appStyles.row,
                  gap: sizeHelper.calWp(60),
                }}
              >
                <CustomText
                  size={21}
                  text={"Category"}
                  color={theme.colors.black + "70"}
                  fontWeight="400"
                />
                <CustomText
                //   size={21}
                  text={item?.category}
                  color={theme.colors.black}
                />
              </View>
              <View
                style={{
                  ...appStyles.row,
                  gap: sizeHelper.calWp(60),
                }}
              >
                <CustomText
                  size={21}
                  text={"Active Rewards"}
                  color={theme.colors.black + "70"}
                  fontWeight="400"
                />
                <CustomText
                //   size={21}
                  text={item?.active_rewards}
                  color={theme.colors.black}
                />
              </View> 
               <View
                style={{
                  ...appStyles.row,
                  gap: sizeHelper.calWp(60),
                }}
              >
                <CustomText
                  size={21}
                  text={"Redemptions"}
                  color={theme.colors.black + "70"}
                  fontWeight="400"
                />
                <CustomText
                //   size={21}
                  text={item?.redemptions}
                  color={theme.colors.black}
                />
              </View>
              
              
            </View>
          </View>
  
          <Image
            style={{
              width: sizeHelper.calWp(40),
              height: sizeHelper.calWp(40),
            }}
            source={icons.nexr_arrow}
          />
        </TouchableOpacity>
      </>
    );
  };
  export default BrandPartnerCard;
  
  const styles = StyleSheet.create({});
  