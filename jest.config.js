module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  modulePathIgnorePatterns: [
    "<rootDir>/dist-web/",
    "<rootDir>/dist-native/",
    "<rootDir>/examples/",
    "<rootDir>/packages/",
    "<rootDir>/scripts/",
    "<rootDir>/projects/",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"],
  verbose: true,
};
