import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../navigation/DrawerContent';
import Tabs from './tabs';
import { SalesOrder } from '../screens/Index';


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export function DrawerNavigation(props) {
  return (
    <Drawer.Navigator
      initialRouteName="Homes"
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="Homes"
        component={Tabs}
      />
     
      
    </Drawer.Navigator>
  );
}
