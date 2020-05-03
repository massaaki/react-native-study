import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import './config/ReactotronConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
});

console.tron.log('hello world 2');

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to react native</Text>
    </View>
  );
}
