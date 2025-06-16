import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  Alert,
  Image,
} from "react-native";
import ScreenLayout from "../../../../components/ScreenLayout";
import sizeHelper from "../../../../utils/Helpers";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CustomText from "../../../../components/Text";
import { fonts } from "../../../../utils/Themes/fonts";
import CustomDropDown from "../../../../components/DropDown";
import CustomInput from "../../../../components/Input";
import icons from "../../../../utils/Constants/icons";
import CustomHeader from "../../../../components/Header/inde";
import { theme } from "../../../../utils/Themes";
import DatePicker from "react-native-date-picker";
import CustomButton from "../../../../components/Button";
import { appStyles } from "../../../../utils/GlobalStyles";

const AddNewBrandPartner = ({ navigation, route }: any) => {
  const [isOpenPicker, setIsOpenPicker] = useState(false);
  const [selectedAvailability, setSelectedAvailability] = useState("week 1");
  const AvailabilityData = [
    { label: "week 1", value: "week 1", id: 1 },
    { label: "week 2", value: "week 2", id: 2 },

    { label: "week 3", value: "week 3", id: 1 },
    { label: "week 4", value: "week 4", id: 2 },
  ];

  return (
    <>
      <ScreenLayout
        style={{
          flex: 1,
          paddingHorizontal: sizeHelper.calWp(40),
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
          <CustomHeader title={"Add New Brand Partner"} />

          <View style={{ flex: 1, gap: sizeHelper.calWp(30) }}>

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

            <CustomInput label={"Brand Name"} />

            <CustomDropDown
              placeholder={""}
              label={"Select Category"}
              setValue={setSelectedAvailability}
              value={selectedAvailability}
              onSelect={(it: any) => {
                setSelectedAvailability(it?.value);
              }}
              data={AvailabilityData.map((item, _index) => {
                return {
                  id: item?.id,
                  label: item?.label,
                  value: item?.value,
                };
              })}
            />
            <CustomInput label={"Contact Email"} />


            <View />

            <CustomInput
              label={"Description"}
              textAlignVertical={"top"}
              height={170}
             
            />
            <CustomButton
            style={{marginTop:sizeHelper.calHp(50)}}
            text="Save Partner"
            />

          
          </View>
        </KeyboardAwareScrollView>
      </ScreenLayout>

     
    </>
  );
};

export default AddNewBrandPartner;

const styles = StyleSheet.create({
  botttom: {
    gap: sizeHelper.calHp(20),
    paddingTop: "10%",
  },
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
