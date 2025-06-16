import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import sizeHelper from "../../../../utils/Helpers";
import { theme } from "../../../../utils/Themes";
import { appStyles } from "../../../../utils/GlobalStyles";
import CustomHeader from "../../../../components/Header/inde";
import { fonts } from "../../../../utils/Themes/fonts";
import icons from "../../../../utils/Constants/icons";
import CustomInput from "../../../../components/Input";
import CustomText from "../../../../components/Text";
import CustomButton from "../../../../components/Button";

const ManageInformation = ({ navigation }: any) => {
  const [fullName, setFullName] = useState("");

  const [newPasssword, setNewPassword] = useState("");

 
  return (
    <>
      <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <View
          style={{
            width: "100%",
            backgroundColor: theme.colors.primary,
            paddingTop: sizeHelper.calHp(100),
            paddingHorizontal: sizeHelper.calWp(40),
            paddingBottom: sizeHelper.calHp(30),
            borderBottomLeftRadius: sizeHelper.calWp(80),
            borderBottomRightRadius: sizeHelper.calWp(80),
          }}
        >
          <CustomHeader
            title={"Manage Information"}
            textColor={theme.colors.white}
            tintColor={theme.colors.placeholder + "80"}
          />
        </View>
        <View
          style={{
            paddingBottom: sizeHelper.calHp(50),
            paddingTop: "15%",
            paddingHorizontal: sizeHelper.calWp(30),
            flex: 1,
            gap: sizeHelper.calHp(50),
          }}
        >
          <View style={appStyles.rowjustify}>
            <View
              style={{
                gap: sizeHelper.calHp(4),
                width: "60%",
              }}
            >
              <CustomText text={"Upload Image"} color={theme.colors.black} />
              <CustomText
                text={
                  "Profile Picture Info Text 4.00 MB png, jpg, jpeg, gif, bmp"
                }
                fontWeight="400"
                fontFam={fonts.Inter_Light}
                color={theme.colors.black + "90"}
                size={18}
              />
            </View>

            <TouchableOpacity style={styles.uplaod_img_container}>
              <Image
                style={{
                  width: "20%",
                  height: "20%",
                }}
                source={icons.upload_img}
              />
            </TouchableOpacity>
          </View>
          <View style={{ gap: sizeHelper.calHp(30), flex: 1 }}>
            <CustomInput
              label={"Full Name"}
              value={fullName}
              onChangeText={(txt: string) => setFullName(txt)}
            />
              <CustomInput
              label={"Email Address"}
              value={fullName}
              onChangeText={(txt: string) => setFullName(txt)}
            />
              <CustomInput
              label={"Phone Number"}
              value={fullName}
              onChangeText={(txt: string) => setFullName(txt)}
            />
          </View>
          <CustomButton
            text="Save Changes"
            style={{ marginTop: sizeHelper.calHp(80) }}
            // onPress={onLogin}
            onPress={() => navigation.navigate("StudentBottomTab")}
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
    </>
  );
};
export default ManageInformation;

const styles = StyleSheet.create({
  uplaod_img_container: {
    width: sizeHelper.calWp(240),
    height: sizeHelper.calWp(240),
    alignItems: "center",
    justifyContent: "center",
    borderColor: theme.colors.highlght,
    borderWidth: 1,
    borderRadius: sizeHelper.calWp(240),
    backgroundColor: theme.colors.Input_field,
  },
});
