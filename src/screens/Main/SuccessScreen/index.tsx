import React, { useEffect } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import sizeHelper, { screenWidth, screentHeight } from "../../../utils/Helpers";
import images from "../../../utils/Constants/images";
import { theme } from "../../../utils/Themes";
import ScreenLayout from "../../../components/ScreenLayout";
import CustomButton from "../../../components/Button";
import CustomText from "../../../components/Text";
import { fonts } from "../../../utils/Themes/fonts";
import icons from "../../../utils/Constants/icons";
import { appStyles } from "../../../utils/GlobalStyles";
import CustomInput from "../../../components/Input";
import SwipeButton from "../../../components/SwipeButton";

const SuccessModal = ({ icon, title, des }: any) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.background,
        gap: sizeHelper.calHp(30),
        flex:1
      }}
    >
      <Image
        style={{ width: sizeHelper.calWp(200), height: sizeHelper.calWp(200) }}
        source={icon}
      />
      <CustomText
        text={title}
        fontFam={fonts.Inter_Bold}
        color={theme.colors.white}
        fontWeight="700"
        size={25}
      />
      <CustomText text={des} size={21} />
    </View>
  );
};

export default SuccessModal;

const styles = StyleSheet.create({
  basket_img: {
    width: screenWidth,
    height: screentHeight / 1.6,
    position: "absolute",
    bottom: sizeHelper.calHp(-170),
    left: sizeHelper.calWp(-100),
    resizeMode: "contain",
  },
  fruits_bag: {
    width: screenWidth,
    height: sizeHelper.calHp(600),
    resizeMode: "contain",
  },

  basket_circle: {
    width: sizeHelper.calWp(590),
    height: sizeHelper.calWp(590),
    borderRadius: sizeHelper.calWp(590),
    backgroundColor: "#B7EFC5",
  },
});
