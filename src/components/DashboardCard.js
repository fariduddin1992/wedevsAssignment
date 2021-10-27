import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Box,
  Heading,
  Icon,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS, FONTS, SIZES} from '../constants';

const DashboardCard = (props) => {

  let bgColor = props.bgColor == undefined || props.bgColor == null ? "#957484":props.bgColor
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        padding: SIZES.padding2,
        shadow: styles.shadow,
        height:80,
        justifyContent:'center',
        backgroundColor:bgColor,
        margin:2,
        borderRadius:SIZES.simpleRadious
        
      }}>
      <Text style={{
        ...FONTS.h4,
        color:COLORS.white
      }}>All Time Revenue</Text>
      <Text style={{
        ...FONTS.body4,
        color:COLORS.white
      }}>Earning</Text>
      <Text style={{
        ...FONTS.body4,
        color:COLORS.white
      }}>120000</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});
export default DashboardCard;
