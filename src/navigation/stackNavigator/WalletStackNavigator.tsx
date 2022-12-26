import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Wallet from 'src/screens/Wallet'

const Stack = createNativeStackNavigator ()

const WalletStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Wallet" component={Wallet}/>
    </Stack.Navigator>
  )
}

export default WalletStackNavigator
