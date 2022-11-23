//import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {
  Button,
  StyleSheet,
  SafeAreaView,
  View,
  StatusBar,
  ImageBackground,
} from 'react-native';
import ButtonWithBackground from '../src/ButtonWithBackground';
import CustomButton from '../src/CustomButton';
// import {
//   GiphyDialog,
//   GiphySDK,
//   GiphyGridView,
//   GiphyContent,
// } from '@giphy/react-native-sdk';

// const theKey = 'fNAw1xO1xJNEvaK0E7xXGJDj93vICGqQ';
// // Configure API keys
// GiphySDK.configure({apiKey: theKey});

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
        {/* <ButtonWithBackground />
      <CustomButton /> */}
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

/**
 * title="Navigate to second screen with French"
 */

export default HomeScreen;
