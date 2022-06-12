import React from 'react';
import {Text, View} from 'react-native';
import Cat from './Cat';

const Cafe = () => {
  return (
    <View>
      <Text>Welcome!</Text>
      <Cat />
      <Cat />
      <Cat />
    </View>
  );
};

export default Cafe;
