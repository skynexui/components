/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-var-requires */
const {
  readdirSync,
  readFileSync,
  mkdirSync,
  existsSync,
  writeFileSync,
} = require('fs');
const data = require('../../docs.json');

const BASE_DIR = './dist';
const fileMap = new Map();
readdirSync(BASE_DIR)
  .filter((fileName) => fileName.endsWith('.mdx'))
  .forEach((fileName) => {
    const content = readFileSync(`${BASE_DIR}/${fileName}`, 'utf8').replace(
      /\[WIP\]/g,
      'WIP'
    );
    fileMap.set(fileName.toLowerCase(), {
      fileName,
      title: content
        .split('\n')
        .find((line) => line.startsWith('# '))
        .replace('# ', '')
        .replace(/\[WIP\]/g, 'WIP'),
      content,
    });
  });

function writePages(currentData, path, depth = 0) {
  const keys = Object.keys(currentData);
  for (const i of keys) {
    const key = i;
    const isFolder = !key.includes('.');
    const isMDX = key.includes('.mdx');
    const isMetaFile = key === 'meta.json';
    const isAppJS = key === '_app.tsx';
    // console.log(currentData);
    console.log('key: ', key);
    console.log('path: ', path);
    console.log('depth: ', depth);

    if (isFolder) {
      const subPath = path ? `${path}/${key}` : key;
      console.log('Is folder, move down!');
      if (!existsSync(subPath)) {
        mkdirSync(subPath);
      }
      writePages(currentData[key], subPath, depth + 1);
    }

    if (isAppJS) {
      const content = readFileSync('docs/scripts/docs/_app.tsx', 'utf8');
      writeFileSync(`${path}/${key}`, content, 'utf8');
    }

    if (isMDX) {
      console.log('isMDX:', currentData[key]);
      console.log('MDX Path:', `${path}/${key}`);
      const resolvedPath = new Array(depth)
        .fill()
        .map(() => {
          return '..';
        })
        .join('/');

      const content = `---
title: ${fileMap.get(currentData[key].toLowerCase())?.title}
---
${`import { Canvas, Story, ArgsTable } from '${resolvedPath}/scripts/docs/defaults.tsx'\n`}
${fileMap.get(currentData[key]).content.replaceAll('%META_DATA_PATH%', () => `${resolvedPath}/scripts/docs/metadata`)}
      `;
      writeFileSync(`${path}/${key}`, content, 'utf8');
    }

    if (isMetaFile) {
      writeFileSync(
        `${path}/${key}`,
        JSON.stringify(currentData[key], null, 2),
        'utf8'
      );
    }
  }
}

writePages(data, 'docs');
