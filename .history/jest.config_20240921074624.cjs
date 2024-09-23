module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}

export default {
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    testEnvironment: 'node',
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    extensionsToTreatAsEsm: ['.ts', '.tsx', '.js', '.jsx'], // Asegúrate de incluir las extensiones que usas
  };