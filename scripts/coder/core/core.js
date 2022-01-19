/* eslint-disable prefer-regex-literals */
/* eslint-disable @typescript-eslint/no-var-requires */
const pathModule = require('path');
const fs = require('fs');

const demo = `
// %%[CODER_START]:StyleSheet_attributes%%
final double? width;
final double? width;
final double? width;
final double? width;
final double? width;
final double? width;
final double? width;
final double? width;
final double? width;
OLAAA
  // %%[CODER_END]:StyleSheet_attributes%%
  final double? width;
  final double? height;
`;

module.exports = {
  readFile(filePath, as = 'text') {
    const output = fs.readFileSync(
      pathModule.resolve(__dirname, '..', '..', '..', filePath),
      'utf8'
    );

    if (as === 'json') return JSON.parse(output);

    return output;
  },
  applyContract({ name, contract }, path, callback) {
    const file = this.readFile(path);
    let fileOutput = file;
    const REGEX_CODER_START = new RegExp(
      `(%%\\[CODER_START\\]:${name}%%)`,
      'gi'
    );
    const REGEX_CODER_CLEAR = new RegExp(
      `(%%\\[CODER_START\\]:${name}%%)([\\S\\s]*?)%%\\[CODER_END\\]:${name}%%`,
      'gmi'
    );
    fileOutput = fileOutput.replace(
      REGEX_CODER_CLEAR,
      `$1 \n// %%[CODER_END]:${name}%%`
    );

    Object.entries(contract).forEach(([key, value], index) => {
      const replacement = callback([key, value], index);
      fileOutput = fileOutput.replace(REGEX_CODER_START, `$1\n${replacement}`);
      fs.writeFileSync(path, fileOutput, 'utf8');
    });
  },
};
