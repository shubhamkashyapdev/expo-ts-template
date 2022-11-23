import { Text } from 'react-native'
import React from 'react'
import { GlobalClassName } from 'src/styles/global.styles'

const HeaderTitle = (props: any) => {
  return <Text className={GlobalClassName.title}>{props.children}</Text>
}

export default HeaderTitle
