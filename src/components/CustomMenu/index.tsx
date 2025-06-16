import React, { useState } from "react";
import {
  useWindowDimensions,
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Image,
  Platform,
} from "react-native";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";
import CustomText from "../Text";
import { theme } from "../../utils/Themes";
import { fonts } from "../../utils/Themes/fonts";
import { useDispatch, useSelector } from "react-redux";
import icons from "../../utils/Constants/icons";
import sizeHelper from "../../utils/Helpers";
import images from "../../utils/Constants/images";
import { appStyles } from "../../utils/GlobalStyles";
import { getUserData } from "../../redux/reducers/authReducer";

interface Props {
  isModalVisible?: boolean;
  setModalVisible?: any;
  modalBackgroundColor?: any;
  setIsLogoutVisible?: any;
  signatureBottomSheetRef?: any;
}

const CustomMenu: React.FC<Props> = ({
  isModalVisible,
  setModalVisible,
  modalBackgroundColor,
  setIsLogoutVisible,
  signatureBottomSheetRef,
}) => {
  const windowWidth = useWindowDimensions().width;
  const [selectedMenu, setSelectedMenu] = useState(-1);
  const dispatch = useDispatch();
  const navigation: any = useNavigation();
  const auth = useSelector(getUserData);

  // if (auth?.role == "student") {
  //   navigation.navigate("StudentBottomTab");

  //   return;
  // }
  // if (auth?.role == "coache") {
  //   navigation.navigate("CoachesStack");

  //   return;
  // }
  // if (auth?.role == "parent") {
  //   navigation.navigate("ParentsStack");

  //   return;
  // }
  // if (auth?.role == "admin") {
  //   navigation.navigate("AdminsStack");

  //   return;
  // }

  const menuData = [
    {
      title: "Home",
      icon: icons.home_menu,

      onPress: (title: any) => {
        setModalVisible(false);
        navigation.navigate("StudentHome");
      },
    },

    {
      title: "Profile",
      icon: icons.user_menu,

      onPress: (title: any) => {
        setModalVisible(false);
        setTimeout(() => {
          navigation.navigate("ProfileScreen");
        }, 500);
      },
    },
    {
      title: "Rewards",
      icon: icons.trophy,

      onPress: (title: any) => {
        setModalVisible(false);
        setTimeout(() => {
          navigation.navigate("RewardsScreen");
        }, 500);
      },
    },

    {
      title: "My Tasks",
      icon: icons.task_menu,

      onPress: (title: any) => {
        setModalVisible(false);
        setTimeout(() => {
          navigation.navigate("MyTask");
        }, 500);
      },
    },
    {
      title: "Calendar",
      icon: icons.calendar_menu,

      onPress: (title: any) => {
        setModalVisible(false);
        setTimeout(() => {
          navigation.navigate("StudentCalendar");
        }, 500);
      },
    },
    {
      title: "AI Chat",
      icon: icons.Ai_chat_menu,

      onPress: (title: any) => {
        setModalVisible(false);
        setTimeout(() => {
          navigation.navigate("AIChatBoot");
        }, 500);
      },
    },
    {
      title: "Tier Progress",
      icon: icons.tier,

      onPress: (title: any) => {
        setModalVisible(false);
        setTimeout(() => {
          navigation.navigate("TierProgress");
        }, 500);
      },
    },

    {
      title: "NIL Dashboard",
      icon: icons.dashboard,

      onPress: (title: any) => {
        setModalVisible(false);
        setTimeout(() => {
          navigation.navigate("TierProgress");
        }, 500);
      },
    },
   
  ];


  const coacheData = [
    {
      title: "Home",
      icon: icons.home_menu,

      onPress: (title: any) => {
        setModalVisible(false);
        setTimeout(() => {
          navigation.navigate("CoacheHome")

        
        }, 500);
      },
    },

    {
      title: "Profile",
      icon: icons.user_menu,

      onPress: (title: any) => {
        setModalVisible(false);
        setTimeout(() => {
          navigation.navigate("ProfileScreen");
        }, 500);
      },
    },
   

    {
      title: "My Tasks",
      icon: icons.task_menu,

      onPress: (title: any) => {
        setModalVisible(false);
        setTimeout(() => {
          navigation.navigate("MyAssignedTask");
        }, 500);
      },
    },

    {
      title: "Studentss",
      icon: icons.student,

      onPress: (title: any) => {
        setModalVisible(false);
        setTimeout(() => {
          navigation.navigate("MyStudent");
        }, 500);
      },
    },
   
    {
      title: "AI Chat",
      icon: icons.Ai_chat_menu,

      onPress: (title: any) => {
        setModalVisible(false);
        setTimeout(() => {
          navigation.navigate("ChatBoot");
        }, 500);
      },
    },
   

   
   
  ];
  const parentsData = [
    {
      title: "Home",
      icon: icons.home_menu,

      onPress: (title: any) => {
        setModalVisible(false);
        setTimeout(() => {
          navigation.navigate("ParentsHome")

        
        }, 500);
      },
    },

    {
      title: "Profile",
      icon: icons.user_menu,

      onPress: (title: any) => {
        setModalVisible(false);
        setTimeout(() => {
          navigation.navigate("ProfileScreen");
        }, 500);
      },
    },
   

    {
      title: "My Child’s Tasks",
      icon: icons.task_menu,

      onPress: (title: any) => {
        setModalVisible(false);
        setTimeout(() => {
          navigation.navigate("MyYoungAdult");
        }, 500);
      },
    },

    {
      title: "Calendar",
      icon: icons.calendar_menu,

      onPress: (title: any) => {
        setModalVisible(false);
        setTimeout(() => {
          navigation.navigate("TaskCalendar");
        }, 500);
      },
    },
   
 
  ];
  const adminMenu = [
    {
      title: "Home",
      icon: icons.home_menu,

      onPress: (title: any) => {
        setModalVisible(false);
        setTimeout(() => {
          navigation.navigate("AdminHome",);
        }, 500);
       
      },
    },

    {
      title: "Manage Users",
      icon:icons.filled_users,

      onPress: (title: any) => {
        setModalVisible(false);
        setTimeout(() => {
          navigation.navigate("ManageUsers");
        }, 500);
      },
    },
    {
      title: "All Tasks",
      icon: icons.task_menu,

      onPress: (title: any) => {
        setModalVisible(false);
        setTimeout(() => {
          navigation.navigate("TasksOverview");
        }, 500);
      },
    },

    {
      title: "Rewards",
      icon: icons.task_menu,

      onPress: (title: any) => {
        setModalVisible(false);
        
        setTimeout(() => {
          navigation.navigate("RewardsCatalogue");
        }, 500);
      },
    },
  
  
    {
      title: "Analytics",
      icon: icons.analytics,

      onPress: (title: any) => {
        setModalVisible(false);
        setTimeout(() => {
          navigation.navigate("Analytics");
        }, 500);
      },
    },

    {
      title: "Brand Partners",
      icon: icons.brand_partners,

      onPress: (title: any) => {
        setModalVisible(false);
        setTimeout(() => {
          navigation.navigate("AdminsStack", {
            screen: "BrandPartners",
          });
        }, 500);
      },
    },
    {
      title: "Banners and Posters",
      icon: icons.banners_posters,

      onPress: (title: any) => {
        setModalVisible(false);
        setTimeout(() => {
          navigation.navigate("AdminsStack", {
            screen: "BannersAndPosters",
          });
        }, 500);
      },
    },

    {
      title: "Settings",
      icon: icons.filled_setting,

      onPress: (title: any) => {
        setModalVisible(false);
        setTimeout(() => {
          navigation.navigate("ManageSettings");
        }, 500);
      },
    },
  ];

  return (
    <>
      <Modal
        style={{
          flex: 1,
          margin: 0,
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor: "transparent",
          backgroundColor: isModalVisible ? "rgba(0,0,0,.2)" : "transparent",
        }}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        deviceWidth={windowWidth}
        isVisible={isModalVisible}
        onBackButtonPress={() => setModalVisible?.(false)}
        onBackdropPress={() => setModalVisible?.(false)}
        backdropColor="transparent"
        customBackdrop={
          <Pressable
            style={{ height: "100%", width: "100%" }}
            onPress={() => setModalVisible?.(false)}
          ></Pressable>
        }
      >
        <View style={styles.container}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setModalVisible(false)}
            style={{
              width: sizeHelper.calWp(180),
              height: sizeHelper.calWp(180),
              backgroundColor: theme.colors.white,

              position: "absolute",
              borderRadius: sizeHelper.calWp(180),
              right: sizeHelper.calWp(-60),
              top: sizeHelper.calHp(100),
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <Image
              style={{
                width: sizeHelper.calWp(43),
                height: sizeHelper.calWp(43),
                right: sizeHelper.calWp(20),
              }}
              source={icons.arrow_back}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Image
            style={{
              width: "100%",
              height: "80%",
              opacity: 0.3,
              position: "absolute",
              top: 0,
            }}
            source={images.menu_top_background}
            resizeMode="cover"
          />

          <Image
            style={{
              width: "100%",
              height: "30%",
              position: "absolute",
              bottom: sizeHelper.calWp(0),
            }}
            source={images.menu_bottom_background}
            // resizeMode="contain"
          />
          <View
            style={{
              flex: 1,
              gap: sizeHelper.calHp(15),
              paddingTop: sizeHelper.calHp(30),
            }}
          >
            <View
              style={{
                gap: sizeHelper.calHp(10),
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image style={styles.img_container} source={images.user_img} />
              <View style={{ gap: sizeHelper.calHp(5) }}>
                <CustomText
                  text={`Anas Ali`}
                  color={theme.colors.black}
                  textTransform="capitalize"
                  fontFam={fonts.Inter_Bold}
                  fontWeight="700"
                  size={24}
                />
                <CustomText
                  text={`$You're on track. Keep it up!`}
                  size={16}

                  //   size={14}
                />
              </View>
            </View>

            <View
              style={{
                gap: sizeHelper.calHp(20),
                marginTop: sizeHelper.calHp(50),
                width: "90%",
              }}
            >
              {(auth?.role === "student" ? menuData :auth?.role === "coache"?  coacheData:auth?.role=="parent"?parentsData: adminMenu).map(
                (item, index) => (
                  <View key={index} style={{ gap: sizeHelper.calHp(20) }}>
                    {index > 0 && (
                      <View
                        style={{
                          height: sizeHelper.calHp(1),
                          width: "100%",
                          backgroundColor: theme.colors.black + "50",
                        }}
                      />
                    )}

                    <TouchableOpacity
                      onPress={item?.onPress}
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: sizeHelper.calWp(20),
                        paddingHorizontal: sizeHelper.calWp(15),
                      }}
                    >
                      <View
                        style={{
                          ...appStyles.row,
                          gap: sizeHelper.calWp(20),
                          width: "100%",
                        }}
                      >
                        <TouchableOpacity
                                              onPress={item?.onPress}

                          style={{
                            ...styles.box,
                            backgroundColor: theme.colors.primary,
                          }}
                        >
                          <Image
                            style={{ ...styles.menu_img }}
                            source={item?.icon}
                          />
                        </TouchableOpacity>

                        <CustomText
                          text={item?.title}
                          fontWeight="600"
                          style={{ width: "90%" }}
                          fontFam={fonts.Inter_Medium}
                          color={theme.colors.black}
                          size={22}
                        />
                      </View>

                      <Image
                        style={{
                          width: sizeHelper.calWp(35),
                          height: sizeHelper.calWp(35),
                        }}
                        source={icons.nexr_arrow}
                      />
                    </TouchableOpacity>
                  </View>
                )
              )}
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
            }}
            activeOpacity={0.5}
            style={{
              flexDirection: "row",
              alignItems: "center",
              //   borderRadius: scale(5),
              gap: sizeHelper.calWp(20),
              paddingHorizontal: sizeHelper.calWp(15),
            }}
          >
            <TouchableOpacity style={styles.box}>
              <Image style={styles.menu_img} source={icons.logout} />
            </TouchableOpacity>
            <CustomText
              text={"Log Out"}
              fontWeight="600"
              fontFam={fonts.Inter_Medium}
              color={theme.colors.warning}
              size={23}
            />
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "60%",
    paddingTop: "15%",
    // marginTop:sizeHelper.calHp(00),
    backgroundColor: theme.colors.white,
    gap: sizeHelper.calWp(25),
    paddingBottom: sizeHelper.calHp(60),
    alignSelf: "flex-start",
    paddingHorizontal: sizeHelper.calWp(30),
  },
  box: {
    width: sizeHelper.calWp(70),
    height: sizeHelper.calWp(70),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.warning,
    borderRadius: sizeHelper.calWp(20),
  },
  menu_img: {
    width: "60%",
    height: "60%",
    tintColor: theme.colors.white,
  },
  img_container: {
    width: sizeHelper.calWp(100),
    height: sizeHelper.calWp(100),
    borderRadius: 999,
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  //   img: { width: "100%", height: "100%" },
});

export default CustomMenu;
