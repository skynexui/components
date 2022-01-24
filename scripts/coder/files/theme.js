const core = require('../core/core');
const path = './lib/core/theme';

const theme = {
  breakpoints: require('../../../lib/core/breakpoints/breakpoints.json').breakpoints,
  colors: require('../../../lib/core/theme/colors/colors.json').colors,
}

const generators = {
  Theme_breakpoints() {
    const contract = {
      name: 'Theme_breakpoints',
      contract: theme.breakpoints,
    };

    core.applyContract(contract, `${path}/theme.ts`, ([colorName, value]) => {
      return `${colorName.replace('Breakpoints.', '')}: ${value},`;
    });

    core.applyContract(contract, `${path}/theme.dart`, ([colorName, value]) => {
      return `"${colorName}": "${value}",`;
    });
  },
  Theme_colors() {
    const contract = {
      name: 'Theme_colors',
      contract: theme.colors,
    };

    core.applyContract(contract, `${path}/theme.ts`, ([colorName, value]) => {
      return `${colorName}: {
        ${Object.entries(value).map(([colorTone, color]) => `${colorTone}: '${color}',`).join('\n')}
      },`;
    });

    core.applyContract(contract, `${path}/theme.dart`, ([colorName, value]) => {
      return `"${colorName}": {
        ${Object.entries(value).map(([colorTone, color]) => `"${colorTone}": "${color}",`).join('\n')}
      },`;
    });
  }
}

module.exports = {
  generators,
};
