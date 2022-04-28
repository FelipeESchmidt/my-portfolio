module.exports = {
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src/Components', '<rootDir>/src/Screens', '<rootDir>/src/Redux'],
  collectCoverageFrom: [
    '<rootDir>/src/Components/**/*.tsx',
    '<rootDir>/src/Screens/**/*.tsx',
    '<rootDir>/src/Redux/**/*.tsx',
  ],
};
