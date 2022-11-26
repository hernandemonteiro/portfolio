module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/__tests__/front/jest-setup.js"],
  projects: [
    {
      preset: "ts-jest",
      displayName: "dom",
      testEnvironment: "jsdom",
      testMatch: ["**/__tests__/**/*.test.tsx"],
      verbose: true,
      transform: {
        // Use babel-jest to transpile tests with the next/babel preset
        // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
        "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
      },
      transformIgnorePatterns: ["/node_modules/"],
      moduleNameMapper: {
        "^.+\\.(css|less|scss)$": "identity-obj-proxy",
        "^.+\\.module\\.(css|less|scss|sass)$": "identity-obj-proxy",
      },
    },
    {
      preset: "ts-jest",
      displayName: "node",
      testEnvironment: "node",
      testMatch: ["**/__tests__/**/*.test.ts"],
    },
  ],
  verbose: true,
};
