import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EventList from './EventList';
import EventForm from './EventForm';
import { StackNavigator, } from 'react-navigation';

const App = StackNavigator({
  list: { screen: EventList },
  form: { screen: EventForm },
});

export default StackNavigator({
  list: {
    screen: EventList,
    navigationOptions: () => ({
      title: 'Food in the fridge.',      
    }),
  },
  form: {
    screen: EventForm,
    navigationOptions: () => ({
      title: 'Add a grocery item.'  
    }),
  },
});



