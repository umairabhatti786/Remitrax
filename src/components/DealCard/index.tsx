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
  
  const DealCard = ({ title, textColor, tintColor, isNotification }: any) => {
    const navigation = useNavigation();
    return (
      <>
      <View
              style={{
                width: "100%",
                height: sizeHelper.calHp(150),
                backgroundColor: "#FFC7C770",
                borderRadius: sizeHelper.calWp(40),
                overflow: "hidden",
              }}
            >
              <Image
                style={{
                  width: "50%",
                  height: "100%",
                  alignSelf: "flex-end",
                  opacity: 0.3,
                  marginRight: sizeHelper.calWp(30),
                  marginBottom: sizeHelper.calHp(-100),
                }}
                source={images.shirt}
                resizeMode="center"
              />
              <View
                style={{
                  position: "absolute",
                  padding: sizeHelper.calHp(40),
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                  gap: sizeHelper.calHp(40),
                  flexDirection:"row",
                }}
              >
                <Image
                  style={{
                    width: sizeHelper.calWp(120),
                    height: "200%",
                  }}
                  source={images.shirt}
                //   resizeMode="contain"
                  />

                  <View style={{gap:sizeHelper.calHp(10)}}>

 <CustomText
                  text={"New Deal! "}
                  fontWeight="700"
                  fontFam={fonts.Inter_Bold}
                  size={27}
                />
                <View style={{ ...appStyles.row, gap: sizeHelper.calWp(7) }}>
                  <CustomText
                    text={"15%"}
                    fontWeight="600"
                    color={theme.colors.primary}
                    fontFam={fonts.Inter_Medium}
                    size={22}
                  />
                  <CustomText text={"Off Nike for Silver Users"} size={22} />
                </View>
               
                  </View>
               

               
              </View>
            </View>
      </>
    );
  };
  export default DealCard;
  
  const styles = StyleSheet.create({});
  