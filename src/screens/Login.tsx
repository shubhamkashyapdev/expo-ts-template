import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View,Text,Pressable } from "react-native";
import { RootStackParamList } from "src/types/common";

const Login=()=>{
    type loginScreenProps = NativeStackNavigationProp<
    RootStackParamList,
    'Login'
  >
  const navigation = useNavigation<loginScreenProps>()
    return(
        <View className="flex-1 justify-center items-center">
            <Pressable onPress={()=>{navigation.navigate('BottomTabNavigator')}}>
            <Text>
                LOGIN
            </Text>
            </Pressable>
        </View>
    )
}
export default Login