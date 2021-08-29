import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Button,
  Platform,
  Switch,
} from 'react-native';
import LedOn from '../assets/ledOn.jpg';
import LedOff from '../assets/ledOff.jpg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const OnOffLed = () => {
  const [isEnabled, setImage] = useState(false);
  const toggleSwitch = () => {
    setImage(previousState => !previousState);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image source={isEnabled ? LedOn : LedOff} style={styles.img} />
      {/* <Button
        title={'Bật / tắt đèn ' + 'trên: ' + Platform.OS}
        onPress={toggleSwitch}
      /> */}
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </SafeAreaView>
  );
};
export default OnOffLed;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'yellow',
  },
  img: {
    width: windowWidth,
    height: (windowWidth * 925) / 631,
    // resizeMode: 'contain',
  },
});
