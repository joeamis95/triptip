import React, { Component } from 'react';
import {
  Container, Header, Content, Button, Text,
} from 'native-base';

export default class CityGeneratorButton extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Button block>
            <Text>
Primary
            </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
