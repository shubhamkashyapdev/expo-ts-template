// import "react-native-reanimated"
import { AppRegistry } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from './src/types/common'
import { HomeScreen, SettingsScreen } from 'src/screens'
import { HeaderTitle } from 'src/components/common'
import { Provider as JotaiProvider } from 'jotai'
import { Provider as PaperProvider } from 'react-native-paper'
import Login from 'src/screens/Login'
import BottomTabNavigator from 'src/navigation/BottomTabNavigator'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import EmailAuth from 'src/screens/EmailAuth'

const Stack = createNativeStackNavigator<RootStackParamList>()
const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <JotaiProvider>
        <PaperProvider>
          <StatusBar animated={true} backgroundColor="#fff" style="auto" />
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerShown: true,
            }}
          >
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Login"
              component={Login}
            />
            <Stack.Screen name="EmailAuth" component={EmailAuth} />
            <Stack.Screen
              name="BottomTabNavigator"
              component={BottomTabNavigator}
            />
          </Stack.Navigator>
        </PaperProvider>
      </JotaiProvider>
    </NavigationContainer>
  )
}

AppRegistry.registerComponent('ExpoStarter', () => App)
