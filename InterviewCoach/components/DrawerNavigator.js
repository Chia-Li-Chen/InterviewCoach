import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './components/HomeScreen';
import InSession from './components/InSession'

const WIDTH = Dimensions.get('window').width;
const DrawerConfig = {
  drawerWidth: WIDTH * 0.83,
}


const DrawerNavigator = createDrawerNavigator(
  {
    InSession: {
      Screen: InSession,
    }
  },
  DrawerConfig
)

export default createAppContainer(DrawerNavigator);
