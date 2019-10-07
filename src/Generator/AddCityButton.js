import React, { Component } from 'react';
import {
  Container, Header, Content, Button, Text,
} from 'native-base';

export default class AddCityButton extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Button rounded>
            <Text>
Add City
            </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
