import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useNavigation } from "@react-navigation/native"
import { RootStackParamList } from "../types/common"
import { Button, View } from "react-native"
import { StatusBar } from "expo-status-bar"
import { GlobalClassName } from "src/styles/global.styles"

const Settings = () => {
  type settingScreenProps = NativeStackNavigationProp<
    RootStackParamList,
    "Settings"
  >
  const navigation = useNavigation<settingScreenProps>()
  return (
    <View className={GlobalClassName.container}>
      <Button
        onPress={() => navigation.navigate("Home")}
        title="Back To Home"
      />
      <StatusBar style="auto" />
    </View>
  )
}
export default Settings
