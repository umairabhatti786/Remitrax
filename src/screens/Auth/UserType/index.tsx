import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import sizeHelper from "../../../utils/Helpers";
import ScreenLayout from "../../../components/ScreenLayout";
import CustomButton from "../../../components/Button";
import images from "../../../utils/Constants/images";
import icons from "../../../utils/Constants/icons";
import { useDispatch } from "react-redux";
import { setUserData } from "../../../redux/reducers/authReducer";

const UserType = ({ navigation }: any) => {
  const dispatch = useDispatch();
  return (
    <>
      <ScreenLayout
        style={{
          flex: 1,
          paddingHorizontal: sizeHelper.calWp(40),
          gap: sizeHelper.calWp(30),
        }}
      >
        <View
          style={{
            gap: sizeHelper.calHp(30),
            alignItems: "center",
            paddingTop: "30%",
            flex: 1,
          }}
        >
          <Image
            style={{
              width: sizeHelper.calWp(350),
              height: sizeHelper.calWp(350),
              alignSelf: "center",
            }}
            source={images.logo}
            resizeMode="contain"
          />

          <CustomButton
            text="Student"
            style={{ marginTop: sizeHelper.calHp(80) }}
            onPress={() => {
              dispatch(setUserData({ role: "student" }));
              navigation.navigate("LoginAndSignup");
            }}
            width={"100%"}
          >
            <Image source={icons.arrow_next} style={styles.next_icon} />
          </CustomButton>

          <CustomButton
            text="Coache"
            onPress={() => {
              dispatch(setUserData({ role: "coache" }));

              navigation.navigate("LoginAndSignup");
            }}
            width={"100%"}
          >
            <Image source={icons.arrow_next} style={styles.next_icon} />
          </CustomButton>
          <CustomButton
            text="Parent"
            onPress={() => {
              dispatch(setUserData({ role: "parent" }));

              navigation.navigate("LoginAndSignup");
            }}
            width={"100%"}
          >
            <Image source={icons.arrow_next} style={styles.next_icon} />
          </CustomButton>
          <CustomButton
            text="Admin"
            onPress={() => {
              dispatch(setUserData({ role: "admin" }));

              navigation.navigate("LoginAndSignup");
            }}
            width={"100%"}
          >
            <Image source={icons.arrow_next} style={styles.next_icon} />
          </CustomButton>
        </View>
      </ScreenLayout>
    </>
  );
};

export default UserType;

const styles = StyleSheet.create({
  botttom: {
    gap: sizeHelper.calHp(20),
    paddingBottom: "10%",
  },
  next_icon: {
    width: sizeHelper.calWp(40),
    height: sizeHelper.calWp(40),
  },
});
