import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
    {
        Home:{ screen: HomeScreen,
            navigationOptions: ({ navigation }) => ({
                title: 'Map',
                headerStyle: {
                    backgroundColor: '#142422'
                },
                headerTitleStyle: {
                    color: '#c9aa71'
                },
                headerTintColor: { color: 'blue'},
            })
        },
    },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Champions',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
      Links:{ screen: LinksScreen,
          navigationOptions: ({ navigation }) => ({
              title: 'Map',
              headerStyle: {
                  backgroundColor: '#142422'
              },
              headerTitleStyle: {
                  color: '#c9aa71'
              },
              headerTintColor: { color: 'blue'},
          })
      },
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Map',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-link'} />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Favorite',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
