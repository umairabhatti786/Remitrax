import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";
import sizeHelper from "../../utils/Helpers";
import { fonts } from "../../utils/Themes/fonts";
import { theme } from "../../utils/Themes";
import icons from "../../utils/Constants/icons";

type Props = {
  placeholder?: string;
  navigation?: any;
  value?: any;
  onPressClose?: any;
  backgroundColor?: string;
  width?: any;
  onChangeText?: (text: any) => void;
  onFocus?: () => void;
  onFilter?: () => void;
  onSubmitEditing?: () => void;
  isfilter?: any;
  isAdd?: any;
  onAdd?: any;
  ContainerStyle?: StyleProp<ViewStyle>;
  inputRef?: any;
};

const CustomSearch = ({
  placeholder,
  onChangeText,
  value,
  backgroundColor,
  width,
  onFocus,
  onFilter,
  onSubmitEditing,
  isfilter,
  isAdd,
  onAdd,
  ContainerStyle,
  inputRef,
}: Props) => {
  return (
    <>
      <View
        style={[
          {
            ...styles.searchContainer,


            backgroundColor: backgroundColor || theme.colors.Input_field,
            height: sizeHelper.calHp(80),
            gap: sizeHelper.calWp(20),
            borderWidth: 1,
            borderColor: theme.colors.black + "20",
          },
          ContainerStyle as StyleProp<ViewStyle>,
        ]}
      >
        <Image
          source={icons.search}
          resizeMode="contain"
          style={{
            width: sizeHelper.calWp(40),
            height: sizeHelper.calWp(40),
          }}
        />
        <TextInput
          allowFontScaling={false} // Disable font scaling
          style={{ ...styles.inputContainer, color: theme.colors.black }}
          placeholder={placeholder}
          value={value}
          ref={inputRef}
          onSubmitEditing={onSubmitEditing}
          onChangeText={onChangeText}
          onFocus={onFocus}
          placeholderTextColor={theme.colors.gray}
        />
      </View>
    </>
  );
};
export default CustomSearch;

const styles = StyleSheet.create({
  img: { width: 23, height: 23 },

  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: sizeHelper.calWp(25),
    borderRadius: sizeHelper.calWp(20),
  },
  inputContainer: {
    height: "100%",
    flex: 1,
    fontSize: sizeHelper.calHp(22),
    fontFamily: fonts.Inter_Regular,
    padding: 0,
    // backgroundColor: 'red',
  },
});
