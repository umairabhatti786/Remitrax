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

const ChatContainer = ({ item }: any) => {
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{ 
          flexDirection: item?.from?"row-reverse":"row",
          gap: sizeHelper.calWp(20),
          
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: sizeHelper.calWp(110),
            height: sizeHelper.calWp(110),
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:  item?.from?"#FFC7C750": theme.colors.Input_field,
            borderRadius: sizeHelper.calWp(110),
            overflow: "hidden",
          }}
        >
          <Image
            style={{
              width: "100%",
              height: "100%",
            }}
            source={item?.img}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View 
        style={{
                    maxWidth:"80%"

        }}
        >
          <View
            style={{
              paddingHorizontal: sizeHelper.calWp(20),
              backgroundColor: item?.from?"#C0F2DA": theme.colors.Input_field,
              borderRadius: sizeHelper.calHp(15),
              justifyContent: "center",
              paddingVertical: sizeHelper.calHp(18),
              marginTop: sizeHelper.calHp(50),
            }}
          >
            <CustomText
              text={item?.message}
              color={theme.colors.black}
              // size={25}
            />
          </View>
          {
            item?.from?(
              <Image
              style={{
                width: sizeHelper.calWp(55),
                height: sizeHelper.calWp(55),
                position: "absolute",
                top: sizeHelper.calHp(41),
                right:sizeHelper.calWp(-15),
              //   resizeMode:"contain"
              }}
              source={icons.from_msg_curve}
            />

            ):(
              <Image
              style={{
                width: sizeHelper.calWp(55),
                height: sizeHelper.calWp(55),
                position: "absolute",
                top: sizeHelper.calHp(41),
                left:sizeHelper.calWp(-15),
              //   resizeMode:"contain"
              }}
              source={icons.to_msg_curve}
            />
              
            )
          }
          
         
        </View>
      </View>
    </>
  );
};
export default ChatContainer;

const styles = StyleSheet.create({});
