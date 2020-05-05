import React from 'react';
import {Text, Button, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import { Container } from './styles';

const main = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>MAIN</Text>
      <Button
        title="Navigate to users"
        onPress={() => navigation.navigate('User')}
      />
    </View>
  );
};

export default main;
