import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'native-base';
import LoginForm from './LoginForm';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginForm />

        <View style={SignInButton.container}>
          <Button rounded onPress={() => this.props.navigation.navigate('DrawerNavigator')}>
            <Text>
            Complete Login
            </Text>
          </Button>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

const SignInButton = {
  container: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'stretch',
    justifyContent: 'center',
    marginBottom: 200,
  },
};
