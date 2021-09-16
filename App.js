/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
import {NavigationContainer} from '@react-navigation/native';

import {createDrawerNavigator} from '@react-navigation/drawer';

import GlobalFont from 'react-native-global-font';
import {Profile} from './src/Screens/Profile';
import MainTabScreens from './src/Screens/MainTabScreens';

import {DrawerContents} from './src/Screens/DrawerContents';
import RootStackScreen from './src/Screens/RootStackScreen';

// const DetailsStack = createStackNavigator();
// const DetailStackScreen = () => {
//   return (
//     <DetailsStack.Navigator
//       screenOptions={{
//         headerTintColor: 'white',
//         headerStyle: {
//           backgroundColor: '#009388',
//         },
//         headerTitleStyle: {
//           fontWeight: 'bold',
//           flexDirection: 'row',
//           justifyContent: 'center',
//         },
//       }}>
//       <DetailsStack.Screen
//         name="Details"
//         component={Details}
//         initialParams={{id: 44477, name: 'default name'}}
//       />
//     </DetailsStack.Navigator>
//   );
// };

const Drawer = createDrawerNavigator();
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  return (
    <NavigationContainer>
      <RootStackScreen />
      {/* <Drawer.Navigator
        drawerStyle={{
          backgroundColor: '#fff',
          width: 250,
        }}
        drawerContentOptions={{
          activeTintColor: 'blue',

          itemStyle: {marginVertical: 8, marginHorizontal: 8},
        }}
        drawerContent={props => <DrawerContents {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreens} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
};

export default App;
