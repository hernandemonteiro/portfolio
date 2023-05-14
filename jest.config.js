// hide error messages about act() being unsupported in production build
const ignoredErrors = [
  /act(...) is not supported in production builds of React, and might not behave as expected./,
];
const consoleError = global.console.error;
global.console.error = (...args) => {
  if (ignoredErrors.some((el) => el.test(args[0]))) {
    return consoleError(...args);
  }
};

module.exports = {
  projects: [
    {
      preset: 'ts-jest',
      displayName: 'dom',
      testEnvironment: 'jsdom',
      testMatch: ['**/*.test.tsx'],
      transform: {
        '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
      },
      transformIgnorePatterns: ['/node_modules/'],
      moduleNameMapper: {
        '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
        '^.+\\.module\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      },
    },
    {
      preset: 'ts-jest',
      displayName: 'node',
      testEnvironment: 'node',
      testMatch: ['**/*.test.ts'],
    },
  ],
  verbose: true,
};
