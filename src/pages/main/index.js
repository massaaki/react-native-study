import React from 'react';
// import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Form, Input, SubmitButton} from './styles';

export default function main() {
  // const navigation = useNavigation();

  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Adicionar usuario"
        />

        <SubmitButton>
          <Icon name="add" size={20} color="#fff" />
        </SubmitButton>
      </Form>

      {/* <Button
        title="Navigate to users"
        onPress={() => navigation.navigate('User')}
      /> */}
    </Container>
  );
}
