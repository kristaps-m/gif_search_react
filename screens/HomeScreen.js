import React from 'react';
import {StyleSheet, View, StatusBar, ImageBackground} from 'react-native';
import CustomButton from '../src/CustomButton';

const HomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/pexels-blue.jpg')}
      style={styles.background}>
      <View style={{backgroundColor: 'darkblue'}}>
        <CustomButton
          title="Giphy Page!"
          onPress={() => navigation.navigate('Second')}
        />
        <CustomButton
          title="About Page"
          onPress={() => navigation.navigate('Third')}
        />
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screenHeight: {height: '100%'},
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 40,
    elevation: 3,
    backgroundColor: 'red',
  },
  background: {
    width: '100%',
    height: '100%',
  },
});

export default HomeScreen;
