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

const OnboardingScreen = ({ navigation }: any) => {
  return (
    <ScreenLayout
    backgroundColor={theme.colors.dark_highlight}
      style={{
        flex: 1,
        paddingHorizontal: sizeHelper.calWp(40),
        backgroundColor:theme.colors.dark_highlight
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor:theme.colors.dark_highlight
        }}
      >
        <View style={{width:'100%',paddingTop:"15%"}}>
          <Image
            style={{
              width: sizeHelper.calWp(450),
              height: sizeHelper.calWp(400),
              alignSelf: "center",
            }}
            source={images.simple_logo}
            resizeMode="contain"
          />
          <View style={{ gap: sizeHelper.calHp(10), alignItems: "center" }}>
           

            <View
              style={{
                width: "100%",
                backgroundColor:theme.colors?.white,
                borderRadius: sizeHelper.calWp(20),
                padding:sizeHelper.calWp(30),
                gap:sizeHelper.calHp(30)
              }}
            >
              
            <CustomText
              style={{
                textAlign: "justify"
              }}
              text={
                "Loyal fans reppin your city is too easy with the latest licensed gear from Pro Standard. Get huge savings when making purchases on your mobile app. It’s Gametime!"
              }
              fontWeight="600"
              lineHeight={sizeHelper.calHp(40)}
              size={26}
             
              fontFam={fonts.Inter_Medium}
            />
             <Image
            style={{
              width: "100%",
              height: sizeHelper.calWp(320),
              alignSelf: "center",
            }}
            source={images.companies_logos}
            resizeMode="contain"
          />
              
            </View>
          </View>

        </View>
      </View>

      <View
        style={{
          gap: sizeHelper.calHp(20),
          paddingBottom: "10%",
        }}
      >
         <SwipeButton title={"Slide..."}
        onSwipe={()=>navigation.navigate("UserType")}
         />
  
      
      </View>
    </ScreenLayout>
  );
};

export default OnboardingScreen;

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
