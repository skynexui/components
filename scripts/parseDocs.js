/* eslint-disable @typescript-eslint/no-var-requires */
const { readdirSync, readFileSync, writeFileSync } = require('fs');
const pkg = require('../package.json');
// ============================================================================

readdirSync('./dist')
  .filter((filePath) => filePath.endsWith('.mdx'))
  .map((filePath) => {
    const fileContentDirty = readFileSync(`./dist/${filePath}`, 'utf8');
    let lock = true;
    const fileLines = [];

    fileContentDirty.split('\n').forEach((line) => {
      if(line.includes('.json')) {
        const variableName = line.split(' ')[1];
        fileLines.push(`import ${variableName} from '%META_DATA_PATH%/${variableName}.json';`);
      }
      if (line.includes('@lib/components')) {
        fileLines.push(line.replace('@lib/components', pkg.name));
        fileLines.push('\n');
      }
      if (line.startsWith('# ')) lock = false;
      if (lock) return;
      if (line.includes('<!-- > [Wanna test the props? To go Storybook]')) {
        fileLines.push(line.replace('<!-- ', '').replace(' -->', ''));
        return;
      }
      fileLines.push(line);
    });

    return {
      filePath,
      fileContent: fileLines.join('\n'),
    };
  })
  .forEach(({ filePath, fileContent }) => {
    writeFileSync(`./dist/${filePath}`, fileContent, 'utf8');
  });
