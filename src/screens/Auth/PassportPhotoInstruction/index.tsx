import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import sizeHelper from "../../../utils/Helpers";
import { theme } from "../../../utils/Themes";
import ScreenLayout from "../../../components/ScreenLayout";
import CustomButton from "../../../components/Button";
import CustomText from "../../../components/Text";
import { fonts } from "../../../utils/Themes/fonts";
import { appStyles } from "../../../utils/GlobalStyles";
import icons from "../../../utils/Constants/icons";
import CustomHeader from "../../../components/Header";
import CountryDropdown from "../../../components/CountryDropdown";
import images from "../../../utils/Constants/images";
import { WINDOW_WIDTH } from "@gorhom/bottom-sheet";

const PassportPhotoInstruction = ({ navigation }: any) => {
  const [selectedNationality, setSelectedNationality] = useState();

  const [verificationMethod, setVerificationMethod] = useState("");

  const VerificationMethodBox = ({ title, selected, onPress }: any) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={styles.verificationBox}
      >
        <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
          <TouchableOpacity
            onPress={onPress}
            //   onPress={() => setIsRememberMe(!isRememberMe)}
            style={{
                borderColor:
                selected == title
                  ? theme.colors.primary
                  : theme.colors.input_field_stroke,
              width: sizeHelper.calWp(32),
              height: sizeHelper.calWp(32),
              borderRadius: sizeHelper.calWp(7),
              borderWidth: 1,
             
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "transparent",
            }}
          >
            <Image
              style={{
                width: "50%",
                height: "50%",
                tintColor:
                  selected == title
                    ? theme.colors.primary
                    : theme.colors.input_field_stroke,
              }}
              source={icons.check}
            />
          </TouchableOpacity>

          <CustomText size={22} text={title} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <ScreenLayout
        style={{
          flex: 1,
          paddingHorizontal: sizeHelper.calWp(30),
          gap: sizeHelper.calWp(30),
        }}
      >
        <View style={{ flex: 1, gap: sizeHelper.calHp(20) }}>
          <CustomHeader />
          <View style={{ gap: sizeHelper.calHp(20) }}>

          <Image
            style={{
              width:sizeHelper.calWp(350),
              height: sizeHelper.calWp(350),
              resizeMode: 'contain',
              alignSelf:"center"
            }}
            source={images.photo_id}
          />
           
            <CustomText
              style={{ marginRight: sizeHelper.calWp(30) }}
              size={33}
              fontWeight="700"
              text={
                "Before take your passport photo, please make sure that"
              }
            />
          </View>

          <View style={{ flex: 1 }}>
            <View >
            <View style={{flexDirection:"row",gap:sizeHelper.calWp(10)}}>
            <CustomText
                  text={"."}
                  fontWeight="700"
                  fontFam={fonts.PlusJakartaSans_Bold}
                  size={40}
                />
                <CustomText
                style={{alignSelf:"flex-end"}}
                  text={"Your ID isn’t expired"}
                  size={23}
                />
               
              </View>
              <View style={{flexDirection:"row",gap:sizeHelper.calWp(10)}}>
            <CustomText
                  text={"."}
                  fontWeight="700"
                  fontFam={fonts.PlusJakartaSans_Bold}
                  size={40}
                />
                <CustomText
                style={{alignSelf:"flex-end"}}
                  text={"Take a clear photo"}
                  size={23}
                />
               
              </View>
              <View style={{flexDirection:"row",gap:sizeHelper.calWp(10)}}>
            <CustomText
                  text={"."}
                  fontWeight="700"
                  fontFam={fonts.PlusJakartaSans_Bold}
                  size={40}
                />
                <CustomText
                style={{alignSelf:"flex-end"}}
                  text={"Capture you entire ID"}
                  size={23}
                />
               
              </View>
             
             
            </View>
          </View>

          <CustomButton
            style={{ bottom: "5%" }}
            onPress={() => navigation.navigate("YourIdentity")}
            text="Continue"
           
            width={"100%"}
          />
        </View>
      </ScreenLayout>
    </>
  );
};

export default PassportPhotoInstruction;

const styles = StyleSheet.create({
  verificationBox:{
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: sizeHelper.calWp(25),
    height: sizeHelper.calHp(80),
    alignItems: "center",
    borderColor: theme.colors.input_field_stroke,
    gap: sizeHelper.calWp(10),
    borderWidth: 1,
    borderRadius: sizeHelper.calWp(15),
    backgroundColor: theme.colors.Input_field,
  }
});
