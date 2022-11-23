import {StyleSheet, Text, View, StatusBar} from 'react-native';
import CustomButton from '../src/CustomButton';

export default function ThirdScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>ABOUT PAGE</Text>
      <CustomButton title="Home page!" onPress={() => navigation.popToTop()} />
      <CustomButton
        title="Giphy Page!"
        onPress={() => navigation.navigate('Second')}
      />
      <StatusBar style="auto" />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Hi my name is Kristaps and I made this awesome Aplication using React
          native ...
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  textContainer: {
    marginTop: 40,
    padding: 20,
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
