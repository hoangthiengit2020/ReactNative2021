/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Feather from 'react-native-vector-icons/Feather';
import {Home} from './src/Screens/Home';
import {Details} from './src/Screens/Details';
import GlobalFont from 'react-native-global-font';
import {Profile} from './src/Screens/Profile';
const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#009388',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          flexDirection: 'row',
          justifyContent: 'center',
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Overview',
          headerRight: () => (
            <Feather.Button
              name="menu"
              size={20}
              backgroundColor="#009388"
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="Details"
        component={Details}
        options={({route}) => ({
          title: route.params.name,
          headerRight: () => (
            <Feather.Button
              name="menu"
              size={20}
              backgroundColor="#009388"
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
          ),
        })}
        initialParams={({route}) => ({
          id: route.params.id,
          name: route.params.name,
        })}
      />
    </HomeStack.Navigator>
  );
};

const DetailStackScreen = () => {
  return (
    <DetailsStack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#009388',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          flexDirection: 'row',
          justifyContent: 'center',
        },
      }}>
      <DetailsStack.Screen
        name="Details"
        component={Details}
        initialParams={{id: 44477, name: 'default name'}}
      />
    </DetailsStack.Navigator>
  );
};

const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
