import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import sizeHelper from "../../../utils/Helpers";
import ScreenLayout from "../../../components/ScreenLayout";
import ScreenLoader from "../../../components/ScreenLoader";
import CustomHeader from "../../../components/Header/inde";
import NotificationCard from "../../../components/Notifications/NotificationCard";

const NotificationsScreen = ({ navigation }: any) => {
  const NotificationData = [
    {
      title: "Reward Available!",
      des: "You can now redeem 100 points for Free Small Fries 🍟",
      date: "Today at 3:45 PM",
    },
    {
      title: "Task Completed!",
      des: "You earned 10 points for finishing ‘Study Biology’",
      date: "Today at 3:45 PM",
    },
    {
      title: "Don’t break your streak!",
      des: "You’re on a 4-day streak. Stay consistent 💪",
      date: "Today at 3:45 PM",
    },
    {
      title: "Task Updated",
      des: "Your coach updated ‘Evening Stretch’ to 6:30 PM",
      date: "Today at 3:45 PM",
    },
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
        <CustomHeader title={"Notifications"} />

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
                <NotificationCard
                  title={item?.title}
                  des={item?.des}
                  date={item?.date}
                />
              </>
            );
          }}
        />
      </ScreenLayout>
    </>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  botttom: {
    gap: sizeHelper.calHp(20),
    paddingBottom: "10%",
  },
});
