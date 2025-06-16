import {Image, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import CustomText from '../Text';
import {fonts} from '../../utils/Themes/fonts';
import {theme} from '../../utils/Themes';
import {appStyles} from '../../utils/GlobalStyles';
import CustomButton from '../Button';
import sizeHelper, {screenWidth} from '../../utils/Helpers';
import images from '../../utils/Constants/images';

const WarningModal = ({
  modalVisible,
  setModalVisible,
  onCancel,
  onDone,
  title,
  des
}: any) => {
  return (
    <Modal
      isVisible={modalVisible}
      deviceWidth={screenWidth}
      onBackButtonPress={() => setModalVisible?.(false)}
      onBackdropPress={() => setModalVisible?.(false)}
      backdropColor="rgba(0,0,0,0.5)"
      style={{flex: 1}}>
      <View style={styles.Container}>
        <Image
          style={{width: sizeHelper.calWp(180), height: sizeHelper.calWp(180)}}
          source={images.question}
        />
        <View
          style={{
            gap: sizeHelper.calHp(20),
            alignItems: 'center',
            paddingVertical: sizeHelper.calHp(20),
          }}>
          <CustomText
            text={title}
            fontFam={fonts.Poppins_SemiBold}
            fontWeight="600"
            size={23}
          />
          <CustomText
            style={{textAlign: 'center', }}
            text={des}
            color={theme.colors.text_black+"90"}
            size={22}
          />
        </View>
        <View style={{...appStyles.rowjustify, width: '100%'}}>
          <CustomButton
            height={68}
            bgColor={theme.colors.white}
            borderColor={theme.colors.warning}
            borderWidth={1}
            borderRadius={15}
            textColor={theme.colors.warning}
            width={'48%'}
            text={'Cancel'}
            onPress={onCancel}
          />
          <CustomButton
            width={'48%'}
            height={68}
            borderRadius={15}
            bgColor={theme.colors.primary}
            textColor={theme.colors.white}
            text={'Done'}
            onPress={onDone}
          />
        </View>
      </View>
    </Modal>
  );
};
export default WarningModal;
const styles = StyleSheet.create({
  Container: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    borderRadius: sizeHelper.calWp(40),
    paddingHorizontal: sizeHelper.calWp(30),
    paddingVertical: sizeHelper.calHp(20),
    gap: sizeHelper.calHp(20),
  },
});
