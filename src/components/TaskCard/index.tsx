import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";
import sizeHelper, { screenWidth, screentHeight } from "../../utils/Helpers";
import { fonts } from "../../utils/Themes/fonts";
import { theme } from "../../utils/Themes";
import icons from "../../utils/Constants/icons";
import CustomText from "../Text";
import { appStyles } from "../../utils/GlobalStyles";
import images from "../../utils/Constants/images";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../Button";

const TaskCard = ({
  selectedTab,
  item,
  onPress,
  onMarkDone,
  onInComplete,
  onVerifyTask,
  isEdit,
  onIsEdit,
}: any) => {
  console.log("ckdbckd", selectedTab);
  const navigation: any = useNavigation();
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: item?.main_color + "50",
          borderTopRightRadius: sizeHelper.calWp(10),
          borderBottomRightRadius: sizeHelper.calWp(10),
        }}
      >
        <View
          style={{
            width: sizeHelper.calWp(10),
            backgroundColor: item?.main_color,
            height: "100%",
          }}
        />
        <View
          style={{
            paddingHorizontal: sizeHelper.calWp(30),
            paddingTop: sizeHelper.calHp(15),
            paddingBottom: sizeHelper.calHp(15),
            gap: sizeHelper.calHp(15),
            width: "100%",
          }}
        >
          <View style={appStyles.rowjustify}>
          <CustomText
            text={item?.title}
            fontFam={fonts.Inter_SemiBold}
            color={item?.main_color}
            fontWeight="600"
          />
          {isEdit&&(
            <TouchableOpacity
            onPress={onIsEdit}
            style={{padding:sizeHelper.calWp(10)}}
            >
              <Image
                style={{
                  width: sizeHelper.calWp(40),
                  height: sizeHelper.calWp(40),
               
                }}
                source={icons.pencil}
              />

            </TouchableOpacity>

          )}

          </View>
         
          <View style={{ gap: sizeHelper.calHp(8), width: "100%" }}>
            <CustomText
              text={item?.des}
              fontFam={fonts.Inter_SemiBold}
              fontWeight="600"
              size={23}
            />
            <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
              <CustomText
                text={`Start ${item?.start_time}`}
                color={theme.colors.black + "80"}
                fontWeight="400"
                size={23}
              />
              <Image
                style={{
                  width: sizeHelper.calWp(70),
                  height: sizeHelper.calWp(30),
                }}
                source={icons.next_task}
                resizeMode="contain"
              />
              <CustomText
                text={`End ${item?.end_time}`}
                color={theme.colors.black + "80"}
                fontWeight="400"
                size={23}
              />
            </View>
            {item?.isVerified == false && (
              <View style={{ gap: sizeHelper.calHp(10) }}>
                <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
                  <CustomText
                    text={`Status:`}
                    color={theme.colors.black + "80"}
                    fontWeight="400"
                    size={21}
                  />

                  <CustomText
                    text={`${item?.status}`}
                    color={theme.colors.black}
                    size={21}
                    fontWeight="400"
                  />
                </View>

                <View style={{ ...appStyles.row }}>
                  <CustomText
                    text={"Total Rewards"}
                    color={theme.colors.black + "80"}
                    fontWeight="400"
                    size={23}
                  />
                  <Image
                    style={{
                      width: sizeHelper.calWp(30),
                      height: sizeHelper.calWp(30),
                      marginLeft: sizeHelper.calWp(20),
                      marginRight: sizeHelper.calWp(5),
                    }}
                    source={images.reward}
                    resizeMode="contain"
                  />
                  <CustomText
                    text={`+${item?.total_rewards}`}
                    color={theme.colors.black}
                    fontWeight="400"

                    //   size={}
                  />
                </View>
              </View>
            )}
            <View
              style={{
                width: "100%",
                height: sizeHelper.calHp(1),
                backgroundColor: theme.colors.black + "30",
              }}
            />

            {item?.isVerified == false ? (
              <>
                <View
                  style={{
                    ...appStyles.rowjustify,
                    marginTop: sizeHelper.calHp(10),
                  }}
                >
                  <CustomButton
                    bgColor={theme.colors.white}
                    borderWidth={1}
                    width={"48%"}
                    height={70}
                    size={23}
                    onPress={onInComplete}
                    borderColor={theme.colors.warning}
                    text="Incomplete Task"
                    borderRadius={15}
                    textColor={theme.colors.warning}
                  />
                  <CustomButton
                    bgColor={theme.colors.white}
                    borderWidth={1}
                    width={"48%"}
                    borderRadius={15}
                    height={70}
                    size={23}
                    borderColor={theme.colors.primary}
                    onPress={onVerifyTask}
                    text="Verify Task"
                    textColor={theme.colors.primary}
                  />
                </View>
              </>
            ) : (
              <View
                style={{
                  ...appStyles.rowjustify,
                  marginTop: sizeHelper.calHp(15),
                }}
              >
                <View style={{ ...appStyles.row }}>
                  <CustomText
                    text={"Total Rewards"}
                    color={theme.colors.black + "80"}
                    size={23}
                  />
                  <Image
                    style={{
                      width: sizeHelper.calWp(30),
                      height: sizeHelper.calWp(30),
                      marginLeft: sizeHelper.calWp(20),
                      marginRight: sizeHelper.calWp(5),
                    }}
                    source={images.reward}
                    resizeMode="contain"
                  />
                  <CustomText
                    text={`+${item?.total_rewards}`}
                    color={theme.colors.black}
                    //   size={}
                  />
                </View>
                {item?.isMarkDone ? (
                  <>
                    <CustomButton
                      text={"Mark Done!"}
                      height={65}
                      size={21}
                      width={"39%"}
                      bgColor={theme.colors.black}
                      textColor={theme.colors.white}
                      borderRadius={999}
                    >
                      <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={onMarkDone}
                        style={{
                          width: sizeHelper.calWp(40),
                          height: sizeHelper.calWp(40),
                          borderRadius: sizeHelper.calWp(10),
                          borderWidth: 1,
                          borderColor: theme.colors.highlght,
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: item?.markDone
                            ? theme.colors.primary
                            : theme.colors.white,
                        }}
                      >
                        {item?.markDone && (
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
                    </CustomButton>
                  </>
                ) : (
                  <CustomButton
                    text={item?.status}
                    height={65}
                    size={21}
                    width={"37%"}
                    bgColor={item?.status_color + "30"}
                    textColor={item?.status_color}
                    borderRadius={999}
                  />
                )}
              </View>
            )}
          </View>
        </View>
        {/* <View style={{ ...appStyles.row, gap: sizeHelper.calWp(15) }}>
          <View>
            <View
              style={{
                width: sizeHelper.calWp(90),
                height: sizeHelper.calWp(90),
                backgroundColor: iconBgColor || theme.colors.Input_field,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: sizeHelper.calWp(90),
              }}
            >
              <Image
                style={{
                  width: sizeHelper.calWp(65),
                  height: sizeHelper.calWp(90),
                  position: "absolute",
                  top: sizeHelper.calHp(-8),
                  right: sizeHelper.calWp(5),
                }}
                source={icon}
              />
            </View>
          </View>

          <View style={{ gap: sizeHelper.calHp(10) }}>
            <CustomText
              text={title}
              fontFam={fonts.Inter_SemiBold}
              color={title_color ||theme.colors.white}
              fontWeight="600"
              size={23}
            />
            <CustomText
              text={label}
              fontFam={fonts.Inter_SemiBold}
              color={label_color|| "#FFFFFF80"}
              fontWeight="600"
            />
          </View>
        </View>
        {
          isBtn&&(
            <TouchableOpacity
            // onPress={onPress}
            style={{
              backgroundColor: theme.colors.white,
              flexDirection: "row",
              alignItems: "center",
              gap: sizeHelper.calWp(20),
              height: sizeHelper.calHp(57),
              width: "32%",
              justifyContent: "center",
              borderRadius: sizeHelper.calWp(20),
            }}
          >
            {
              btn_img&&(
                <Image
                style={{
                  width: sizeHelper.calWp(30),
                  height: sizeHelper.calWp(30),
                }}
                source={btn_img}
              />
  
              )
            }
          
            <CustomText
              text={btn_title}
              // size={23}
            />
          </TouchableOpacity>

          )
        } */}
      </View>
    </>
  );
};
export default TaskCard;

const styles = StyleSheet.create({});
