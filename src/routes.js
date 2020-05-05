// In App.js in a new project

import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './pages/main';
import User from './pages/user';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#7159c1'},
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{title: 'Dashboard'}}
      />
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  );
}
