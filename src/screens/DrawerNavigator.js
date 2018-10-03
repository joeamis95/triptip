import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import HomeScreenTabNavigator from './HomeScreenTabNavigator';


const InnerStackNavigator = new createStackNavigator({
  TabNavigator: {
    screen: HomeScreenTabNavigator,
  },
});

const AppDrawerNavigator = new createDrawerNavigator({
  HomeScreen: { screen: InnerStackNavigator },
});

export default AppDrawerNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
