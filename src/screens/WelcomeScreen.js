import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Button,
} from 'react-native';

export default class WelcomeScreen extends React.Component {
  static navigationOptions = { header: null }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Register Now" onPress={() => this.props.navigation.navigate('LoginScreen')} />
        <Button title="Sign In" onPress={() => this.props.navigation.navigate('SignUpScreen')} />
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
