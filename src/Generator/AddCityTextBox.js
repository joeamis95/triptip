import React, { Component } from 'react';
import {
  Container, Header, Content, Item, Input,
} from 'native-base';

export default class AddCityTextBox extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Item rounded>
            <Input placeholder="Search City" />
          </Item>
        </Content>
      </Container>
    );
  }
}
