import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  Alert,
  Image,
} from "react-native";
import sizeHelper from "../../../utils/Helpers";
import { theme } from "../../../utils/Themes";
import ScreenLayout from "../../../components/ScreenLayout";
import CustomButton from "../../../components/Button";
import CustomText from "../../../components/Text";
import { fonts } from "../../../utils/Themes/fonts";
import CustomInput from "../../../components/Input";
import { appStyles } from "../../../utils/GlobalStyles";
import icons from "../../../utils/Constants/icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ScreenLoader from "../../../components/ScreenLoader";
import images from "../../../utils/Constants/images";
import CustomDropDown from "../../../components/DropDown";
import CustomBottomSheet from "../../../components/CustomBottomSheet";

const SignupScreen = ({ navigation }: any) => {
  const [focusedInput, setFocusedInput] = useState(null);
  const snapToPoints = ["70%", "65%"];
  const bottomSheetModalRef = useRef<any>(null);
  const [loading, setloading] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [selectedRule, setSelectedRule] = useState("Student");

  const userType = [
    { label: "Student", value: "Student", id: 1 },
    { label: "Mentor", value: "Mentor", id: 2 },

    { label: "Parent", value: "Parent", id: 1 },
    { label: "Admin", value: "Admin", id: 2 },
  ];
  

 

  return (
    <>
      <ScreenLayout
        style={{
          flex: 1,
          paddingHorizontal: sizeHelper.calWp(40),
          paddingTop: sizeHelper.calHp(20),
          gap: sizeHelper.calWp(30),
        }}
      >
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: "space-between",
            gap: sizeHelper.calWp(30),
            paddingBottom: sizeHelper.calHp(30),
          }}
        >
          <Image
            style={{
              width: sizeHelper.calWp(240),
              height: sizeHelper.calWp(240),
              alignSelf: "center",
            }}
            source={images.logo}
            resizeMode="contain"
          />
          <View style={{ gap: sizeHelper.calHp(10), alignItems: "center" }}>
            <CustomText
              text={"Join the Squad"}
              fontWeight="700"
              fontFam={fonts.Inter_Bold}
              size={40}
            />
            <CustomText
              style={{ textAlign: "center" }}
              text={
                "Let’s get started. We’ll help you balance school, sports, and life."
              }
            />
          </View>
          <View style={{ flex: 1 }}>
            <View style={{ gap: sizeHelper.calWp(20) }}>
              <CustomDropDown
                placeholder={"select Rule"}
                label={"Select Role"}
                setValue={setSelectedRule}
                value={selectedRule}
                onSelect={(it: any) => {
                  setSelectedRule(it?.value);
                }}
                data={userType.map((item, _index) => {
                  return {
                    id: item?.id,
                    label: item?.label,
                    value: item?.value,
                  };
                })}
              />
              <CustomInput
                label={"Full Name"}
                // value={values.name}
             
              />

              <CustomInput
                label={"Email"}
                focusedInput={focusedInput}
                // leftSource={icons.email}
                // value={values.email}
                // onChangeText={(txt: string) =>
                //   setValues({ ...values, email: txt })
                // }
                inputKey="email"
                setFocusedInput={setFocusedInput}
              />
              <CustomInput
                label={"Password"}
                focusedInput={focusedInput}
                rightSource={showPassword ? icons.eye : icons.eye}
                // error={errors?.password_error}
                secureTextEntry={showPassword}
                // value={values.password}
                rightIconPress={() => setShowPassword(!showPassword)}
              
                inputKey="password"
                setFocusedInput={setFocusedInput}
              />

              <CustomInput
                label={"Confirm Password"}
                focusedInput={focusedInput}
                rightSource={showPassword ? icons.eye : icons.eye}
                // error={errors?.password_error}
                secureTextEntry={showPassword}
                // value={values.password}
                rightIconPress={() => setShowPassword(!showPassword)}
            
                inputKey="password"
                setFocusedInput={setFocusedInput}
              />
            </View>

            <View style={styles.botttom}>
              <CustomButton
                text="Sign Up"
                // style={{ marginTop: sizeHelper.calHp(20) }}
                onPress={() => bottomSheetModalRef.current.present()}
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
                onPress={() => navigation.navigate("Login")}
                style={{
                  ...appStyles.row,
                  gap: sizeHelper.calWp(7),
                  alignSelf: "center",
                }}
              >
                <CustomText text={"Already have an account?"} />
                <CustomText
                  text={"Login Now!"}
                  textDecorationLine="underline"
                />
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </ScreenLayout>

      {/* <CustomToast
        isVisable={isMessage}
        backgroundColor={messageColor}
        setIsVisable={setIsMessage}
        message={message}
      /> */}
      {loading && <ScreenLoader />}

      <CustomBottomSheet
        snap={snapToPoints}
        bottomSheetModalRef={bottomSheetModalRef}
      >
        <View style={{ paddingHorizontal: sizeHelper.calWp(40) }}>
          <TouchableOpacity
          onPress={()=>bottomSheetModalRef.current.dismiss()}
            style={{
              width: sizeHelper.calWp(50),
              height: sizeHelper.calWp(50),
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: theme.colors.warning,
              borderRadius: sizeHelper.calWp(50),
              alignSelf: "flex-end",
            }}
          >
            <Image
              source={icons.cross}
              style={{ width: "40%", height: "40%" }}
            />
          </TouchableOpacity>
          <CustomText
            text={"Terms and Privacy Policy"}
            fontFam={fonts.Inter_Bold}
            color={theme.colors.primary}
            fontWeight="700"
            size={27}
          />

          <View style={{ paddingTop: sizeHelper.calHp(30) }}>
            <CustomText
              text={
                "What is the Gametime Smart Assistant?\nThe Gametime Smart Assistant is your AI-powered coach, tutor, and mentor—designed to help student-athletes stay focused, organized, and inspired both on and off the field.Whether you’re managing schoolwork, training schedules, recruiting goals, or wellness routines, the Smart Assistant puts the tools for success in the palm of your hand.\n\n\nGametime Smart Assistant is an AI-powered mobile platform tailored to student-athletes, their parents, and coaches.\nTagline: 'We Elevate Your Wings' - The iconic Gametime Wings logo symbolizes the limitless potential within every individual. By merging innovative technology with structure and mentorship, we empower student-athletes to rise above challenges and soar toward success in school and life.\n⦁ Unifies scheduling, academic tracking, mental health, performance insights, and communication in one Smart Assistant.\n⦁ Combines ChatGPT, Whisper, and adaptive AI for personalized, voice-enabled support.\n\n\nAre You Ready to Elevate Your Wings?\nWe’re currently in beta testing and inviting student-athletes, parents, and coaches to try the Gametime Smart Assistant for Free and provide feedback to help shape its future.\n\n\nJoin the movement. Shape the future.\n👉 [Download Beta App]\n👉 [Join the Feedback Circle\n👉 [Subscribe for Updates]\n\n\nDisclaimer & Waiver\nThe Gametime Smart Assistant is an educational and organizational tool designed to support youth development. It is not a licensed medical, legal, or academic service provider. All features are intended for general support and should not replace professional advice or services where needed.\n\nBy downloading or using the app, users agree to the following:\n⦁ Participation is voluntary. The platform is in active beta development.\n⦁ Gametime Sports Holdings LLC and its partners are not liable for decisions or outcomes resulting from app suggestions.\n⦁ Data Privacy: All feedback will be used solely to improve the Smart Assistant. We will never sell or share your data without your consent.\n⦁ Parental Consent Required for users under age 13.Your trust is our priority.\nPlease review our Privacy Policy and Terms of Use. Gametime Smart Assistant – Terms of Service Effective Date: [Insert Date]\nWelcome to the Gametime Smart Assistant, a digital platform provided by Gametime Sports Holdings LLC (“Gametime,” “we,” “our,” or “us”). These Terms of Service (“Terms”) govern your access to and use of the Gametime Smart Assistant mobile app, website, and related services (collectively, the “Service”)"
              }
              size={22}
              fontFam={fonts.Inter_Light}
              fontWeight="400"
            />
          </View>
        </View>
      </CustomBottomSheet>
    </>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  botttom: {
    gap: sizeHelper.calHp(20),
    paddingTop: "10%",
  },
});
