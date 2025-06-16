import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import { theme } from "../../../utils/Themes";
import sizeHelper from "../../../utils/Helpers";
import icons from "../../../utils/Constants/icons";
import { appStyles } from "../../../utils/GlobalStyles";
import CustomText from "../../../components/Text";
import CustomHeader from "../../../components/Header/inde";
import CustomInput from "../../../components/Input";
import CustomButton from "../../../components/Button";
import NotificationCard from "../../../components/Notifications/NotificationCard";
import NotificationSettingCard from "../../../components/Notifications/NotificationSettingCard";

const NotificationSetting = ({ navigation }: any) => {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const [newPasssword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [NotificationData,setNotificationData]=useState(
    [
      {
        title: "Daily Task Reminder!",
        des: "Get a reminder every morning for today’s tasks",
        enabled:false
      },
      {
        title: "Streak Boost Notification",
        des: "We’ll nudge you if you're about to break a streak",
        enabled:false

      },
      {
        title: "Reward Alert",
        des: "Be notified when you're close to a redeemable reward",
        enabled:false

      },
      {
        title: "Weekly Progress Summary",
        des: "Get a quick summary every Sunday evening",
        enabled:false

      },
      {
        title: "Wellness Tips",
        des: "Light reminders for stretches, journaling, or rest",
        enabled:false

      },
    ]
  
  )




  const toggleSwitch = (index:any) => {
    const updated = [...NotificationData];
    updated[index].enabled = !updated[index].enabled;
    setNotificationData(updated);
  };
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
            title={"Notifications"}
            textColor={theme.colors.white}
            tintColor={theme.colors.placeholder + "80"}
          />
        </View>
        <View
          style={{
            paddingVertical: sizeHelper.calHp(50),
            paddingHorizontal: sizeHelper.calWp(30),
            flex: 1,
          }}
        >


        <FlatList
          data={NotificationData}
          style={{ flex: 1 }}
          contentContainerStyle={{
            gap: sizeHelper.calWp(20),
            paddingBottom: sizeHelper.calHp(30),
            // justifyContent: "space-between",
          }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }: any) => {
            return (
              <>
                <NotificationSettingCard
                  title={item?.title}
                  des={item?.des}
                  date={item?.date}
                  enabled={item?.enabled}
                  onSwitch={()=>toggleSwitch(index)}
                  
                />
              </>
            );
          }}
        />
        
        </View>
      </View>
    </>
  );
};
export default NotificationSetting;

const styles = StyleSheet.create({
  user_point_btn: {
    width: "43%",
    paddingVertical: sizeHelper.calHp(20),
    backgroundColor: theme.colors.white,
    borderRadius: 999,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: sizeHelper.calWp(10),
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowColor: theme.colors.black + "30",
    shadowRadius: 2,
    elevation: 5,
  },
});
