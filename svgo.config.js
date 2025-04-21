export default {
  multipass: true,
  plugins: [
    'removeScriptElement',
    'removeStyleElement',
    'removeUnknownsAndDefaults',
    'removeUselessDefs',
    'removeXMLNS',
    'cleanupIds',
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
  ],
};
