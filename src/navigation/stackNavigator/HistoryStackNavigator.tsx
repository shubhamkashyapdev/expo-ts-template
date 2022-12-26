import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import History from 'src/screens/History'

const Stack = createNativeStackNavigator ()

const HistoryStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="History" component={History}/>
    </Stack.Navigator>
  )
}

export default HistoryStackNavigator
