import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useNavigation } from "@react-navigation/native"
import { RootStackParamList } from "../types/common"
import { Button, View } from "react-native"
import { StatusBar } from "expo-status-bar"
import { GlobalClassName } from "src/styles/global.styles"

const Home = () => {
  type homeScreenProps = NativeStackNavigationProp<RootStackParamList, "Home">
  const navigation = useNavigation<homeScreenProps>()
  return (
    <View className={GlobalClassName.container}>
      <Button onPress={() => navigation.navigate("Settings")} title="Home" />
      <StatusBar style="auto" />
    </View>
  )
}
export default Home
