import { View } from 'react-native'
import { Button } from 'react-native-paper'
import React, { useEffect } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from 'src/types/common'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  type loginScreenProps = NativeStackNavigationProp<
    RootStackParamList,
    'EmailAuth'
  >
  const navigation = useNavigation<loginScreenProps>()
  function handleNavigate(route: keyof RootStackParamList) {
    navigation.navigate(route)
  }
  async function handleGoogleAuth() {}
  function handleFacebookAuth() {}
  function handleTwitterAuth() {}
  function handleAppleAuth() {}

  return (
    <View className="flex-1 justify-center items-center bg-black">
      <View className="w-[90%] gap-y-10 justify-evenly">
        <Button mode="contained" onPress={() => handleNavigate('EmailAuth')}>
          Email Auth
        </Button>
        <Button mode="contained" onPress={() => handleGoogleAuth()}>
          Google Auth
        </Button>
        <Button mode="contained" onPress={() => handleGoogleAuth()}>
          Facebook Auth
        </Button>
        <Button mode="contained" onPress={() => handleGoogleAuth()}>
          Twitter Auth
        </Button>
        <Button mode="contained" onPress={() => handleGoogleAuth()}>
          Apple Auth
        </Button>
      </View>
    </View>
  )
}

export default Login
