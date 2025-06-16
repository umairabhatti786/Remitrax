import React, { useState } from "react";
import { StyleSheet, View, Animated, Image } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";import { theme } from "../../utils/Themes";
import { fonts } from "../../utils/Themes/fonts";
import CustomText from "../Text";
import sizeHelper, { screenWidth } from "../../utils/Helpers";
import { SwiperButtonType } from "../../utils/Types";
import icons from "../../utils/Constants/icons";
const SWIPE_THRESHOLD =screenWidth - sizeHelper.calWp(80); // Threshold for a successful swipe

const SwipeButton = ({
  title,
  onSwipe,
  bgColor,
  disable,
}: SwiperButtonType) => {
  const translateX = new Animated.Value(0);
  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: translateX } }],
    { useNativeDriver: true }
  );
  const onHandlerStateChange = ({ nativeEvent }: any) => {
    if (nativeEvent.state === State.END) {
      if (nativeEvent.translationX > 100) {
        onSwipe?.();
        setTimeout(() => {
          Animated.timing(translateX, {
            toValue: 0, // Reset position
            useNativeDriver: true,
          }).start();
        }, 500);
      } else {
        Animated.spring(translateX, {
          toValue: 0, // Reset position

          useNativeDriver: true,
        }).start();
      }
    }
  };
  const interpolatedBgColor = translateX.interpolate({
    inputRange: [0, SWIPE_THRESHOLD],
    outputRange: ["#157347", "#157347"], // Start with transparent, end with primary color
    extrapolate: "clamp",
  });
  return (
    <View style={styles.container}>
      <View style={styles.track}>
        <Animated.View
          style={[
            styles.trackContainer,
            { backgroundColor: interpolatedBgColor }, // Apply animated background color
          ]}
        >
          <CustomText
            text={title}
            size={21}
            fontFam="600"
            style={{marginLeft:sizeHelper.calWp(-150)}}
            fontWeight={fonts.Inter_SemiBold}
            color={theme.colors.white}
          />
        </Animated.View>
      </View>
      <PanGestureHandler
        onGestureEvent={!disable ? onGestureEvent : () => {}}
        onHandlerStateChange={onHandlerStateChange}
      >
        <Animated.View
          style={[
            styles.swipeButton,

            {
              transform: [
                {
                  translateX: translateX.interpolate({
                    inputRange: [0, sizeHelper.calWp(400)],
                    outputRange: [0, sizeHelper.calWp(400)],
                    extrapolate: "clamp", // Prevent overshooting
                  }),
                },
              ],
              backgroundColor: bgColor || "#157347",
            },
          ]}
        >
          <Image
            source={icons.nexr_arrow}
            resizeMode="contain"
            style={styles.img}
          />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default SwipeButton;

const styles = StyleSheet.create({
  container: {
    width: "80%",
    alignSelf:"center"

  },
  track: {
    height: sizeHelper.calHp(95),
    // width: SWIPE_THRESHOLD,
borderRadius:999,
    justifyContent: "center",
    alignItems: "flex-end",
    width: "100%",
    alignSelf:"center"

    
  },
  arrow: {
    fontSize: 24,
    color: "#A0A3A7",
  },
  swipeButton: {
    position: "absolute",
    width: sizeHelper.calWp(110),
    height: sizeHelper.calWp(110),
    borderRadius: sizeHelper.calWp(110),
    justifyContent: "center",
    alignItems: "center",
    marginLeft: sizeHelper.calWp(10),
    marginTop: sizeHelper.calHp(5),
    borderWidth:1,
    borderColor:theme.colors.white
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  img: {
    width: sizeHelper.calWp(55),
    height: sizeHelper.calWp(55),
    tintColor:theme.colors.white
  },
  trackContainer: {
    width: "100%",
    height: sizeHelper.calHp(115),
    alignItems: "center",
    justifyContent: "center",
    

    borderRadius:999,

  },
});
