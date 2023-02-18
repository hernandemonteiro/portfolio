module.exports = {
  projects: [
    {
      preset: 'ts-jest',
      displayName: 'dom',
      testEnvironment: 'jsdom',
      testMatch: ['**/*.test.tsx'],
      verbose: true,
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
