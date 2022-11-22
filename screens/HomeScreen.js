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
        title="Navigate to second screen with French"
        onPress={() => navigation.navigate('Second', {language: 'french'})}
      />
      <Button
        title="Navigate to second screen with English"
        onPress={() => navigation.navigate('Second', {language: 'english'})}
      />
      <StatusBar style="auto" />
    </View>
  );
};

// const styles = StyleSheet.create({
//   screenHeight: {height: '100%'},
// });

export default HomeScreen;
