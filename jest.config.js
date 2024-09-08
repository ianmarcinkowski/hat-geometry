/** @type {import("ts-jest").JestConfigWithTsJest} */

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  // globalSetup: "<rootDir>/jest-setup-global.ts",
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  }
}