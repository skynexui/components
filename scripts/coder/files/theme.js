const core = require('../core/core');
const path = './lib/core/theme';

const theme = {
  breakpoints: require('../../../lib/core/breakpoints/breakpoints.json').breakpoints,
  colors: require('../../../lib/core/theme/colors/colors.json').colors,
  typography: require('../../../lib/core/theme/typography/typography.json'),
};

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
  },
  Theme_typography() {
    const contract = {
      name: 'Theme_typography',
      contract: theme.typography,
    };

    core.applyContract(contract, `${path}/theme.dart`, ([variantName, value]) => {
      // TODO: Finish here
      if(variantName === 'fontFamily') return `"${variantName}": "${value}",`;
      
      const output = Object.keys(value).reduce((acc, variant) => {
        const currentItem = value[variant];
        const props = Object.keys(currentItem);
        // console.log(props);
        return {
          ...acc,
          [variant]: {
            xs: {
              ...props.reduce((acc, propName) => {
                return {
                  ...acc,
                  [propName]: currentItem[propName].xs,
                }
              }, {}),
            },
            md: {
              ...props.reduce((acc, propName) => {
                return {
                  ...acc,
                  [propName]: currentItem[propName].xs,
                }
              }, {}),
            },
          },
        };
      }, {});
      // console.log(output);
      return `"${variantName}": {
        ${Object.entries(output).map(([variant, value]) => {
          return `"${variant}": {
            ${Object.entries(value).map(([propName, propValue]) => {
              // console.log(propValue);
              return `"${propName}": {
                ${Object.entries(propValue).map(([propTone, propValue]) => {
                  return `"${propTone}": "${propValue}",`;
                }).join('\n')}
              },`;
            }).join('\n')}
          },`;
        }).join('\n')}
      },`;
    });
  },
  Theme_typography_file() {
    const filePath = './lib/core/theme/typography';
    const defaultsContract = {
      name: 'Theme_typography_file_defaults',
      contract: theme.typography.variants,
    };
    core.applyContract(defaultsContract, `${filePath}/typography.dart`, ([variantName, value]) => {
      const xs = [];
      const md = [];
      Object.entries(value).forEach(([prop, value]) => {
        value.xs && xs.push(`${prop}: "${value.xs}"`);
        value.md && md.push(`${prop}: "${value.md}"`);
      })
      console.log(xs);
      return `
ThemeTypographySet ${variantName}DefaultXS = ThemeTypographySet(
  ${xs.join(',\n')}
);
ThemeTypographySet ${variantName}DefaultMD = ThemeTypographySet(
  ${md.join(',\n')}
);      
      `;
    });

    core.applyContract({
      name: 'Theme_typography_file_attributes',
      contract: theme.typography.variants,
    }, `${filePath}/typography.dart`, ([variantName, value]) => {
      return `
Map<Breakpoints, ThemeTypographySet> ${variantName} = {
  Breakpoints.xs: ${variantName}DefaultXS,
  Breakpoints.md: ${variantName}DefaultMD,
};
      `
    });

    core.applyContract({
      name: 'Theme_typography_file_attributes_map',
      contract: theme.typography.variants,
    }, `${filePath}/typography.dart`, ([variantName]) => {
      return `"${variantName}": ${variantName},`
    });
  }
}

module.exports = {
  generators,
};
