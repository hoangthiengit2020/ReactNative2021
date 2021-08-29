import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconAnt from 'react-native-vector-icons/Feather';
const Header = () => {
  return (
    <>
      <TouchableOpacity>
        <IconAnt name="camera" size={30} color="black" />
      </TouchableOpacity>

      <Text style={styles.textHeader}> instagram</Text>
      <TouchableOpacity>
        <IconEntypo name="direction" size={30} />
      </TouchableOpacity>
    </>
  );
};

export default Header;
const styles = StyleSheet.create({
  textHeader: {
    fontSize: 25,
    textTransform: 'capitalize',
    fontFamily: 'August',
    color: 'orange',
  },
});
