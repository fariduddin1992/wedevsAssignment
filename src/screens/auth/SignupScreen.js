import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image,TouchableOpacity,ImageBackground} from 'react-native';
import BlueInput from '../../components/Input/BlueInput';
import {COLORS, FONTS, icons, SIZES, images} from '../../constants/index';
import {
  cleanStatus,
  handleSignUp,
  signupInputHandle,
} from '../../store/actions/auth/SignupAction';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from 'native-base';
import {SignupValidation} from '../../validatin/SignupValidation';


const SignupScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const signupData = useSelector(state => state.signup.inputData);
  const status = useSelector(state => state.signup.status);
  const isLoading = useSelector(state => state.signup.isLoading);

  useEffect(() => {
    dispatch(cleanStatus());
    if (status) {
      navigation.navigate('login');
    }
  }, [status]);

  const handleInputChange = (inputName, inputValue) => {
    dispatch(signupInputHandle(inputName, inputValue));
  };
  const handleSubmit = () => {
    let validation = SignupValidation(signupData);
    if (validation) {
      dispatch(handleSignUp(signupData));
    }
  };

  return (
    <View style={styles.container}>
       <ImageBackground
        source={images.signupbackground}
        resizeMode="cover"
        style={styles.image}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 100,
          marginTop: 5,
        }}>
        <Image
          source={images.brandLogo}
          resizeMode="contain"
          style={{
            width: 100,
            height: 100,
          }}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            ...FONTS.h1,
          }}>
          Sign Up
        </Text>
      </View>
      <View style={{padding: SIZES.padding2}}>
        <BlueInput
          label="Username"
          onChangeText={value => handleInputChange('username', value)}
        />
        <BlueInput
          label="Email"
          onChangeText={value => handleInputChange('email', value)}
        />
        <BlueInput
          label="Password"
          onChangeText={value => handleInputChange('password', value)}
        />
        {!isLoading ? (
          <Button
            style={{marginTop: 20, height: 50,borderRadius:SIZES.radius}}
            large
            block
            onPress={() => handleSubmit()}>
            Create
          </Button>
        ) : null}
        {isLoading ? (
          <Button
            style={{
              marginTop: SIZES.h4,
              height: 50,
            }}
            isLoading
            isLoadingText="Signing Up...">
           Signing Up...
          </Button>
        ) : null}
      </View>
      <TouchableOpacity 
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          padding: SIZES.padding2,
        }}
        onPress={()=>navigation.navigate('login')}
      >
        <View>
          <Text
            style={{
              ...FONTS.body3,
              color: COLORS.primary,
            }}>
            Already registered?
          </Text>
        </View>
        <View>
          <Text
            style={{
              ...FONTS.body3,
              color: COLORS.primary,
            }}>
            sign in
          </Text>
        </View>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});
export default SignupScreen;
