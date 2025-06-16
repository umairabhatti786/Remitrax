import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import CustomText from "../../components/Text";
import { theme } from "../../utils/Themes";
import sizeHelper from "../../utils/Helpers";
import { fonts } from "../../utils/Themes/fonts";
import { useSelector } from "react-redux";
import { getToken } from "../../redux/reducers/authReducer";
import StudentHome from "../../screens/Main/Student/StudentHome";
import icons from "../../utils/Constants/icons";
import StudentCalendar from "../../screens/Main/Student/StudentCalendar";
import AIChatBoot from "../../screens/Main/Student/AIChatBoot";
import MyTask from "../../screens/Main/Student/MyTask";
import images from "../../utils/Constants/images";
import CoacheHome from "../../screens/Main/Coaches/CoacheHome";
import MyStudent from "../../screens/Main/Coaches/MyStudent";
import AssignNewTask from "../../screens/Main/Coaches/AssignNewTask";
import MyAssignedTask from "../../screens/Main/Coaches/MyAssignedTask";

const CoachesBottomTab = ({ navigation }: any) => {
  const Bottom = createBottomTabNavigator();
  const token = useSelector(getToken);

  const TabItem = ({ focused, title, img }: any) => {
    return (
      <View style={[style.itemStyle]}>
        <Image
          resizeMode="contain"
          source={img}
          style={{
            ...style.img,
            tintColor: focused
              ? theme.colors.primary
              : theme.colors.black + "90",
          }}
        />
        <View
          style={{
            width: sizeHelper.calWp(25),
            height: sizeHelper.calWp(7),
            borderRadius: 999,
            right:sizeHelper.calWp(-2),
            backgroundColor: focused ? theme.colors.primary : "transparent",
          }}
        />
        {
            focused&&(
                <View
                style={{
                  width: sizeHelper.calWp(28),
                  height: sizeHelper.calWp(28),
                  borderRadius: sizeHelper.calWp(28),
                  position:"absolute",
                  backgroundColor:theme.colors.warning,
                  top:0,
                  right:sizeHelper.calWp(35),
                  zIndex:-10,
                }}
              />

            )
        }
       
      </View>
    );
  };

  return (
    <Bottom.Navigator
      initialRouteName="CoacheHome"
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        animationEnabled: false,
        gestureEnabled: true,
        keyboardHidesTabBar: true,

        cardStyleInterpolator: ({ current, next, layouts }: any) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
              ],
            },
          };
        },
        tabBarStyle: {
          backgroundColor: "transparent",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          height: sizeHelper.calHp(100),
          elevation:0,
          borderTopWidth: -1,
          paddingTop: sizeHelper.calHp(Platform.OS == "ios" ? 20 : 30),
          marginBottom: sizeHelper.calHp( Platform.OS == "ios"?50:20),
          marginHorizontal: sizeHelper.calWp(30),
        },
        tabBarBackground: () => (
          <Image
            source={images.bottom_tab_background}
            style={{ width: "100%", height: sizeHelper.calHp(100) }}
            resizeMode="stretch"
          />
        ),

        headerShown: false,
      })}
    >
      {/* Home Tab */}
      <Bottom.Screen
        name="CoacheHome"
        component={CoacheHome}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabItem
                title={"Home"}
                colors={theme.colors}
                img={focused ? icons.home_fill : icons.home}
                focused={focused}
              />
            );
          },
        }}
      />
      {/* Calendar Tab */}
      <Bottom.Screen
        name="MyAssignedTask"
        component={MyAssignedTask}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <TabItem
                colors={theme.colors}
                title={"Calendar"}
                img={focused ? icons.task_fill : icons.task}
                focused={focused}
              />
            );
          },
        }}
      />
      {/* AddEvent Tab */}

      <Bottom.Screen
        name="AIChatBoot"
        component={AIChatBoot}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("AIChatBoot")}
                style={{
                  height: sizeHelper.calHp(85),
                  width: sizeHelper.calHp(85),
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",

                  top: sizeHelper.calHp(Platform.OS == "ios" ? -90 : -80),
                }}
              >
                <Image
                  resizeMode="contain"
                  source={images.voice_recorder}
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                />
              </TouchableOpacity>
            );
          },
        }}
      />
      {/* Contacts Tab */}
      <Bottom.Screen
        name="MyStudent"
        component={MyStudent}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabItem
                colors={theme.colors}
                title={"My Cart"}
                img={focused ? icons.filled_student : icons.unfilled_student}
                focused={focused}
              />
            );
          },
        }}
      />
      {/* profile Tab */}
      <Bottom.Screen
        name="ChatBoot"
        component={AIChatBoot}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <TouchableOpacity
              onPress={() => navigation.navigate("AIChatBoot")}

              >
                 <TabItem
                colors={theme.colors}
                title={"AIChatBoot"}
                img={icons.AI_chat_boot}
                focused={focused}
              />

              </TouchableOpacity>
             
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};
export default CoachesBottomTab;

const style = StyleSheet.create({
  itemStyle: {
    width: sizeHelper.calWp(130),
    backgroundColor: "transparent", // Semi-transparent background
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    gap: sizeHelper.calHp(7),
  },
  img: {
    height: sizeHelper.calHp(33),
    width: sizeHelper.calHp(33),
  },
  tabBarStyle: {},
});
