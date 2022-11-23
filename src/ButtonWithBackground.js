import React from 'react';
import {
  Button,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const buttonWithBackground = ({props}) => {
  //const content = {};

  return (
    <TouchableOpacity onPress={() => props.onPress}>
      {
        <View style={[styles.button, {backgroundColor: 'black'}]}>
          <Text style={styles.text}>login</Text>
        </View>
      }
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 16,
    width: 200,
    borderRadius: 24,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default buttonWithBackground;
