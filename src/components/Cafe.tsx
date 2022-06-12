import React from 'react';
import {Text, TextStyle, View, ViewStyle } from "react-native";
import Cat from './Cat';

const CafeStyle: ViewStyle = {
  flex: 1,
  flexDirection: 'column',
  borderColor: '#8DC',
  borderWidth: 5,
  padding: 10,
  margin: 0,
};

const HeaderStyle: TextStyle = {
  color: '#8DC',
  fontFamily: 'Comic Sans',
  fontSize: 26,
  fontWeight: 'bold',
  textAlign: 'center',
};

const Cafe = () => {
  return (
    <View style={CafeStyle}>
      <Text style={HeaderStyle}>Welcome to the cat cafè!</Text>
      <Cat name="Maru" />
      <Cat name="Jellylorum" />
      <Cat name="Spot" />
    </View>
  );
};

export default Cafe;
