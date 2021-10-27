import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Text,
  Item,
  Input,
  Button,
  ListItem,
  CheckBox,
  Body,
  ZStack
} from 'native-base';
import {default as s} from '../../styles/GlobalStyles';
import { FONTS, SIZES } from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome'

const BlueInput = props => {
 
  let label = props.label == undefined || props.label !=="" ? true : false;
  let borderstyle = props.borderstyle == undefined ? false : true;
  let icon = props.icon == undefined ? false : true;
  return (
    <View>
      {label ? (
        <Text style={[{paddingBottom: 5, color: '#000',...FONTS.body4}]}>
          {props.label}
        </Text>
      ) : null}
      <View>
          <Input {...props} />
          {icon ? (
            <Icon
              size={20}
              name={props.icon}
              style={{
              color: '#000',
              position:'absolute',
              justifyContent:'center',
              alignItems:'center',
              right:5,
              marginTop:10,
              marginRight:8,
             
            }}
              onPress={props.onEyeChange}
            />
          ) : null}
         
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  inputBorder: {
    borderWidth: 1,
    borderColor: '#C7C7CC',
    borderRadius: 6,
    marginBottom: 10,
  },
});
export default BlueInput;
