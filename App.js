import React from 'react';
import { View, Text, YellowBox } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import FridgeListScreen  from './FridgeList';
import FridgeFormScreen from './FridgeForm';
// Before rendering any navigation stack
import { useScreens } from 'react-native-screens';
useScreens();

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  FridgeList:  {
    screen: FridgeListScreen,
  },
  FridgeForm:  {
    screen: FridgeFormScreen
  } 
}, {
  initialRouteName: 'Home'
});

const App = createAppContainer(AppNavigator);

export default App;



