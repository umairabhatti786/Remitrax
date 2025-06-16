import { Image, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import CustomText from "../../../../components/Text";
import { theme } from "../../../../utils/Themes";
import sizeHelper, { screenWidth } from "../../../../utils/Helpers";
import images from "../../../../utils/Constants/images";
import { fonts } from "../../../../utils/Themes/fonts";
import { appStyles } from "../../../../utils/GlobalStyles";
import CustomButton from "../../../../components/Button";
import CustomDropDown from "../../../../components/DropDown";

const ChooseBannerModal = ({
  modalVisible,
  setModalVisible,
  onCancel,
  onNext,
  title,
  des,
}: any) => {
  const [selectedRule, setSelectedRule] = useState("Student");
  const userType = [
    { label: "Student", value: "Student", id: 1 },
    { label: "Mentor", value: "Mentor", id: 2 },

    { label: "Parent", value: "Parent", id: 1 },
    { label: "Admin", value: "Admin", id: 2 },
  ];

  return (
    <Modal
      isVisible={modalVisible}
      deviceWidth={screenWidth}
      onBackButtonPress={() => setModalVisible?.(false)}
      onBackdropPress={() => setModalVisible?.(false)}
      backdropColor="rgba(0,0,0,0.5)"
      style={{ flex: 1 }}
    >
      <View style={styles.Container}>
        <Image
          style={{
            width: sizeHelper.calWp(250),
            height: sizeHelper.calWp(150),
          }}
          source={images.select_poster}
        />
        <View
          style={{
            gap: sizeHelper.calHp(20),
            alignItems: "center",
            paddingVertical: sizeHelper.calHp(20),
            width:"100%"
          }}
        >
          <CustomText
            text={"Select"}
            fontFam={fonts.Poppins_SemiBold}
            fontWeight="600"
            size={23}
          />
          <CustomText
            style={{ textAlign: "center" }}
            text={"Choose Banner or Poster/QR Campaign"}
            color={theme.colors.text_black + "90"}
            size={22}
          />
          <CustomDropDown
            placeholder={""}
            label={"Select"}
            mainWidth={"100%"}
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
        </View>
        <View style={{ ...appStyles.rowjustify, width: "100%" }}>
          <CustomButton
            height={68}
            bgColor={theme.colors.white}
            borderColor={theme.colors.warning}
            borderWidth={1}
            borderRadius={15}
            textColor={theme.colors.warning}
            width={"48%"}
            text={"Cancel"}
            onPress={onCancel}
          />
          <CustomButton
            width={"48%"}
            height={68}
            borderRadius={15}
            bgColor={theme.colors.primary}
            textColor={theme.colors.white}
            text={"Next"}
            onPress={onNext}
          />
        </View>
      </View>
    </Modal>
  );
};
export default ChooseBannerModal;
const styles = StyleSheet.create({
  Container: {
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: theme.colors.white,
    borderRadius: sizeHelper.calWp(40),
    paddingHorizontal: sizeHelper.calWp(30),
    paddingVertical: sizeHelper.calHp(20),
    gap: sizeHelper.calHp(20),
  },
});
