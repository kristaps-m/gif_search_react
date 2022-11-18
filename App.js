import React from 'react';
import {
  Text,
  View,
  Image,
  Button,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {
  GiphyDialog,
  GiphySDK,
  GiphyGridView,
  GiphyContent,
} from '@giphy/react-native-sdk';

const theKey = 'fNAw1xO1xJNEvaK0E7xXGJDj93vICGqQ';
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
        style={{height: 700}}
        onMediaSelect={e => {
          console.log(e.nativeEvent.media);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {color: 'red', fontSize: 30},
  img: {width: 100, height: 100, borderRadius: 100 / 2},
});

export default App;
