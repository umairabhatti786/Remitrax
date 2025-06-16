import {
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
    StyleProp,
    ViewStyle,
  } from 'react-native';
  import sizeHelper, {screenWidth, screentHeight} from '../../utils/Helpers';
  import {fonts} from '../../utils/Themes/fonts';
  import {theme} from '../../utils/Themes';
  import icons from '../../utils/Constants/icons';
  import CustomText from '../Text';
  import {appStyles} from '../../utils/GlobalStyles';
  import images from '../../utils/Constants/images';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import CustomMenu from '../CustomMenu';
  

  const TabHeader = ({title,textColor,tintColor,isNotification}: any) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const navigation:any=useNavigation()
    return (
      <>
        <View
        style={{
          ...appStyles.rowjustify,
        }}>
        <TouchableOpacity
          onPress={() => setIsMenuVisible(!isMenuVisible)}
          style={{
            width: sizeHelper.calWp(100),
            height: sizeHelper.calWp(80),
            justifyContent: 'center',
            
          }}>
          <Image
            style={{
              width: sizeHelper.calWp(45),
              height: sizeHelper.calWp(45),
              resizeMode: 'contain',
              tintColor:tintColor || theme.colors.black,
            }}
            source={icons.drawer}
          />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center'}}>
          <CustomText
            text={title}
            fontWeight="600"
            fontFam={fonts.Poppins_SemiBold}
            color={textColor|| theme.colors.black}
            size={25}
          />
        </View>
        {
          isNotification?(
            <TouchableOpacity
            onPress={() => navigation.navigate('NotificationsScreen')}
            style={{
              width: sizeHelper.calWp(100),
              height: sizeHelper.calWp(80),
              justifyContent: 'center',
              alignItems:"flex-end"
            }}>
            <Image
              style={{
                width: sizeHelper.calWp(45),
                height: sizeHelper.calWp(45),
                resizeMode: 'contain',
                tintColor:tintColor || theme.colors.black,
              }}
              source={icons.notification}
            />
          </TouchableOpacity>

          ):(
            <View style={{width: 60}} />

          )
        }
      </View>

      <CustomMenu
        isModalVisible={isMenuVisible}
        setModalVisible={setIsMenuVisible}
      />
      </>
    );
  };
  export default TabHeader;
  
  const styles = StyleSheet.create({
   
  });
  