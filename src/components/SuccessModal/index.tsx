import { Image, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import CustomText from "../Text";
import { fonts } from "../../utils/Themes/fonts";
import { theme } from "../../utils/Themes";
import { appStyles } from "../../utils/GlobalStyles";
import CustomButton from "../Button";
import sizeHelper, { screenWidth } from "../../utils/Helpers";
import icons from "../../utils/Constants/icons";

const SuccessModal = ({
  modalVisible,
  setModalVisible,
  icon,
  des,
  title,
  iconSize,
  isShopNow,
  onShopNow
}: any) => {
  return (
    <View
   
      style={styles.Container}
    >
      <Image
        style={{ width: sizeHelper.calWp(iconSize ||200), height: sizeHelper.calWp(iconSize ||200) }}
        resizeMode="contain"
        source={icon}
      />
      <CustomText
        text={title}
        fontFam={fonts.Inter_Bold}
        fontWeight="700"
        size={35}
      />
      <CustomText text={des} size={22} />
      {isShopNow&&(

          <CustomButton
          text="Shop Now"
          style={{ marginTop:"20%" }}
          onPress={onShopNow}
          width={"90%"}
        >
          <Image
            source={icons.arrow_next}
            style={{
              width: sizeHelper.calWp(40),
              height: sizeHelper.calWp(40),
            }}
          />
        </CustomButton>
      )}
    </View>
  );
};
export default SuccessModal;
const styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: "100%",
    justifyContent:"center",
    alignItems: "center",
    backgroundColor: theme.colors.white,
    gap: sizeHelper.calHp(20),
    position:"absolute",
    zIndex: 1,

  },
});
