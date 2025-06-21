import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import sizeHelper from "../../../utils/Helpers";
import { theme } from "../../../utils/Themes";
import ScreenLayout from "../../../components/ScreenLayout";
import CustomButton from "../../../components/Button";
import CustomText from "../../../components/Text";
import { fonts } from "../../../utils/Themes/fonts";
import CustomInput from "../../../components/Input";
import { appStyles } from "../../../utils/GlobalStyles";
import icons from "../../../utils/Constants/icons";
import CustomHeader from "../../../components/Header";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import images from "../../../utils/Constants/images";

const YourIdentity = ({ navigation }: any) => {
  const [showPassword, setShowPassword] = useState(false);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const IdentityDetail = ({ img, title, des }: any) => {
    return (
      <View style={{ flexDirection: "row", width: "80%" ,gap:sizeHelper.calWp(25)}}>
        <Image
          source={img}
          style={{
            width: sizeHelper.calWp(70),
            height: sizeHelper.calWp(70),
            resizeMode: "contain",
          }}
        />
        <View >
          <CustomText
            text={title}
            fontWeight="600"
            fontFam={fonts.PlusJakartaSans_SemiBold}
            color={"#031424"}
            size={27}
          />
          <CustomText color={theme.colors.gray} text={des} />
        </View>
      </View>
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
            <CustomText
              text={"Let’s Verify Your Identity"}
              fontWeight="700"
              fontFam={fonts.PlusJakartaSans_Bold}
              size={33}
            />
            <CustomText
              color={theme.colors.gray}
              style={{ marginRight: sizeHelper.calWp(30) }}
              size={21}
              text={
                "To keep your account secure and meet financial regulations, we’ll need to confirm your identity. This only takes a few minutes."
              }
            />
          </View>

          <View style={{ flex: 1,gap:sizeHelper.calHp(30),marginTop:sizeHelper.calHp(40) }}>
            <CustomText
              text={"What You'll Need:"}
              fontWeight="700"
              // fontFam={fonts.Inter_Bold}
              size={30}
            />
            <IdentityDetail
            img={images.photo_id}
            title={"Photo ID"}
            des={"A government-issued photo ID (passport, driver’s license, or national ID)"}
            />
             <IdentityDetail
            img={images.facial_recognition}
            title={"Facial recognition"}
            des={"Confirm that the portrait matches the picture on the identification document."}
            />
          </View>

          <View style={styles.botttom}>
            <CustomButton 
            onPress={()=>navigation.navigate("ProofOfResidency")}
            text="Start Verification" width={"100%"} />
          </View>
        </View>
      </ScreenLayout>
    </>
  );
};

export default YourIdentity;

const styles = StyleSheet.create({
  botttom: {
    gap: sizeHelper.calHp(20),
    bottom: "5%",
  },
  biomatric_btn: {
    width: "100%",
    height: sizeHelper.calHp(80),
    backgroundColor: theme.colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: sizeHelper.calHp(18),
    flexDirection: "row",
    gap: sizeHelper.calWp(15),
  },
});
