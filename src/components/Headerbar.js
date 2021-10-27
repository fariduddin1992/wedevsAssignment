import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import {
  VStack,
  HStack,
  Button,
  IconButton,
  Icon,
  NativeBaseProvider,
  Center,
  Box,
  StatusBar,
} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS, FONTS, icons, SIZES, images} from '../constants';

const Headerbar = (navigation) => {
 
  return (
    <>
      <StatusBar backgroundColor="#6200ee" barStyle="light-content" />
      <Box safeAreaTop backgroundColor="#6200ee" />
      <HStack
        bg="#6200ee"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center">
        <HStack space="4" alignItems="center">
          <IconButton
            icon={
              <Icon
                size="sm"
                as={<MaterialIcons name={navigation.icon} />}
                color="white"
               onPress={()=>navigation.back?navigation.navigation.goBack():navigation.navigation.openDrawer()}
              />
            }
          />
          <Text 
            style={{
                ...FONTS.body3,
                color:COLORS.white

            }}
          >
            {navigation?.menuname}
          </Text>
        </HStack>
        
      </HStack>
    </>
  );
};

export default Headerbar;
