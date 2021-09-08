module.exports = {
  preset: "ts-jest",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  modulePathIgnorePatterns: [
    "/dist-web/",
    "/dist-native/",
    "/examples/",
    "/packages/",
    "/scripts/",
    "/projects/",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"],
  verbose: true,
  transform: {
    "\\.(tsx)$": "/packages/src/index.js",
  },
};
