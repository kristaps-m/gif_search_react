import HomeScreen from './screens/HomeScreen';
import GiphyScreen from './screens/GiphyScreen';
import AboutScreen from './screens/AboutScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
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
        <Stack.Screen name="Second" component={GiphyScreen} />
        <Stack.Screen
          name="Third"
          component={AboutScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
