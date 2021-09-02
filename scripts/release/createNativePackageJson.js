import chalk from 'chalk';
import { writeFileSync } from 'fs';
import { join } from 'path';
import pkg from '../../package.json';

const { log } = console;

log(chalk`{bgMagenta.white.bold [postVersionBump] Moving package.json to root - [START]}`);

const packageJSON = {
  ...pkg,
  name: '@skynexui/native',
  private: false,
};

const distWebPath = join(__dirname, '..', '..', './dist-native', 'package.json');
writeFileSync(
  distWebPath,
  `${JSON.stringify({
    ...packageJSON,
  }, null, 2)}\n`,
);
