import React from 'react';
import {Container} from './Container';
import {Text} from 'react-native';

export const Profile = ({route}) => {
  return (
    <Container>
      <Text>Profile {route.params.id_kvhc}</Text>
    </Container>
  );
};
