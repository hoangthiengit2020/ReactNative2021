import React from 'react';
import {Button, Text} from 'react-native-paper';
import {Container} from './Container';

const Explorer = () => {
  return (
    <Container>
      <Text>Explorer</Text>
      <Button title="" onPress={() => alert('onclick')} />
    </Container>
  );
};

export default Explorer;
