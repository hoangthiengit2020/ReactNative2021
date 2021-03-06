import React from 'react';

import {Text, View} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createDrawerNavigator} from '@react-navigation/drawer';

import {
  SignIn,
  CreateAccount,
  Home,
  Search,
  Details,
  Search2,
  Profile,
} from './Screens';

const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStacks = createStackNavigator();
const SearchStacks = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStacks.Navigator>
    <HomeStacks.Screen name="Home" component={Home} />
    <HomeStacks.Screen
      name="Details"
      component={Details}
      options={({route}) => ({
        title: route.params.name,
      })}
    />
  </HomeStacks.Navigator>
);
const SearchStackScreen = () => (
  <SearchStacks.Navigator>
    <SearchStacks.Screen name="Search" component={Search} />
    <SearchStacks.Screen name="Search2" component={Search2} />
  </SearchStacks.Navigator>
);
// const ProfileStack = createDrawerNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Tabs.Navigator>
          <Tabs.Screen
            name="Home"
            component={HomeStackScreen}
            options={{headerShown: false}}
          />
          <Tabs.Screen
            name="Search"
            component={SearchStackScreen}
            options={{headerShown: false}}
          />
        </Tabs.Navigator>

        {/* <AuthStack.Navigator>
          <AuthStack.Screen
            name="SignIn"
            component={SignIn}
            options={{title: 'Sign_In'}}
          />
          <AuthStack.Screen
            name="CreateAccount"
            component={CreateAccount}
            options={{title: 'Create_Account'}}
          />
        </AuthStack.Navigator> */}
      </NavigationContainer>
    </>
    // <>
    //   <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    //     <Text>Hello World</Text>
    //   </View>
    // </>
  );
};

export default App;
