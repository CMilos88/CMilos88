// module.exports = function(config) {
//     config.set({
//       frameworks: ['jasmine'],
//       files: ['src/**/*.test.tsx'],
//       preprocessors: {
//         'src/**/*.test.tsx': ['webpack', 'sourcemap']
//       },
//       webpack: {
//         mode: 'development',
//         module: {
//           rules: [
//             {
//               test: /\.(ts|tsx)$/,
//               use: 'ts-loader',
//               exclude: /node_modules/,
//             }
//           ],
//           resolve: {
//             extensions: ['.ts', '.tsx', '.js']
//           }
//         }
//       },
//       reporters: ['progress'],
//       browsers: ['ChromeHeadless'],
//       singleRun: true,
//       coverageReporter: {
//         type: 'html',
//         dir: 'coverage/'
//       }
//     });
//   };
  
const path = require('path');

module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    files: ['src/**/*.test.tsx'],
    preprocessors: {
      'src/**/*.test.tsx': ['webpack', 'sourcemap']
    },
    webpack: {
      mode: 'development',
      resolve: {
        extensions: ['.ts', '.tsx', '.js']
      },
      module: {
        rules: [
          {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'ts-loader'
            }
          }
        ]
      },
      devtool: 'inline-source-map'
    },
    reporters: ['progress'],
    browsers: ['Chrome'],
    singleRun: false,
    autoWatch: true
  });
};
