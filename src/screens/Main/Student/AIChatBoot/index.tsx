import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import sizeHelper from "../../../../utils/Helpers";
import ScreenLayout from "../../../../components/ScreenLayout";
import CustomHeader from "../../../../components/Header/inde";
import NotificationCard from "../../../../components/Notifications/NotificationCard";
import images from "../../../../utils/Constants/images";
import { theme } from "../../../../utils/Themes";
import CustomText from "../../../../components/Text";
import { fonts } from "../../../../utils/Themes/fonts";
import icons from "../../../../utils/Constants/icons";
import MessageSender from "../../../../components/MessageSender";
import ChatContainer from "../../../../components/ChatContainer";

const AIChatBoot = ({ navigation }: any) => {
  const [messages, setMessages] = useState<any>([]);
  const chatData = [
    {
      message: "Suggest my tasks for today",
      from: true,

      img: images.user_img,
    },
    {
      message: "Sure here’s your suggested tasks...",
      img: images.Ai_man,
      to: true,
    },
  ];
  const AskedAIBoot = ({ title, color }: any) => {
    return (
      <TouchableOpacity
        style={{
          width: "100%",
          paddingHorizontal: sizeHelper.calWp(30),
          paddingVertical: sizeHelper.calHp(16),
          borderRadius: sizeHelper.calWp(30),
          backgroundColor: color || theme.colors.card_yellow,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <CustomText
          text={title || '🎯 "Suggest my tasks for today"'}
          //   size={20}
        />
        <TouchableOpacity
          style={{
            width: sizeHelper.calWp(70),
            height: sizeHelper.calWp(70),
            borderRadius: sizeHelper.calWp(70),
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: theme.colors.primary,
            backgroundColor: theme.colors.white,
          }}
        >
          <Image
            style={{
              width: "100%",
              height: "100%",
            }}
            source={icons.arrow_up}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <ScreenLayout
        style={{
          flex: 1,
          paddingHorizontal: sizeHelper.calWp(40),
          gap: sizeHelper.calWp(30),
        }}
      >
        <CustomHeader title={"AI Chat"} isNotification />
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : null}
          keyboardVerticalOffset={
            Platform.OS === "ios" ? sizeHelper.calHp(100) : 0
          } // Adjust as per your header height
        >
          <View style={{ flex: 1,paddingBottom:sizeHelper.calHp(10) }}>
            <View style={{ flex: 1 }}>
              <FlatList
                data={messages}
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  gap: sizeHelper.calWp(50),
                  paddingBottom: sizeHelper.calHp(30),
                }}
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={() => {
                  return (
                    <View
                      style={{
                        paddingTop: "10%",
                        paddingHorizontal: sizeHelper.calWp(40),
                        gap: sizeHelper.calHp(10),
                      }}
                    >
                      <View style={{ marginBottom: sizeHelper.calHp(20) }}>
                        <Image
                          style={{
                            width: sizeHelper.calWp(430),
                            height: sizeHelper.calHp(380),
                            marginBottom: sizeHelper.calHp(-100),
                            // marginLeft: sizeHelper.calWp(20),
                          }}
                          source={images.Ai_man}
                          resizeMode="contain"
                        />
                        <View
                          style={{
                            width: "80%",
                            borderRadius: sizeHelper.calWp(35),
                            backgroundColor: theme.colors.black,
                            paddingHorizontal: sizeHelper.calWp(30),
                            paddingVertical: sizeHelper.calHp(15),
                            gap: sizeHelper.calHp(10),
                            alignSelf: "center",
                          }}
                        >
                          <CustomText
                            text={"Hey Anas! 👋 "}
                            color={theme.colors.white}
                            fontWeight="700"
                            fontFam={fonts.Inter_Bold}
                            //   size={20}
                          />
                          <CustomText
                            text={
                              "I'm Coach GT, your personal assistant. Let's crush today’s goals together! 🚀💪"
                            }
                            fontWeight="400"
                            fontFam={fonts.Inter_Light}
                            color={theme.colors.white}
                            size={18}
                          />
                        </View>
                      </View>
                      <AskedAIBoot />
                      <AskedAIBoot
                        title={'📅 "Help me plan my week"'}
                        color={theme.colors.dark_pink}
                      />
                      <AskedAIBoot
                        title={'🧘 "Give me quick wellness tips"'}
                        color={theme.colors.Input_field}
                      />
                    </View>
                  );
                }}
                renderItem={({ item, index }: any) => {
                  return (
                    <>
                      <ChatContainer item={item} />
                    </>
                  );
                }}
              />
            </View>
            <MessageSender
              onSend={() => setMessages(chatData)}
              // value={message}
              // navigation={navigation}
              // setValue={setMessage}
              // height={100}
              // multiline={true}
              // textAlignVertical="bottom"
              // onSend={onSendMessage}
            />
          </View>
        </KeyboardAvoidingView>
      </ScreenLayout>
    </>
  );
};

export default AIChatBoot;

const styles = StyleSheet.create({
  botttom: {
    gap: sizeHelper.calHp(20),
    paddingBottom: "10%",
  },
});
