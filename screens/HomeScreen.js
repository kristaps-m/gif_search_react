//import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Button, StyleSheet, SafeAreaView, View, StatusBar} from 'react-native';
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
    <View>
      <Button
        title="Giphy Page!"
        onPress={() => navigation.navigate('Second')}
      />
      <Button
        title="Navigate to 3? screen with English"
        onPress={() => navigation.navigate('Third', {language: 'english'})}
      />
      <StatusBar style="auto" />
    </View>
  );
};

// const styles = StyleSheet.create({
//   screenHeight: {height: '100%'},
// });

/**
 * title="Navigate to second screen with French"
 */

export default HomeScreen;
