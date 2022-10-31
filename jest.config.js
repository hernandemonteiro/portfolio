export default {
  
  projects: [
    {
      preset: "ts-jest",
      displayName: 'dom',
      testEnvironment: 'jsdom',
      snapshotSerializers: ['enzyme-to-json/serializer'],
      testMatch: ['**/__tests__/**/*.test.tsx']
    },
    {
      preset: "ts-jest",
      displayName: 'node',
      testEnvironment: 'node',
      testMatch: [
        '**/__tests__/**/*.test.ts',
      ]
    },
  ],
  verbose: true,

};