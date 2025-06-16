import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Image,
} from "react-native";
import sizeHelper from "../../../utils/Helpers";
import { theme } from "../../../utils/Themes";
import ScreenLayout from "../../../components/ScreenLayout";
import CustomButton from "../../../components/Button";
import CustomText from "../../../components/Text";
import { fonts } from "../../../utils/Themes/fonts";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import ScreenLoader from "../../../components/ScreenLoader";
import images from "../../../utils/Constants/images";
import icons from "../../../utils/Constants/icons";
import { appStyles } from "../../../utils/GlobalStyles";

const TwoFAScreen = ({ navigation, route }: any) => {
  const [value, setValue] = useState("");
  const [isWrongOtp, setIsWrongOtp] = useState(false);
  const [loading, setLoading] = useState(false);
  const ref = useBlurOnFulfill({ value, cellCount: 6 });

  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

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
                  paddingTop: sizeHelper.calHp(30),
                }}
              >
                <CustomText
                  text={"Enter Verification Code"}
                  fontWeight="700"
                  fontFam={fonts.Inter_Bold}
                  size={40}
                />
                <CustomText
                  text={
                    "We’ve sent a 6-digit code to your email. Please enter it below to continue."
                  }
                />
              </View>
            </View>

            <View style={{ paddingTop: "16%" }}>
              <CodeField
                ref={ref}
                {...props}
                caretHidden={true}
                value={value}
                onChangeText={(value) => {
                  setValue(value);
                  setIsWrongOtp(false);
                }}
                cellCount={6}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                  <View
                    onLayout={getCellOnLayoutHandler(index)}
                    key={index}
                    style={{
                      ...styles.codeFieldCell,
                      borderColor: isWrongOtp
                        ? theme.colors.warning
                        : isFocused
                        ? theme.colors.primary
                        : theme.colors.highlght,
                      backgroundColor: isWrongOtp
                        ? theme.colors.red + "30"
                        : theme.colors.Input_field,
                    }}
                  >
                    <CustomText
                      size={32}
                      color={
                        isWrongOtp
                          ? theme.colors.warning
                          : theme.colors.secondry
                      }
                      text={symbol || (isFocused ? <Cursor /> : "")}
                    />
                  </View>
                )}
              />
            </View>

            <View style={{ gap: sizeHelper.calHp(20) }}>
              <CustomButton
                text="Verify Codee"
                style={{ marginTop: "22%" }}
                onPress={() => navigation.navigate("ForgotPassword")}
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

              <TouchableOpacity
                onPress={() => navigation.navigate("Signup")}
                style={{
                  ...appStyles.row,
                  gap: sizeHelper.calWp(7),
                  alignSelf: "center",
                }}
              >
                <CustomText text={"Didn't receive?"} />
                <CustomText
                  text={"Resend!"}
                  fontFam={fonts.Poppins_Medium}
                  // fontWeight="600"
                  textDecorationLine="underline"
                  // color={theme.colors.primary}
                />
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ScreenLayout>

    
      {loading && <ScreenLoader />}
    </>
  );
};

export default TwoFAScreen;

const styles = StyleSheet.create({
  botttom: {
    gap: sizeHelper.calHp(20),
    paddingBottom: "10%",
  },

  codeFieldRoot: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: sizeHelper.calHp(60),
    gap: sizeHelper.calWp(15),
  },
  codeFieldCell: {
    justifyContent: "center",
    alignItems: "center",
    width: "15%",
    height: sizeHelper.calHp(80),
    borderWidth: 1,
    borderRadius: sizeHelper.calWp(15),
    borderColor: theme.colors.highlght,
  },
});
