/* eslint-disable @typescript-eslint/no-var-requires */
const core = require('../core/core');

const path = './lib/core/stylesheet';

const generators = {
  StyleSheet_attributes() {
    core.applyContract(
      {
        name: 'StyleSheet_attributes',
        contract: core.readFile(`${path}/stylesheet.json`, 'json'),
      },
      `${path}/stylesheet.dart`,
      ([name, value]) => {
        return `final Map<Breakpoints,${value.type}> ${name};`;
      }
    );
  },
};

module.exports = {
  path,
  generators,
};
