import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Container} from './Container';
export const Home = ({navigation, route}) => {
  // console.log('route kvhc from home :', route);
  return (
    <Container>
      <Text style={styles.text}>Home</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Details', {
            // id: 22,
            name: 'from screen home',
          })
        }
      />
      <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
    </Container>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Lobster-Regular',
    fontSize: 30,
    color: 'red',
  },
});
