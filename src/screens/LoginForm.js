import React, { Component } from 'react';
import {
  Container, Header, Content, Item, Input, Button, Icon,
} from 'native-base';

export default class LoginForm extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Item rounded>
            <Icon active name="person" />
            <Input placeholder="Username" />
          </Item>
          <Item rounded>
            <Icon active name="lock" />
            <Input placeholder="Password" />
          </Item>
        </Content>
      </Container>

    );
  }
}

const styles = {
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    margin: 25,
    marginTop: 300,
  },
};
