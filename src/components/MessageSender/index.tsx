import {
  Alert,
  FlatList,
  Image,
  Keyboard,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { appStyles } from "../../utils/GlobalStyles";
import sizeHelper from "../../utils/Helpers";
import CustomInput from "../Input";
import { theme } from "../../utils/Themes";
import icons from "../../utils/Constants/icons";

const MessageSender = ({
  
  onSend,
}: any) => {
  return (
    <>
      <View style={{ ...appStyles.rowjustify, gap: sizeHelper.calWp(10) }}>
        <CustomInput
          placeholder="Ask about tasks, rewards, or motivation..."
          width={"70%"}
        />
        <TouchableOpacity
          style={{
            height: sizeHelper.calHp(75),
            borderRadius: sizeHelper.calWp(20),
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme.colors.primary,
            flex:1
          }}
        >
            <Image
            style={{width:"40%",height:"40%"}}
            source={icons.mice}
            />

        </TouchableOpacity>
        <TouchableOpacity
        onPress={onSend}
          style={{
            height: sizeHelper.calHp(75),
            borderRadius: sizeHelper.calWp(20),
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme.colors.primary,
            flex:1
          }}
        >
            <Image
            style={{width:"40%",height:"40%"}}
            source={icons.send}
            />

        </TouchableOpacity>
      </View>
    </>
  );
};
export default MessageSender;

const styles = StyleSheet.create({});
