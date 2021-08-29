import React from 'react';
import 'react-native-gesture-handler';
// import {
//   Text,
//   View,
//   StyleSheet,
//   SafeAreaView,
//   StatusBar,
//   Constants,
//   TextInput,
//   TouchableOpacity,
// } from 'react-native';
// import FaceBookLogin from './app/screens/FaceBookLogin';
// import FormRegister from './app/screens/FormRegister';
// import Instagram from './app/screens/Instagram';
// import LoginMomo from './app/screens/LoginMomo';
// import OnOffLed from './app/screens/OnOffLed';
// const App = () => {
//   return (
//     <>
//       {/* <LoginMomo /> */}
//       {/* <FaceBookLogin /> */}
//       {/* <OnOffLed /> */}
//       {/* <FormRegister /> */}
//       <Instagram />
//     </>
//   );
// };

// export default App;

import {Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {Icon} from 'react-native-vector-icons/Icon';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
});

export default createAppContainer(TabNavigator);
