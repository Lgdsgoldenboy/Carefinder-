// module.exports = {
//     preset: 'ts-jest',
//     testEnvironment: 'jsdom',
//     setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
//     moduleNameMapper: {
//       '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
//     },
//   };

import type {Config} from 'jest';

const config: Config = {
  verbose: true,
};

export default config;