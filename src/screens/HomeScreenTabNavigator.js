import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ScreenOne from './TabNavigator/ScreenOne';
import ScreenTwo from './TabNavigator/ScreenTwo';
import ScreenThree from './TabNavigator/ScreenThree';
import ScreenFour from './TabNavigator/ScreenFour';

export default class AppTabNavigator extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <View style={{ padding: 10 }}>
        <MaterialCommunityIcons name="home" size={24} onPress={() => navigation.navigate('DrawerOpen')} />
      </View>
    ),
  })

  render() {
    return (
      <HomeScreenTabNavigator screenProps={{ navigation: this.props.navigation }} />
    );
  }
}
const HomeScreenTabNavigator = new createBottomTabNavigator({
  ScreenOne: {
    screen: ScreenOne,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: () => (
        <MaterialCommunityIcons name="home" size={24} />
      ),
    },
  },
  ScreenTwo: {
    screen: ScreenTwo,
    navigationOptions: {
      tabBarLabel: 'Trip',
      tabBarIcon: () => (
        <MaterialCommunityIcons name="map-marker-radius" size={24} />
      ),
    },
  },
  ScreenThree: {
    screen: ScreenThree,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: () => (
        <Ionicons name="md-compass" size={24} />
      ),
    },
  },
  ScreenFour: {
    screen: ScreenFour,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: () => (
        <MaterialCommunityIcons name="settings" size={24} />
      ),
    },
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
