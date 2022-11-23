//import {StatusBar} from 'expo-status-bar';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import {ImageBackground} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <ImageBackground source={require('./assets/pexels-blue.jpg')}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Welcome to Giphy App',
            headerStyle: {
              backgroundColor: 'lightblue',
            },
          }}
        />
        <Stack.Screen name="Second" component={SecondScreen} />
        <Stack.Screen
          name="Third"
          component={ThirdScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // </ImageBackground>
  );
}

/**
 * <Stack.Screenname="Second" component={SecondScreen} />
 */
