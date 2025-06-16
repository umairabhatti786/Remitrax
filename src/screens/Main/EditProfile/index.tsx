import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import { theme } from "../../../utils/Themes";
import sizeHelper from "../../../utils/Helpers";
import icons from "../../../utils/Constants/icons";
import { appStyles } from "../../../utils/GlobalStyles";
import CustomText from "../../../components/Text";
import CustomHeader from "../../../components/Header/inde";
import CustomInput from "../../../components/Input";
import CustomButton from "../../../components/Button";
import { fonts } from "../../../utils/Themes/fonts";
import SuccessModal from "../../../components/SuccessModal";
import images from "../../../utils/Constants/images";

const EditProfileScreen = ({ navigation }: any) => {
  const [fullName, setFullName] = useState("");
  const [isSuccessModal, setIsSuccessModal] = useState(false);

  const [newPasssword, setNewPassword] = useState("");

  const DetailCard = ({
    title,
    icon,
    color,
    border,
    paddingBottom,
    onPress,
  }: any) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          gap: sizeHelper.calHp(20),
          borderBottomWidth: border || 1,
          borderBottomColor: theme.colors.black + "20",
        }}
      >
        <View
          style={{
            ...appStyles.rowjustify,
            paddingBottom: paddingBottom || sizeHelper.calHp(25),
          }}
        >
          <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
            <Image
              style={{
                width: sizeHelper.calWp(35),
                height: sizeHelper.calWp(35),
                tintColor: color || theme.colors.primary,
              }}
              source={icon}
              resizeMode="contain"
            />
            <CustomText color={color} text={title} size={22} />
          </View>
          <Image
            style={{
              width: sizeHelper.calWp(35),
              height: sizeHelper.calWp(35),
            }}
            source={icons.nexr_arrow}
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <View
          style={appStyles.appHeader}
        >
          <CustomHeader
            title={"Edit Profile"}
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
          </View>
          <CustomButton
            text="Save Changes"
            style={{ marginTop: sizeHelper.calHp(80) }}
            // onPress={onLogin}
            onPress={() => {
              setIsSuccessModal(true);
              setTimeout(() => {
                setIsSuccessModal(false);
              }, 1000);
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
      {isSuccessModal && (
        <SuccessModal
          modalVisible={isSuccessModal}
          setModalVisible={setIsSuccessModal}
          icon={images.saved_successfully}
          title={"Awesome!"}
          des={"Changes Saved Successfully"}
        />
      )}
    </>
  );
};
export default EditProfileScreen;

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
