import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

// const App: () => React$Node = () => {
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to react native</Text>
      </View>
    );
  }
}

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

// export default App;
