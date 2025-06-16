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

const UserCard = ({ item, index, color,onPress, }: any) => {
  const navigation: any = useNavigation();
  return (
    <>
      <TouchableOpacity
      onPress={onPress}
        style={{
          ...appStyles.rowjustify,
          backgroundColor: item?.backgroundColor,
          padding: sizeHelper.calWp(20),
          borderRadius: sizeHelper.calWp(20),
        }}
      >
        <View style={{ ...appStyles.row, gap: sizeHelper.calWp(30) }}>
          <Image
            style={{
              width: sizeHelper.calWp(110),
              height: sizeHelper.calWp(110),
            }}
            source={images.user_img}
          />
          <View style={{ gap: sizeHelper.calHp(10) }}>
            <CustomText
              size={22}
              text={item?.name}
              color={theme.colors.black}
            />
            <CustomText
              size={21}
              text={ `(${item?.type})`}
              color={theme.colors.black}
              fontWeight="400"
            />
            <View
              style={{
                ...appStyles.row,
                gap: sizeHelper.calWp(10),
                marginTop: sizeHelper.calHp(10),
              }}
            >
              <CustomText
                size={21}
                text={item?.task_completed?`Tasks Completed`:item?.assign_students?"Assign Students":item?.linked_child?"Linked Child":""}
                color={theme.colors.black + "70"}
                fontWeight="400"
              />
              <CustomText
                size={21}
                text={item?.task_completed?item?.task_completed:item?.assign_students?item?.assign_students:item?.linked_child?item?.linked_child:""}
                textDecorationLine={item?.linked_child?"underline":"none"}
                color={item?.linked_child?theme.colors.primary: theme.colors.black}

                fontWeight="400"
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
export default UserCard;

const styles = StyleSheet.create({});
