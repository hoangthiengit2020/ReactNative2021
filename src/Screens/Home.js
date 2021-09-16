import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Container} from './Container';
export const Home = props => {
  let {navigation, route} = props;
  console.log('route nagigation from home====== :', route);
  return (
    <Container>
      <Text style={styles.text}>Home</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Details', {
            // id: route.params.id_kvhc,
            name: 'from screen home1',
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
