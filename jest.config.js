module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupTestFrameworkScriptFile: '<rootDir>/src/setupTests.ts',
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  testMatch: ["**/?(*.)(spec|test).[jt]s?(x)"],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.jest.json"
    }
  },
};