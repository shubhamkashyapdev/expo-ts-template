import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../types/common'
import { Button, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { GlobalClassName } from 'src/styles/global.styles'
import { themeAtom } from 'src/store/themeStore'
import { useAtom } from 'jotai'
import { ThemeSwitcher } from 'src/components/common'
import { MotiView } from 'moti'

const Profile = () => {
  const [themeState] = useAtom(themeAtom)
  type settingScreenProps = NativeStackNavigationProp<
    RootStackParamList,
    'Settings'
  >
  const navigation = useNavigation<settingScreenProps>()
  return (
    <View className={`${GlobalClassName.container} ${themeState}`}>
      <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'timing', duration: 400, delay: 200 }}
      >
        <Button
          title="Setting"
        />
      </MotiView>
      <ThemeSwitcher />
      <StatusBar style="auto" />
    </View>
  )
}
export default Profile
