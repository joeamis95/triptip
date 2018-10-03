import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Button,
} from 'react-native';

export default class WelcomeScreen extends React.Component {
  static navigationOptions = { header: null }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Login" onPress={() => this.props.navigation.navigate('LoginScreen')} />
        <Button title="Sign Up" onPress={() => this.props.navigation.navigate('SignUpScreen')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
