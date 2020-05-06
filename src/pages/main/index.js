import React, {Component} from 'react';
// import {Button} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Form, Input, SubmitButton} from './styles';

export default class Main extends Component {
  // const navigation = useNavigation();
  state = {
    newUser: '',
    users: [],
  };

  handleAddUser = () => {
    console.tron.log(this.state.newUser);
  };

  render() {
    const {users, newUser} = this.state;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar usuario"
            value={newUser}
            onChangeText={(text) => this.setState({newUser: text})}
            returnKeyType="send"
            onSubmitEditing={this.handleAddUser}
          />

          <SubmitButton onPress={this.handleAddUser}>
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
}
