import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import BlueInput from '../../components/Input/BlueInput';
import {COLORS, FONTS, icons, SIZES, images} from '../../constants/index';
import {
  cleanStatus,
  handleSignUp,
  signupInputHandle,
} from '../../store/actions/auth/SignupAction';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Spinner, Image} from 'native-base';
import {SignupValidation} from '../../validatin/SignupValidation';
import {default as s} from '../../styles/GlobalStyles';
import {justifyContent} from 'styled-system';
import {
  getuserDetails,
  handleProfileUpdate,
  profileInputHandle,
} from '../../store/actions/auth/ProfileAction';
import {useIsFocused} from '@react-navigation/native';
import Loader from '../../components/Loader/Loader';
import Headerbar from '../../components/Headerbar';

const ProfileScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const profile = useSelector(state => state.profile);
  const dataLoading = useSelector(state => state.profile.dataLoading);
  const isLoading = useSelector(state => state.profile.isLoading);
  const profileInput = useSelector(state => state.profile.inputData);
  

  useEffect(() => {
    dispatch(getuserDetails());
  }, [isFocused]);

  const handleInputChange = (inputName, inputValue) => {
    dispatch(profileInputHandle(inputName, inputValue));
  };
  const handleUpdate = () => {
    dispatch(handleProfileUpdate(profileInput));
  };

  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding * 2,
            justifyContent: 'center',
          }}
          onPress={() => navigation.goBack()}>
          <Image
            source={icons.back}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>

        {/* resturant name section */}
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: SIZES.padding * 3,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.lightGray3,
            }}>
           
          </View>
        </View>

        <TouchableOpacity
          style={{
            width: 50,
            paddingRight: SIZES.padding * 2,
            justifyContent: 'center',
          }}>
          <Image
            source={icons.list}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <>
      <Headerbar 
        menuname="Profile"
        back={true} 
        navigation={navigation} 
        icon="arrow-back"
      />
      {dataLoading ? (
        <Loader size="lg" />
      ) : (
        <View style={styles.container}>
         <View style={{
           justifyContent:'center',
           alignItems:'center',
           height:SIZES.height*0.1,
           backgroundColor:'#fff'
         }}>
           <Text style={{
             ...FONTS.h1
           }}>Profile Update</Text>
         </View>

          <View style={{padding: SIZES.padding2}}>
            <BlueInput
              label="First Name"
              onChangeText={value => handleInputChange('first_name', value)}
              value={profileInput.first_name}
            />
            <BlueInput
              label="Last Name"
              onChangeText={value => handleInputChange('last_name', value)}
              value={profileInput.last_name}
            />

            {!isLoading ? (
              <Button
                style={{marginTop: 20, height: 50,borderRadius:SIZES.radius}}
                large
                block
                onPress={() => handleUpdate()}>
                Save
              </Button>
            ) : null}
            {isLoading ? (
              <Button
                style={{
                  marginTop: SIZES.h4,
                  height: 50,
                }}
                isLoading
                isLoadingText="Submitting">
                Save ........
              </Button>
            ) : null}
          </View>
        </View>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});
export default ProfileScreen;
