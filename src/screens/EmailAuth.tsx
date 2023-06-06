import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { RootStackParamList } from 'src/types/common'
import { auth } from '../../firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
  signOut,
} from 'firebase/auth'

const EmailAuth = () => {
  type loginScreenProps = NativeStackNavigationProp<RootStackParamList, 'Login'>
  const navigation = useNavigation<loginScreenProps>()
  const [email, setEmail] = React.useState<string>()
  const [password, setPassword] = React.useState<string>()

  async function login() {
    // navigation.navigate('BottomTabNavigator')
    if (!email || !password) return
    try {
      const signinRes = await signInWithEmailAndPassword(auth, email, password)
      const user = signinRes.user
      console.log({ signinUser: user })
      setEmail('')
      setPassword('')
    } catch (err) {
      if (err instanceof Error) {
        const errorMessage = err.message
        console.log(errorMessage)
      }
    }
  }
  async function register() {
    if (!email || !password) return
    try {
      const singupRes = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      const user = singupRes.user
      console.log({ singupUser: user })
      setEmail('')
      setPassword('')
    } catch (err) {
      if (err instanceof Error) {
        const errorMessage = err.message
        console.log(errorMessage)
      }
    }
  }

  async function userSignOut() {
    signOut(auth)
  }

  console.log()

  return (
    <View className="flex-1 justify-center bg-black p-4">
      <View className="rounded-md shadow-md gap-y-2 w-full">
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          label="Your Email"
          placeholder="Enter your email address"
        />
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          label="Password"
          placeholder="Enter your password"
        />
        {auth?.currentUser ? (
          <View className="mt-2">
            <Text className="text-white text-center">
              user: {auth.currentUser?.email}
            </Text>
            <Button onPress={userSignOut}>Sign Out</Button>
          </View>
        ) : (
          <View className="flex-row justify-center gap-4">
            <Button onPress={login}>Login</Button>
            <Button onPress={register}>Register</Button>
          </View>
        )}
      </View>
    </View>
  )
}
export default EmailAuth
