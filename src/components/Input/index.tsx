import {Image, TouchableOpacity, View,TextInput} from 'react-native';
import CustomText from '../Text';
import {InputProps} from '../../utils/Types';
import {theme} from '../../utils/Themes';
import {fonts} from '../../utils/Themes/fonts';
import sizeHelper from '../../utils/Helpers';
import {useState} from 'react';
import images from '../../utils/Constants/images';

const CustomInput = ({
  placeholder,
  keyboard,
  secureTextEntry,
  props,
  fontWeight,
  multiline,
  height,
  fontSize,
  value,
  onChangeText,
  onBlur,
  error,
  editable,
  color,
  maxLength,
  width,
  placeholderTextColor,
  borderRadius,
  backgroundColor,
  textAlign,
  textAlignVertical,
  paddingTop,
  onSubmitEditing,
  label,
  onFocus,
  focusedInput,
  inputKey,
  setFocusedInput,
  leftSource,
  disable,
  rightSource,
  rightIconPress,
  defaultValue,
  selection,
  onSelectionChange,
  textColor,
  onRightSource,
  borderColor
}: InputProps) => {
  const isFocused = focusedInput === inputKey;

  return (
    <View
      style={{
        ...props,
        width: width || '100%',
      }}>
      {label && (
        <View
          style={{
            marginBottom: sizeHelper.calHp(10),
          }}>
          <CustomText
            text={label}
            fontWeight="400"
            fontFam={fonts.Inter_Light}
          />
        </View>
      )}
       <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",

          paddingLeft: sizeHelper.calWp(20),
          paddingRight: sizeHelper.calWp(20),
          height: sizeHelper.calHp(height || 80),
          alignItems: "center",
          borderColor: borderColor|| theme.colors.highlght,
          borderWidth: 1,
          borderRadius: borderRadius || sizeHelper.calWp(15),
          backgroundColor: backgroundColor || theme.colors.Input_field,
        }}
      >
        <TextInput
          value={value}
          editable={editable}
          onSubmitEditing={onSubmitEditing}
          allowFontScaling={false} // Disable font scaling
          style={{
            fontSize: sizeHelper.calHp(21),
            width: rightSource ? "89%" : "98%",
            alignItems: "center",
            height: "100%",
            justifyContent: "center",
            textAlign:textAlign,
            textAlignVertical: textAlignVertical,
            paddingTop: paddingTop || 0,
            paddingVertical: 0, // Adjust as needed for centering
            fontFamily: fonts.Inter_Regular,
            fontWeight: fontWeight || "500",
            color: color || theme.colors.black,
            paddingRight: sizeHelper.calWp(rightSource ? 10 : 0),
          }}
          placeholder={placeholder ||"Type here..."}
          multiline={multiline}
          placeholderTextColor={
            placeholderTextColor || theme.colors.placeholder
          }
          keyboardType={keyboard}
          maxLength={maxLength}
          secureTextEntry={secureTextEntry || false}
          onChangeText={onChangeText}
          onBlur={onBlur}
          autoCapitalize="none"
        />
        {rightSource && (
          
          <TouchableOpacity
            onPress={onRightSource}
            disabled={!onRightSource}
            activeOpacity={0.3}
            style={{
              justifyContent: "center",
              alignItems: "flex-start",
              height: "100%",
              width: sizeHelper.calWp(50),
            }}
          >
            <Image
              source={rightSource}
              style={{
                width: sizeHelper.calWp(42),
                height: sizeHelper.calWp(42),
              }}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
        )}
   
      </View>
     

      {error && (
        <View
          style={{
            marginTop: sizeHelper.calHp(10),
            alignItems:"flex-end"
          }}>
          <CustomText size={20} text={error} color={theme.colors.red} />
        </View>
      )}
    </View>
  );
};
export default CustomInput;
