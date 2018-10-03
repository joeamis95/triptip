import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Button,
} from 'react-native';

export default class ScreenOne extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="Log Out" onPress={() => this.props.screenProps.navigation.navigate('WelcomeScreen')} />
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
