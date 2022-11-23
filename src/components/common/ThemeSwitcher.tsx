import { View, Pressable } from 'react-native'
import React from 'react'
import { useAtom } from 'jotai'
import { themeAtom } from 'src/store/themeStore'
import { MotiView } from 'moti'

const ThemeSwitcher = () => {
  const [, setThemeState] = useAtom(themeAtom)
  return (
    <View className="flex-row justify-around w-full mt-6">
      <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'timing' }}
      >
        <Pressable
          onPress={() => setThemeState('bg-purple-600')}
          className="h-16 w-16 rounded-full shadow-sm bg-purple-600"
        ></Pressable>
      </MotiView>
      <Pressable
        onPress={() => setThemeState('bg-slate-600')}
        className="h-16 w-16 rounded-full shadow-sm bg-slate-600"
      ></Pressable>
      <Pressable
        onPress={() => setThemeState('bg-pink-600')}
        className="h-16 w-16 rounded-full shadow-sm bg-pink-600"
      ></Pressable>
    </View>
  )
}

export default ThemeSwitcher
