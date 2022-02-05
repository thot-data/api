// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration


/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mode: 'development',
  exclude: [
    '**/node_modules/**/*',
    '*'
  ],
  mount: {
    src: '/'
  },
  plugins: [
    '@snowpack/plugin-typescript',
    '@nxtensions/tsconfig-paths-snowpack-plugin'
  ],
  packageOptions: {
    types: true,
    knownEntryPoints: [ 'index.ts' ]
  },
  devOptions: {
    port: 9000,
    openUrl: 'snowpack.html'
  },
  buildOptions: {
    out: 'dist'
  },
  // alias: {
  //   // using '@nxtensions/tsconfig-paths-snowpack-plugin' plugin to 
  //   // grab aliases from tsconfig.json instead. 
  //   // "@": "src",
  //   '@typedefs':'./src/typedefs',
  //   '@models': './src/models',
  //   '@factories': './src/factories'
  // }
};
