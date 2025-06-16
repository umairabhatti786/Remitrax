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

const AddNewReward = ({ navigation, route }: any) => {
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
          <CustomHeader title={"Add New Reward"} />

          <View style={{ flex: 1, gap: sizeHelper.calWp(30) }}>
            <CustomInput label={"Reward Name"} />
            <CustomInput label={"Type"} />
            <CustomInput label={"Reward Value"} />

            <CustomDropDown
              placeholder={"select Rule"}
              label={"Availability"}
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

            <View />

            <CustomInput
              label={"Task Description"}
              textAlignVertical={"top"}
              height={170}
             
            />
            <CustomButton
            text="Add Reward"
            />

          
          </View>
        </KeyboardAwareScrollView>
      </ScreenLayout>

     
    </>
  );
};

export default AddNewReward;

const styles = StyleSheet.create({
  botttom: {
    gap: sizeHelper.calHp(20),
    paddingTop: "10%",
  },
});
