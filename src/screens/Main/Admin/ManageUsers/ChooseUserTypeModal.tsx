import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import sizeHelper, { screenWidth } from "../../../../utils/Helpers";
import images from "../../../../utils/Constants/images";
import CustomText from "../../../../components/Text";
import { theme } from "../../../../utils/Themes";
import { appStyles } from "../../../../utils/GlobalStyles";
import CustomButton from "../../../../components/Button";
import { fonts } from "../../../../utils/Themes/fonts";
import CustomDropDown from "../../../../components/DropDown";
import CustomInput from "../../../../components/Input";
import icons from "../../../../utils/Constants/icons";

const ChooseUserTypeModal = ({
  modalVisible,
  setModalVisible,
  onCancel,
  onDone,
  title,
  des,
}: any) => {
  const [selectedRule, setSelectedRule] = useState("Student");
  const [isNext, seIsNext] = useState(false);

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
        {isNext && (
          <TouchableOpacity
            onPress={() => seIsNext(false)}
            style={{
              width: sizeHelper.calWp(100),
              height: sizeHelper.calWp(80),
            }}
          >
            <Image
              style={{
                width: sizeHelper.calWp(40),
                height: sizeHelper.calWp(40),
                resizeMode: "contain",
                tintColor: theme.colors.black,
              }}
              source={icons.arrow_back}
            />
          </TouchableOpacity>
        )}

        <Image
          style={{
            width: sizeHelper.calWp(200),
            height: sizeHelper.calWp(150),
            alignSelf: "center",
          }}
          source={images.add_user}
        />
        <View
          style={{
            gap: sizeHelper.calHp(20),
            alignItems: "center",
          }}
        >
          <CustomText
            text={"Add User"}
            fontFam={fonts.Poppins_SemiBold}
            fontWeight="600"
            size={23}
          />
          <CustomText
            style={{ textAlign: "center" }}
            text={"Choose User Type"}
            color={theme.colors.text_black + "90"}
            size={22}
          />
        </View>
        {isNext ? (
          <>
            <View style={{ gap: sizeHelper.calWp(25) }}>
              <CustomInput label={"Full Name"} />
              <CustomInput label={"Description"} height={150} />
            </View>
          </>
        ) : (
          <CustomDropDown
            placeholder={"select Rule"}
            label={"Select Role"}
            dropWidth={"81%"}
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
        )}

        <View
          style={{
            ...appStyles.rowjustify,
            width: "100%",
            marginTop: sizeHelper.calHp(20),
          }}
        >
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
            text={isNext ? "Done" : "Next"}
            onPress={() => {
              if (isNext) {
                setModalVisible(false);
                seIsNext(false);

                return;
              }

              seIsNext(true);
            }}
          />
        </View>
      </View>
    </Modal>
  );
};
export default ChooseUserTypeModal;
const styles = StyleSheet.create({
  Container: {
    width: "100%",
    // alignSelf: "center",
    // alignItems: "center",
    backgroundColor: theme.colors.white,
    borderRadius: sizeHelper.calWp(40),
    paddingHorizontal: sizeHelper.calWp(30),
    paddingVertical: sizeHelper.calHp(20),
    // gap: sizeHelper.calHp(20),
  },
});
