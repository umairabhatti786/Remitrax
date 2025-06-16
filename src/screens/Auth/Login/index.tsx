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
  ScrollView,
} from "react-native";
import sizeHelper from "../../../utils/Helpers";
import { theme } from "../../../utils/Themes";
import ScreenLayout from "../../../components/ScreenLayout";
import CustomButton from "../../../components/Button";
import CustomText from "../../../components/Text";
import { fonts } from "../../../utils/Themes/fonts";
import CustomInput from "../../../components/Input";
import { appStyles } from "../../../utils/GlobalStyles";
import ScreenLoader from "../../../components/ScreenLoader";
import images from "../../../utils/Constants/images";
import icons from "../../../utils/Constants/icons";
import { useSelector } from "react-redux";
import { getUserData } from "../../../redux/reducers/authReducer";

const LoginScreen = ({ navigation }: any) => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [isMessage, setIsMessage] = useState<any>(false);
  const [message, setMessage] = useState<any>("");
  const [messageColor, setMessageColor] = useState(theme.colors.red);
  const [loading, setloading] = useState(false);
  const [isDisable, setIsDisable] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [isRememberMe, setIsRememberMe] = useState(false);

  const auth = useSelector(getUserData);

  const [values, setValues] = useState({
    phoneNumber: "",
    email: "",
    password: "",
  });

  const RememberMe = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => setIsRememberMe(!isRememberMe)}
        style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}
      >
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => setIsRememberMe(!isRememberMe)}
          style={{
            width: sizeHelper.calWp(45),
            height: sizeHelper.calWp(45),
            borderRadius: sizeHelper.calWp(10),
            borderWidth: 1,
            borderColor: theme.colors.input_field_stroke,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: isRememberMe
              ? theme.colors.primary
              : theme.colors.white,
          }}
        >
          {isRememberMe && (
            <Image
              style={{
                width: "60%",
                height: "60%",
                tintColor: theme.colors.white,
              }}
              source={icons.check}
            />
          )}
        </TouchableOpacity>

        <CustomText
          style={{ textAlign: "center" }}
          fontWeight="400"
          fontFam={fonts.Inter_Light}
          text={"Remember me!."}
        />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <ScreenLayout
        style={{
          flex: 1,
          paddingHorizontal: sizeHelper.calWp(40),
          gap: sizeHelper.calWp(30),
        }}
      >
        <TouchableWithoutFeedback
          style={{ flex: 1, gap: sizeHelper.calWp(30) }}
          onPress={() => Keyboard.dismiss()}
        >
          <ScrollView
            style={{ flex: 1, gap: sizeHelper.calHp(30) }}
          >
            <Image
              style={{
                width: sizeHelper.calWp(270),
                height: sizeHelper.calWp(270),
                alignSelf: "center",
              }}
              source={images.logo}
              resizeMode="contain"
            />
            <View style={{ gap: sizeHelper.calHp(10), alignItems: "center" }}>
              <CustomText
                text={"Login"}
                fontWeight="700"
                fontFam={fonts.Inter_Bold}
                size={40}
              />
              <CustomText
                style={{ textAlign: "center" }}
                text={"Stay on track with your training, tasks, and goals."}
              />
            </View>

            <View style={{ flex: 1, paddingTop: sizeHelper.calHp(40) }}>
              <View style={{ gap: sizeHelper.calWp(25) }}>
                <CustomInput
                  label={"Username"}
                  value={values.email}
                  focusedInput={focusedInput}
                  onChangeText={(txt: string) =>
                    setValues({ ...values, email: txt })
                  }
                  // leftSource={icons.email}
                  setFocusedInput={setFocusedInput}
                  inputKey="email"
                />
                <CustomInput
                  label={"Password"}
                  value={values.password}
                  rightSource={showPassword ? icons.eye : icons.eye}
                  secureTextEntry={showPassword}
                  rightIconPress={() => setShowPassword(!showPassword)}
                  onChangeText={(txt: string) =>
                    setValues({ ...values, password: txt })
                  }
                  focusedInput={focusedInput}
                  setFocusedInput={setFocusedInput}
                  inputKey="password"
                />
                <View style={appStyles.rowjustify}>
                  <RememberMe />

                  <TouchableOpacity
                    onPress={() => navigation.navigate("EnterEmailScreen")}
                    style={{
                      flexDirection: "row",
                      alignSelf: "flex-end",
                      paddingVertical: sizeHelper.calHp(4),
                    }}
                  >
                    <CustomText
                      text={"Forgot Password?"}
                      textDecorationLine="underline"
                      color={theme.colors.warning}
                    />
                  </TouchableOpacity>
                </View>

                <CustomButton
                  text="Log In"
                  style={{ marginTop:"20%" }}
                  onPress={() => {
                    if (auth?.role == "student") {
                      navigation.navigate("StudentBottomTab");

                      return;
                    }
                    if (auth?.role == "coache") {
                      navigation.navigate("CoachesStack");

                      return;
                    }
                    if (auth?.role == "parent") {
                      navigation.navigate("ParentsStack");

                      return;
                    }
                    if (auth?.role == "admin") {
                      navigation.navigate("AdminsStack");

                      return;
                    }
                    
                    
                  }}
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

            <View style={styles.botttom}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Signup")}
                style={{
                  ...appStyles.row,
                  gap: sizeHelper.calWp(7),
                  alignSelf: "center",
                }}
              >
                <CustomText text={"Don’t have account?"} />
                <CustomText
                  text={"Signup Now!"}
                  fontFam={fonts.Poppins_Medium}
                  // fontWeight="600"
                  textDecorationLine="underline"
                  // color={theme.colors.primary}
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </ScreenLayout>

      {loading && <ScreenLoader />}
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  botttom: {
    gap: sizeHelper.calHp(20),
    paddingTop: "45%",
  },
});
