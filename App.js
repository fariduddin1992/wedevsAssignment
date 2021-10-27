import React,{useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, OrderDelivery, Resturant, LoginScreen, SalesOrder} from './src/screens/Index';
import {DrawerNavigation} from './src/navigation/DrawerNavigation';
import { NativeBaseProvider } from 'native-base';
import SignupScreen from './src/screens/auth/SignupScreen';
import SplashScreen from 'react-native-splash-screen';

const stack = createNativeStackNavigator();

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <NativeBaseProvider>
      <StatusBar
        backgroundColor="#66818A"
      />
      <NavigationContainer>
        <stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="login">
         
          <stack.Screen name="login" component={LoginScreen} />
          <stack.Screen name="home" component={DrawerNavigation} />
          <stack.Screen name="signup" component={SignupScreen} />
        </stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
