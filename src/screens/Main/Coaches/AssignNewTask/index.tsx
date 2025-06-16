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
import { appStyles } from "../../../../utils/GlobalStyles";
import CustomHeader from "../../../../components/Header/inde";
import { theme } from "../../../../utils/Themes";
import { taskCategoryData } from "../../../../utils/Data";
import DatePicker from "react-native-date-picker";
import images from "../../../../utils/Constants/images";

const AssignNewTask = ({ navigation,route }: any) => {
  const isEdit=route?.params?.isEdit
  const [focusedInput, setFocusedInput] = useState(null);
  const snapToPoints = ["70%", "65%"];
  const bottomSheetModalRef = useRef<any>(null);
  const [loading, setloading] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [selectedRule, setSelectedRule] = useState("Student");
  const [tasksCategory, setTasksCategory] = useState(taskCategoryData);
  const [isOpenPicker, setIsOpenPicker] = useState(false);
  const [selectedDay, setSelectedDay] = useState("");

  const studentData = [
    { label: "Student", value: "Student", id: 1 },
    { label: "Mentor", value: "Mentor", id: 2 },

    { label: "Parent", value: "Parent", id: 1 },
    { label: "Admin", value: "Admin", id: 2 },
  ];

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
          <CustomHeader title={isEdit?"Edit Task": "Assign New Task"} 
          isNotification={isEdit?false:true}
           />

          <View style={{ flex: 1, gap: sizeHelper.calWp(30) }}>
            <CustomDropDown
              placeholder={"select Rule"}
              label={"Select Student"}
              setValue={setSelectedRule}
              value={selectedRule}
              onSelect={(it: any) => {
                setSelectedRule(it?.value);
              }}
              data={studentData.map((item, _index) => {
                return {
                  id: item?.id,
                  label: item?.label,
                  value: item?.value,
                };
              })}
            />
            <CustomInput
              label={"Task Title"}
              // value={values.name}
            />
            <View style={{ width: "100%", gap: sizeHelper.calHp(15) }}>
              <CustomText
                text={"Task Category"}
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
              <DateTimeContainer
                onPress={() => setIsOpenPicker(true)}
                icon={icons.daily_calendar}
                label={"Select a Day"}
                value={"07/03/2025"}
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

            <TouchableOpacity
              onPress={() => navigation.navigate("AssignNewTask")}
              style={{
                width: "100%",
                height: sizeHelper.calHp(75),
                flexDirection: "row",
                gap: sizeHelper.calWp(30),
                alignItems: "center",
                justifyContent: "center",
                marginVertical: sizeHelper.calHp(20),

                borderRadius: sizeHelper.calWp(20),
                backgroundColor: theme.colors.primary,
              }}
            >
              <Image
                style={{
                  width: sizeHelper.calWp(25),
                  height: sizeHelper.calWp(25),
                }}
                source={icons.plus}
              />

              <CustomText
                text={"Assign Task"}
                fontFam={fonts.Inter_SemiBold}
                color={theme.colors.white}
                fontWeight="600"
                size={23}
              />
            </TouchableOpacity>
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

export default AssignNewTask;

const styles = StyleSheet.create({
  botttom: {
    gap: sizeHelper.calHp(20),
    paddingTop: "10%",
  },
});
