import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

const Story = ({avatar, name}) => {
  return (
    <>
      <View style={styles.user}>
        <Image source={avatar} style={styles.avatar} />
        <Text style={styles.name}>{name}</Text>
      </View>
    </>
  );
};

export default Story;
const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    textAlign: 'center',
    color: '#666',
    fontFamily: 'Goldena',
    // fontSize: 25,
  },
  user: {
    backgroundColor: '#fafafa',
    alignItems: 'center',
    height: 80,
    paddingHorizontal: 15,
  },
});
