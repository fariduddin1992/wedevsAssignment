import React from 'react';
import {
  KeyboardAvoidingView,
  View,
  Dimensions,
  Text,
  Image,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
  BackHandler,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Button, Spinner} from 'native-base';
import { SIZES } from '../../constants';


const Loader = (props) => {
  return (
    <>
    
    {!props.miniLoad && 
      <View style={styles.controlContainer}>
        <Spinner status="primary" size="lg" />
      </View>
    }

    {props.miniLoad && 
      <View style={[styles.controlContainerSm, { alignItems: props.leftAligned ? 'flex-start' : styles.controlContainerSm.alignItems}]}>
        <Spinner status="primary" size="lg" />

        {
          props.text &&
          <Text style={{  textAlign: 'center' }}>{props.text}</Text>
        }
      </View>

      

    }
    </>
   
  );
};

const styles = StyleSheet.create({
  controlContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: SIZES.height*1,
  },
  controlContainerSm: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Loader;
