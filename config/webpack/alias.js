const path = require('path');
const tsconfig = require('../../tsconfig');

const { paths, baseUrl } = tsconfig.compilerOptions;
const aliases = {};

Object.keys(paths).forEach((item) => {
  const key = item.replace('/*', '');
  aliases[key] = path.resolve(baseUrl,paths[item][0].replace('/*', ''));
});

module.exports = aliases;