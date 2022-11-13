import { Text } from "react-native"
import React from "react"
import { styles } from "src/styles/global.styles"

const HeaderTitle = (props: any) => {
  return <Text style={styles.title}>{props.children}</Text>
}

export default HeaderTitle
