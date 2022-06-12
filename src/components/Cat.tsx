import React, {useState} from 'react';
import {Image, Text, View, Button, ViewStyle } from "react-native";

type CatProps = {
  name: string;
};

const CatViewStyle: ViewStyle = {
  alignItems: 'center',
  margin: 10,
};

const CatImageStyle = {
  width: 100,
  height: 100,
};

const Cat = (props: CatProps) => {
  const [isHungry, setIsHungry] = useState(true);
  return (
    <View style={CatViewStyle}>
      <Image
        source={{uri: 'https://reactnative.dev/docs/assets/p_cat1.png'}}
        style={CatImageStyle}
      />
      <Text style={{margin: 10}}>
        Hello, I am {props.name} and I am {isHungry ? 'hungry' : 'full'}
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Pour me some milk, please!' : 'Thank You!'}
      />
    </View>
  );
};

export default Cat;
