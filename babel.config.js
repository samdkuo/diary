process.env.EXPO_ROUTER_APP_ROOT = "../../src";

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [["module:react-native-dotenv"]],
  };
};
