const fs = require('fs');
const pkg = require('../package.json');

console.log(`[Bump Flutter to: ${pkg.version}]`);

const pubspecUpdated = fs
  .readFileSync('./pubspec.yaml', { encoding: 'utf-8' })
  .split('\n')
  .map((line) => {
    if (line.startsWith('version')) return `version: ${pkg.version}`;
    return line;
  })
  .join('\n');

fs.writeFileSync('./pubspec.yaml', pubspecUpdated, { encoding: 'utf-8' });
