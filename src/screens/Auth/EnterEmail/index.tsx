import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import sizeHelper from "../../../utils/Helpers";
import ScreenLayout from "../../../components/ScreenLayout";
import CustomButton from "../../../components/Button";
import CustomText from "../../../components/Text";
import { fonts } from "../../../utils/Themes/fonts";
import CustomInput from "../../../components/Input";
import icons from "../../../utils/Constants/icons";
import ScreenLoader from "../../../components/ScreenLoader";
import images from "../../../utils/Constants/images";

const EnterEmailScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <>
      <ScreenLayout
        style={{
          flex: 1,
          paddingHorizontal: sizeHelper.calWp(40),
          gap: sizeHelper.calWp(30),
          paddingTop: sizeHelper.calHp(20),
        }}
      >
        <TouchableWithoutFeedback
          style={{ flex: 1, gap: sizeHelper.calWp(30) }}
          onPress={() => Keyboard.dismiss()}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1, gap: sizeHelper.calHp(30) }}
            keyboardVerticalOffset={
              Platform.OS === "ios" ? sizeHelper.calHp(40) : 10
            }
          >
            <View style={{ paddingTop: "30%" }}>
              <Image
                style={{
                  width: sizeHelper.calWp(290),
                  height: sizeHelper.calWp(290),
                  alignSelf: "center",
                }}
                source={images.logo}
                resizeMode="contain"
              />
              <View
                style={{
                  gap: sizeHelper.calHp(10),
                  paddingTop: sizeHelper.calHp(40),
                }}
              >
                <CustomText
                  text={"Reset Your Password"}
                  fontWeight="700"
                  fontFam={fonts.Inter_Bold}
                  size={40}
                />
                <CustomText
                  text={"Enter your email and we’ll send you an OTP"}
                />
              </View>
            </View>

            <View style={{ flex: 1 }}>
              <View style={{ paddingTop: "11%" }}>
                <CustomInput
                  label={"Email Address"}
                  value={email}
                  onChangeText={(txt: string) => setEmail(txt)}
                  inputKey="email"
                />

                <View>
                  <CustomButton
                    text="Send OTP Code"
                    style={{ marginTop: "24%" }}
                    onPress={() => navigation.navigate("TwoFAScreen")}
                    width={"100%"}
                  >
                    <Image
                      source={icons.arrow_next}
                      style={{
                        width: sizeHelper.calWp(40),
                        height: sizeHelper.calWp(40),
                      }}
                    />
                  </CustomButton>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ScreenLayout>

      {loading && <ScreenLoader />}
    </>
  );
};

export default EnterEmailScreen;

const styles = StyleSheet.create({
  botttom: {
    gap: sizeHelper.calHp(20),
    paddingBottom: "10%",
  },
});
