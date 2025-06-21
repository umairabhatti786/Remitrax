import { Image, TouchableOpacity, View, TextInput } from "react-native";
import CustomText from "../Text";
import { InputProps } from "../../utils/Types";
import { theme } from "../../utils/Themes";
import { fonts } from "../../utils/Themes/fonts";
import sizeHelper from "../../utils/Helpers";
import { useState } from "react";
import images from "../../utils/Constants/images";
import { appStyles } from "../../utils/GlobalStyles";
import icons from "../../utils/Constants/icons";

const CountryDropdown = ({
  props,
  height,
  width,
  borderRadius,
  backgroundColor,
  label,
  leftSource,
  onRightSource,
  borderColor,
  value,
  placeholder,
}: any) => {
  return (
    <View
      style={{
        ...props,
        width: width || "100%",
      }}
    >
      {label && (
        <View
          style={{
            marginBottom: sizeHelper.calHp(25),
          }}
        >
          <CustomText
            text={label}
            fontWeight="700"
            size={23}
            fontFam={fonts.PlusJakartaSans_Bold}
          />
        </View>
      )}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",

          paddingHorizontal: sizeHelper.calWp(25),
          height: sizeHelper.calHp(height || 80),
          alignItems: "center",
          borderColor: borderColor || theme.colors.input_field_stroke,
          gap: sizeHelper.calWp(10),
          borderWidth: 1,
          borderRadius: borderRadius || sizeHelper.calWp(15),
          backgroundColor: backgroundColor || theme.colors.Input_field,
        }}
      >
        {
          value?.name?(
            <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
            <Image
              source={leftSource}
              style={{
                width: sizeHelper.calWp(40),
                height: sizeHelper.calWp(40),
                borderRadius: sizeHelper.calWp(40),
              }}
              resizeMode={"contain"}
            />
  
            <CustomText
              text={value?.name}
              fontWeight="700"
              size={23}
              fontFam={fonts.PlusJakartaSans_Bold}
            />
          </View>

          ):(
            <CustomText
              text={placeholder}
              color={theme.colors.gray}
              size={21}
            />
          )
        }
      

        <TouchableOpacity
          onPress={onRightSource}
          disabled={!onRightSource}
          activeOpacity={0.3}
        >
          <Image
            source={icons.down_arrow}
            style={{
              width: sizeHelper.calWp(25),
              height: sizeHelper.calWp(25),
            }}
            resizeMode={"contain"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CountryDropdown;
