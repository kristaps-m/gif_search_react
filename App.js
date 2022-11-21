import React from 'react';
import {Button, StyleSheet, SafeAreaView} from 'react-native';
import {
  GiphyDialog,
  GiphySDK,
  GiphyGridView,
  GiphyContent,
} from '@giphy/react-native-sdk';

const theKey = '_enter_your_api_key_here_';
// Configure API keys
GiphySDK.configure({apiKey: theKey});

const App = () => {
  return (
    <SafeAreaView>
      <Button
        title="Click Here to search GIF"
        onPress={() => GiphyDialog.show()}
      />
      <GiphyGridView
        content={GiphyContent.trendingGifs()}
        cellPadding={3}
        style={styles.screenHeight}
        // onMediaSelect={e => {
        //   console.log(e.nativeEvent.media);
        // }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenHeight: {height: '100%'},
});

export default App;
