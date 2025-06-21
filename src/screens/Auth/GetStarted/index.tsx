import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  Platform,
} from "react-native";
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
import { WINDOW_WIDTH } from "@gorhom/bottom-sheet";

const GetStarted = ({ navigation }: any) => {
  return (
    <ImageBackground style={{ flex: 1 }} source={images.get_started_background}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: sizeHelper.calWp(40),
          gap: sizeHelper.calHp(20),
          paddingTop: sizeHelper.calHp(Platform.OS == "ios" ? 60 : 30),
        }}
      >
        <Image
          style={{
            width: sizeHelper.calWp(270),
            height: sizeHelper.calWp(100),
            alignSelf: "center",
          }}
          source={images.logo}
          resizeMode="contain"
        />
        <CustomText
          text={"Securely connecting your wallet!"}
          fontWeight="700"
          style={{
            textAlign: "center",
            paddingHorizontal: sizeHelper.calWp(50),
          }}
          color={theme.colors.white}
          fontFam={fonts.PlusJakartaSans_Bold}
          size={50}
        />
        <CustomText
          text={"Bringing the world closer—one transfer at a time"}
          style={{ textAlign: "center" }}
          color={theme.colors.white}
          // size={50}
        />
        <View style={{ flex: 1 }}>
          <Image
            style={{
              width: WINDOW_WIDTH,
              height: "80%",
              alignSelf: "center",
              marginTop: "17%",
            }}
            source={images.money_transfer_img}
          />
        </View>
        <View
          style={{
            gap: sizeHelper.calHp(20),
            paddingBottom: sizeHelper.calHp(60),
          }}
        >
          <CustomButton
            text="Let’s get started"
            // style={{ marginTop: "20%" }}
            onPress={() => {
              navigation.navigate("LoginScreen");
            }}
            bgColor={theme.colors.secondary}
            width={"100%"}
          >
            <Image
              source={icons.next_btn}
              style={{
                width: sizeHelper.calWp(30),
                height: sizeHelper.calWp(30),
                resizeMode: "contain",
              }}
            />
          </CustomButton>
          <View
            style={{
              ...appStyles.row,
              gap: sizeHelper.calHp(15),
              alignSelf: "center",
            }}
          >
            <Image
              style={{
                width: sizeHelper.calWp(30),
                height: sizeHelper.calWp(30),
                alignSelf: "center",
                tintColor: theme.colors.white,
              }}
              source={icons.lock}
              resizeMode="contain"
            />
            <CustomText
              text={"Protected by bank-level encryption"}
              color={theme.colors.white}
              // size={50}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

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
