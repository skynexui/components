const { defaults } = require("jest-config");

module.exports = {
  preset: "jest-expo",
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)",
  ],
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  modulePathIgnorePatterns: [
    "<rootDir>/dist-web/",
    "<rootDir>/dist-native/",
    "<rootDir>/examples/",
    "<rootDir>/packages/",
    "<rootDir>/scripts/",
    "<rootDir>/projects/",
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
    },
  },
  setupFilesAfterEnv: [
    "@testing-library/jest-dom",
    "@testing-library/jest-native/extend-expect",
  ],
  testEnvironment: "jsdom",
};
