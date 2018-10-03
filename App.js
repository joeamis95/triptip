import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Button,
} from 'react-native';
import {
  Container, Content, InputGroup, Input,
} from 'native-base';
import { createStackNavigator } from 'react-navigation';
import { Font, AppLoading } from 'expo';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import DrawerNavigator from './src/screens/DrawerNavigator';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
      MaterialCommunityIcons: require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = new createStackNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  LoginScreen: { screen: LoginScreen },
  SignUpScreen: { screen: SignUpScreen },
  DrawerNavigator: {
    screen: DrawerNavigator,
    navigationOptions: {
      header: null,
    },
  },
}, {
  navigationOptions: {
    gesturesEnabled: false,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
