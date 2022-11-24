import {StyleSheet, SafeAreaView, View, Button, StatusBar} from 'react-native';
import {StackActions} from '@react-navigation/native';
import CustomButton from '../src/CustomButton';
import {
  GiphyDialog,
  GiphySDK,
  GiphyGridView,
  GiphyContent,
} from '@giphy/react-native-sdk';

const theKey = '_enter_your_giphy_api_key_here_';

GiphySDK.configure({apiKey: theKey});

export default function GiphyScreen({navigation, route}) {
  return (
    <View>
      <CustomButton title="Home Page!" onPress={() => navigation.popToTop()} />
      <CustomButton
        title="About Page!"
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
