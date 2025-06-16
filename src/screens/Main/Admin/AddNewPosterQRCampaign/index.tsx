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
import CustomInput from "../../../../components/Input";
import icons from "../../../../utils/Constants/icons";
import { appStyles } from "../../../../utils/GlobalStyles";
import CustomHeader from "../../../../components/Header/inde";
import { theme } from "../../../../utils/Themes";
import { PlacementData, ShowOnData, taskCategoryData } from "../../../../utils/Data";
import DatePicker from "react-native-date-picker";
import CustomButton from "../../../../components/Button";

const AddNewPosterQRCampaign = ({ navigation, route }: any) => {
  const isEdit = route?.params?.isEdit;
  const [focusedInput, setFocusedInput] = useState(null);
  const snapToPoints = ["70%", "65%"];
  const bottomSheetModalRef = useRef<any>(null);
  const [loading, setloading] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [selectedRule, setSelectedRule] = useState("Student");
  const [tasksCategory, setTasksCategory] = useState(PlacementData);
  const [isOpenPicker, setIsOpenPicker] = useState(false);
  const [isActive, setIsActive] = useState("Active");

  const ActiveContainer = ({ title, isActive, onPress }: any) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          ...appStyles.rowjustify,
          padding: sizeHelper.calWp(25),
          flex: 1,

          borderWidth: 1,
          borderColor: theme.colors.highlght,
          backgroundColor: theme.colors.Input_field,
          borderRadius: sizeHelper.calWp(20),
        }}
      >
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={onPress}
          style={{
            width: sizeHelper.calWp(30),
            height: sizeHelper.calWp(30),
            borderRadius: sizeHelper.calWp(10),
            marginRight: sizeHelper.calWp(10),
            borderWidth: 1,
            borderColor: "#09AA3473",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor:
              title == isActive ? theme.colors.primary : "#FFFCF2",
          }}
        >
          {title == isActive && (
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

        <CustomText text={title} size={22} />
        <View />
      </TouchableOpacity>
    );
  };

  const DateTimeContainer = ({ label, icon, value, onPress }: any) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          flex: 1,
          height: sizeHelper.calHp(95),
          borderWidth: 1,
          borderColor: theme.colors.highlght,
          borderRadius: sizeHelper.calWp(20),
          backgroundColor: theme.colors.Input_field,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: sizeHelper.calWp(20),
        }}
      >
        <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
          <Image
            style={{
              width: sizeHelper.calWp(38),
              height: sizeHelper.calWp(38),
            }}
            source={icon}
            resizeMode="contain"
          />
          <View style={{ gap: sizeHelper.calHp(10) }}>
            <CustomText
              text={label}
              fontWeight="400"
              fontFam={fonts.Inter_Light}
              color={theme.colors.black + "70"}
            />
            <CustomText text={value} color={theme.colors.black} size={23} />
          </View>
        </View>

        <Image
          style={{
            width: sizeHelper.calWp(45),
            height: sizeHelper.calWp(45),
          }}
          source={icons.down_arrow}
          resizeMode="contain"
        />
      </TouchableOpacity>
    );
  };

  //   const taskCategoryData = [
  //     { icon: icons.dumbbell_fitness, title: "Training", isSelected: false },
  //     { icon: icons.book_study, title: "Study", isSelected: false },
  //     { icon: icons.wellness, title: "Wellness", isSelected: false },
  //   ];

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
          <CustomHeader title={"Add New Poster / QR Campaign"} />

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
            <CustomInput label={"Title"} />
            <CustomInput label={" CTA Message"} />

           
            <View style={{ width: "100%", gap: sizeHelper.calHp(15) }}>
              <CustomText
                text={"Placement"}
                fontWeight="600"
                fontFam={fonts.Poppins_Medium}
                size={22}
              />
              {tasksCategory.map((item, index) => {
                return (
                  <View
                    style={{
                      ...appStyles.rowjustify,
                      padding: sizeHelper.calWp(15),

                      borderWidth: 1,
                      borderColor: theme.colors.primary,
                      borderRadius: sizeHelper.calWp(20),
                    }}
                  >
                    <View
                      style={{ ...appStyles.row, gap: sizeHelper.calWp(15) }}
                    >
                      <View
                        style={{
                          backgroundColor: theme.colors.Input_field,
                          borderRadius: 999,
                          borderWidth: 1,
                          borderColor: theme.colors.black + "20",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: sizeHelper.calWp(17),
                        }}
                      >
                        <Image
                          style={{
                            width: sizeHelper.calWp(45),
                            height: sizeHelper.calWp(45),
                          }}
                          source={item.icon}
                          resizeMode="contain"
                        />
                      </View>
                      <CustomText text={item?.title} size={22} />
                    </View>
                    <TouchableOpacity
                      activeOpacity={0.6}
                      onPress={() => {
                        setTasksCategory((prevData) => {
                          return prevData.map((category) => {
                            if (category.id === item?.id) {
                              return {
                                ...category,
                                isSelected: !category.isSelected, // Toggle the isSelected status
                              };
                            } else {
                              return category;
                            }
                          });
                        });
                      }}
                      style={{
                        width: sizeHelper.calWp(40),
                        height: sizeHelper.calWp(40),
                        borderRadius: sizeHelper.calWp(10),
                        marginRight: sizeHelper.calWp(10),
                        borderWidth: 1,
                        borderColor: "#09AA3473",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: item?.isSelected
                          ? theme.colors.primary
                          : "#FFFCF2",
                      }}
                    >
                      {item?.isSelected && (
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
                  </View>
                );
              })}
            </View>
            <View style={{ width: "100%", gap: sizeHelper.calHp(15) }}>
              <CustomText
                text={"Select Date & Time"}
                fontWeight="600"
                fontFam={fonts.Poppins_Medium}
                size={22}
              />

              <View
                style={{ ...appStyles.rowjustify, gap: sizeHelper.calWp(30) }}
              >
                <DateTimeContainer
                  onPress={() => setIsOpenPicker(true)}
                  icon={icons.clock}
                  label={"Start with"}
                  value={"00:00 AM"}
                />
                <DateTimeContainer
                  onPress={() => setIsOpenPicker(true)}
                  icon={icons.clock}
                  label={"End with"}
                  value={"00:00 AM"}
                />
              </View>
            </View>
            <View />

            <CustomInput
              label={"Task Description"}
              focusedInput={focusedInput}
              textAlignVertical={"top"}
              height={170}
              // leftSource={icons.email}
              // value={values.email}
              // onChangeText={(txt: string) =>
              //   setValues({ ...values, email: txt })
              // }
            />
            <View
              style={{ ...appStyles.rowjustify, gap: sizeHelper.calWp(20) }}
            >
              <ActiveContainer
                isActive={isActive}
                title={"Active"}
                onPress={() => setIsActive("Active")}
              />
              <ActiveContainer
                title={"Inactive"}
                isActive={isActive}
                onPress={() => setIsActive("Inactive")}
              />
            </View>

            <CustomButton
              text="Add Banner"
              style={{ marginTop: sizeHelper.calHp(40) }}
            />
          </View>
        </KeyboardAwareScrollView>
      </ScreenLayout>

      <DatePicker
        modal={true}
        mode="date"
        locale="en_US"
        title={"Date of birth"}
        theme="dark"
        confirmText="Done"
        cancelText="Cancel"
        onCancel={() => setIsOpenPicker(false)} // Reset state on dismiss
        dividerColor={"#212325"}
        style={{
          width: 300, // Adjust the width as per your requirement
          height: 180,
          alignSelf: "center",
        }}
        open={isOpenPicker}
        date={new Date()} // Ensure it always shows a valid date
        onConfirm={(date) => {
          setIsOpenPicker(false);
        }}
      />
    </>
  );
};

export default AddNewPosterQRCampaign;

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
