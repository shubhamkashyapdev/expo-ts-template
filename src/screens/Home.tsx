import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../types/common'
import { Button, View, Pressable } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { GlobalClassName } from 'src/styles/global.styles'
import { useAtom } from 'jotai'
import { themeAtom } from 'src/store/themeStore'
import { ThemeSwitcher } from 'src/components/common'
import { Button as PaperButton } from 'react-native-paper'

const Home = () => {
  const [themeState] = useAtom(themeAtom)
  type homeScreenProps = NativeStackNavigationProp<RootStackParamList, 'Home'>
  const navigation = useNavigation<homeScreenProps>()
  return (
    <View className={`${GlobalClassName.container} ${themeState}`}>
      <PaperButton
        mode="contained"
      >
        Home
      </PaperButton>
      <StatusBar style="auto" />
    </View>
  )
}
export default Home
