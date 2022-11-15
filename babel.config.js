module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"],
    env: {
      production: {
        plugins: ["react-native-paper/babel"],
      },
    },
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            src: "./src",
          },
        },
      ],
      ["nativewind/babel"],
      ["react-native-reanimated/plugin"],
    ],
  }
}
