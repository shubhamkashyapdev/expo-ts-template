import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useNavigation } from "@react-navigation/native"
import { RootStackParamList } from "../types/common"
import { Button, View } from "react-native"
import { StatusBar } from "expo-status-bar"
import { GlobalClassName } from "src/styles/global.styles"
import { themeAtom } from "src/store/themeStore"
import { useAtom } from "jotai"
import { ThemeSwitcher } from "src/components/common"

const Settings = () => {
  const [themeState] = useAtom(themeAtom)
  type settingScreenProps = NativeStackNavigationProp<
    RootStackParamList,
    "Settings"
  >
  const navigation = useNavigation<settingScreenProps>()
  return (
    <View className={`${GlobalClassName.container} ${themeState}`}>
      <Button
        onPress={() => navigation.navigate("Home")}
        title="Back To Home"
      />
      <ThemeSwitcher />
      <StatusBar style="auto" />
    </View>
  )
}
export default Settings
