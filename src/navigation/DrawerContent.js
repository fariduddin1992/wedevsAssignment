import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {default as s} from '../styles/GlobalStyles';
import { COLORS,FONTS,icons,images, SIZES } from '../constants';
import {
  DrawerContentScrollView,
  DrawerItem,
  Drawer,
} from '@react-navigation/drawer';
import { SalesOrder } from '../screens/Index';
import { getData, removeStoreData } from '../helper/HelperFunction';
import { logoutAction } from '../store/actions/auth/LoginAction';
import {useDispatch, useSelector} from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';




export default function DrawerContent(props) {

  const dispatch = useDispatch();
  const [profileInfo, setProfileInfo] = useState(null);

  useEffect(() => {
   iniitialData();
  }, [])

  const iniitialData =async()=>{
    let userData = await getData('authData');
    setProfileInfo(userData.user_display_name); 
  }

  const logout = async () => {
    try {
      //remove from the storage
      let data = await removeStoreData('authData');
      dispatch(logoutAction());
      if(data.length==0){
        props.navigation.navigate('login');
      }
     
    } catch (e) {
      console.log('Done.');
    }
    console.log('Done.');
  };

  return (
    <DrawerContentScrollView {...props} >
      
      <View style={[styles.header]}>
        <View style={{
          padding:SIZES.padding,
          justifyContent:'center',
          alignItems:'center',
         
          }}>
          <View style={[s.flexBasis35]}>
            <Image
              style={[styles.avatar]}
              source={ images.avatar}              
            />
          </View>
          <View style={[s.flexBasis60, {paddingTop: 13}]}>
            <Text style={{...FONTS.body2,color:COLORS.white}}>
              {profileInfo}
             
            </Text>
          </View>
        </View>
        <View
          style={[
            {
              borderBottomColor: '#0000002E',
              borderBottomWidth: 1,
              marginTop: 25,
            },
          ]}></View>
      </View>
      
     
      <View style={{marginLeft: 15}}>
      <DrawerItem
        icon={(color, size) => (
          <Image
            style={[styles.services]}
            source={icons.box}
          />
        )}
        label={(focused, color) => (
          <Text style={{color: 'black', fontSize: 16}}>Products</Text>
        )}
        onPress={() => props.navigation.navigate('home')}
      />      
      <View style={{
        justifyContent:'flex-end'
      }}>
      <DrawerItem
        icon={(color, size) => (
          <Image
            style={[styles.services]}
            source={icons.logout}
          />
        )}
        label={(focused, color) => (
          <Text style={{color: 'black', fontSize: 16}}>Logout</Text>
        )}
        onPress={() => logout()}
      /> 
      </View>  

      </View>
          
           
    </DrawerContentScrollView>
  );
}
const styles = StyleSheet.create({
  header: {
    marginTop:-10,
    backgroundColor:'#6200ee',
    paddingTop:SIZES.padding,
    
  },

  services: {
    resizeMode: 'cover',
    height: 22,
    width: 22,
  },

  avatar: {
    resizeMode: 'cover',
    height: 70,
    width: 70,
  },
  leftStyle: {
    paddingTop: 20,
  },

  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  designation: {
    color: 'gray',
    fontSize: 16,
  },
});
