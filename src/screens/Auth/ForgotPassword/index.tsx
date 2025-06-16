import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from 'react-native';
import sizeHelper from '../../../utils/Helpers';
import {theme} from '../../../utils/Themes';
import ScreenLayout from '../../../components/ScreenLayout';
import CustomButton from '../../../components/Button';
import CustomText from '../../../components/Text';
import {fonts} from '../../../utils/Themes/fonts';
import CustomInput from '../../../components/Input';
import {appStyles} from '../../../utils/GlobalStyles';
import icons from '../../../utils/Constants/icons';
import CustomHeader from '../../../components/Header/inde';
import images from '../../../utils/Constants/images';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ForgotPassword = ({navigation}: any) => {
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <ScreenLayout
      style={{
        flex: 1,
        paddingHorizontal: sizeHelper.calWp(30),
        paddingTop: sizeHelper.calHp(20),
        gap: sizeHelper.calWp(30),
      }}>

      <TouchableWithoutFeedback
        style={{flex: 1, gap: sizeHelper.calWp(30)}}
        onPress={() => Keyboard.dismiss()}>
        <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
          style={{flex: 1,gap:sizeHelper.calHp(30)}}
        >
         <View style={{ paddingTop: "10%" }}>
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
                  text={"Set a New Password"}
                  fontWeight="700"
                  fontFam={fonts.Inter_Bold}
                  size={40}
                />
                <CustomText
                style={{marginRight:sizeHelper.calWp(100)}}
                  text={"Create a secure new password to access your account."}
                />
              </View>
            </View>
          <View style={{flex: 1}}>
          <View style={{ paddingTop: "11%",gap:sizeHelper.calHp(20) }}>
              <CustomInput
                label={'Password'}
                rightSource={icons.eye}

              />
              <CustomInput
                label={'Confirm Password'}
                rightSource={icons.eye}
              />
           
            </View>
            <View >
          <CustomButton
                  text="Change Password"
                  onPress={()=>navigation.navigate("Login")}
                  style={{ marginTop: "24%" }}
                  // onPress={onLogin}
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

         
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    </ScreenLayout>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  botttom: {
    gap: sizeHelper.calHp(20),
    paddingBottom: '10%',
  },
});
