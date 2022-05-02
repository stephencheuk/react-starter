//const webpack = require('webpack');
//module.exports = function override(config, env) {
//    config.resolve.fallback = {
//        url: require.resolve('url'),
//        fs: require.resolve('fs'),
//        assert: require.resolve('assert'),
//        crypto: require.resolve('crypto-browserify'),
//        http: require.resolve('stream-http'),
//        https: require.resolve('https-browserify'),
//        os: require.resolve('os-browserify/browser'),
//        buffer: require.resolve('buffer'),
//        stream: require.resolve('stream-browserify'),
//    };
//    config.plugins.push(
//        new webpack.ProvidePlugin({
//            process: 'process/browser',
//            Buffer: ['buffer', 'Buffer'],
//        }),
//    );
//
//    return config;
//}

const webpack = require('webpack');
const path = require('path');

module.exports = function override(config, env) {
  //do stuff with the webpack config...

  config.ignoreWarnings = [
    /Failed to parse source map/,
  ];

  config.plugins.push(
    new webpack.EnvironmentPlugin(['NODE_ENV', 'REACT_APP_API_URL'])
  );

  config.resolve = {
    ...config.alias,
    alias: {
      // 'components': path.resolve(__dirname, 'src/components'),
      // 'containers': path.resolve(__dirname, 'src/containers'),
      // 'store': path.resolve(__dirname, 'src/store'),
      // 'utils': path.resolve(__dirname, 'src/utils'),
      '~': path.resolve(__dirname, 'src/'),
    }
  };

  return config;
}

//module.exports = {
//  node: {
//    fs: 'empty'
//  },
//  stats: {
//    errorDetails: true
//  },
//  ignoreWarnings: [
//    /Failed to parse source map/,
//    (warning) => console.log("ignoreWarnings", warning),
//  ],
////  module:{
////    rules:[
////            {
////              test: /\.js$/,
////              enforce: 'pre',
////              use: [
////                    {
////                      //needed to chain sourcemaps.  see: https://webpack.js.org/loaders/source-map-loader/
////                      loader: 'source-map-loader',
////                      options: {
////                        filterSourceMappingUrl: (url, resourcePath) => {
////                          console.log({ url, resourcePath })
////                        // example:
////                        // {
////                        //  url: 'index.js.map',
////                        //  resourcePath: '/repos/xlib-wsl/common/temp/node_modules/.pnpm/https-proxy-agent@5.0.0/node_modules/https-proxy-agent/dist/index.js'
////                        // }
////
////                          //if (/.*\/node_modules\/.*/.test(resourcePath)) {
////                            return false
////                          //}
////                          return true
////                        }
////                      }
////                    }
////              ],
////            }
////          ]
////  }
//}

//module.exports = {
//  "browser": {
//      "fs": false
//  }
//}