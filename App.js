import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import NewGameScreen from './screens/NewGameScreen'

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer theme={{ colors: { background: '#ffffff' } }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: 'orange',
            },
            headerTintColor: 'black',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="NewGame"
          component={NewGameScreen}
          options={{
            title: 'New Game',
            headerStyle: {
              backgroundColor: 'orange',
            },
            headerTintColor: 'black',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
