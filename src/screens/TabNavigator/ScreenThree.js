import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SignUpScreen extends React.Component {
  render() {
    return (
      <View style={styles.container} />
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
