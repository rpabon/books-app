require('@babel/register')({
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: ['dynamic-import-node'],
  extensions: ['.ts', '.tsx', '.js', '.png']
});
require('./src/server');
