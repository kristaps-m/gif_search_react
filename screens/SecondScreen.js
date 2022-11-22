//import {StatusBar} from 'expo-status-bar';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Button,
  StatusBar,
} from 'react-native';
import {StackActions} from '@react-navigation/native';
import {
  GiphyDialog,
  GiphySDK,
  GiphyGridView,
  GiphyContent,
} from '@giphy/react-native-sdk';

const theKey = 'fNAw1xO1xJNEvaK0E7xXGJDj93vICGqQ';
// Configure API keys
GiphySDK.configure({apiKey: theKey});

export default function SecondScreen({navigation, route}) {
  //let language = route.params.language;
  //let greeting = language === 'french' ? 'Bonjour' : 'Hello';

  // style={styles.container}
  return (
    <View>
      {/* <Text>{greeting}</Text> */}
      <Button
        title="Go to Third Screen"
        onPress={() => navigation.push('Third')}
      />
      <Button
        title="Go to Third Screen with Replace"
        onPress={() => {
          navigation.dispatch(StackActions.replace('Third'));
        }}
      />
      <StatusBar style="auto" />
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenHeight: {height: '100%'},
});
