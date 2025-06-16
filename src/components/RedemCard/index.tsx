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

const RedemCard = ({ item, index,color }: any) => {
  const navigation: any = useNavigation();
  return (
    <>
      <View style={{ gap: sizeHelper.calHp(30) }}>
        <View
          style={{
            width: "90%",
            height: sizeHelper.calHp(1),
            backgroundColor:
              index > 0 ?color+ "40" || theme.colors.white + "40" : "transoarent",
            alignSelf: "center",
          }}
        />
        <View style={{ ...appStyles.row, gap: sizeHelper.calWp(30) }}>
          <Image
            style={{
              width: sizeHelper.calWp(40),
              height: sizeHelper.calWp(40),
              alignSelf: "center",
              tintColor:color||theme.colors.white
            }}
            source={images.redem}
          />
          <CustomText 
          size={22}
          text={`${item?.name} - ${item?.date}`} color={color||theme.colors.white} />
        </View>
      </View>
    </>
  );
};
export default RedemCard;

const styles = StyleSheet.create({});
