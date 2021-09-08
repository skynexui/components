module.exports = {
  preset: "ts-jest",
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
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"],
};
