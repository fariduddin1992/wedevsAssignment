import React, {useEffect} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Input, Button} from 'native-base';
import {COLORS, FONTS, icons, SIZES, images} from '../../constants';
import BlueInput from '../../components/Input/BlueInput';
import {useDispatch, useSelector} from 'react-redux';
import {
  handleLogin,
  inputAddHandling,
} from '../../store/actions/auth/LoginAction';
import {LoginInputValidation} from '../../validatin/LoginValidation';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const [securedText, setSecuredText] = React.useState(true);

  const inputData = useSelector(state => state.auth.inputData);
  const loginState = useSelector(state => state.auth);

  useEffect(() => {
    if (loginState.status && loginState.isLogin) {
      navigation.navigate('home');
    }
  }, [loginState]);

  const handleInputChange = (inputName, inputValue) => {
    dispatch(inputAddHandling(inputName, inputValue));
  };
  const handleSubmit = () => {
    let validation = LoginInputValidation(inputData);
    if (validation) {
      dispatch(handleLogin(inputData));
    }
  };
  const passwordSecured = () => {
    setSecuredText(!securedText);
  };
  const renderIcon = props => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon
        name={secureTextEntry ? 'eye-slash' : 'eye'}
        size={22}
        color="#878787"
      />
    </TouchableWithoutFeedback>
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.loginBackground}
        resizeMode="cover"
        style={styles.image}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 200,
            marginTop: 10,
          }}>
          <Image
            source={images.brandLogo}
            resizeMode="contain"
            style={{
              width: 80,
              height: 80,
            }}
          />
          <View
            style={{
              padding: SIZES.padding2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                ...FONTS.h1,
                color:COLORS.white
              }}>
              Sign In
            </Text>
          </View>
        </View>

        <View style={{padding: SIZES.padding2}}>
          <View style={{marginBottom: SIZES.body5}}>
            <BlueInput
              label="Username"
              onChangeText={value => handleInputChange('username', value)}
              value={`${inputData.username}`}
              style={{
                borderRadius: 10,
                padding: 10,
                ...styles.shadow,
              }}
            />
          </View>
          <View>
            <BlueInput
              label="Password"
              lblColor="#fff"
              style={{
                borderRadius: 10,
                ...styles.shadow,
                padding: SIZES.padding,
                
              }}
              onChangeText={value => handleInputChange('password', value)}
              value={`${inputData.password}`}
              returnKeyType={'go'}
              icon={securedText ? 'eye-slash' : 'eye'}
              // accessoryRight={renderIcon}
              secureTextEntry={securedText}
              onEyeChange={passwordSecured}
            />
          </View>
          {!loginState.isLoading ? (
            <Button
              style={{
                marginTop: SIZES.h4,
                height: 50,
                borderRadius: SIZES.radius,
              }}
              large
              block
              onPress={() => handleSubmit()}>
              Sign in
            </Button>
          ) : null}
          {loginState.isLoading ? (
            <Button
              style={{
                marginTop: SIZES.h4,
                height: 50,
                borderRadius: SIZES.radius,
              }}
              isLoading
              isLoadingText="Sign in ........">
              Sign ........
            </Button>
          ) : null}
        </View>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginBottom: 20,
          }}
          onPress={() => navigation.navigate('signup')}>
          <View>
            <Text
              style={{
                ...FONTS.body3,
                color:COLORS.white
              }}>
              Don't have an Account?Sign up
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
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  backgroundImage: {
    //flex: 1,
    alignSelf: 'stretch',
    width: null,
    overflow: 'hidden',
    zIndex: 0,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});
export default LoginScreen;
