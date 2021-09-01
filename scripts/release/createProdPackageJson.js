import chalk from 'chalk';
import { writeFileSync } from 'fs';
import { join } from 'path';
import pkg from '../../package.json';
import spawnSyncWrapper from '../infra/spawnSyncWrapper';

const { log } = console;

log(chalk`{bgMagenta.white.bold [postVersionBump] Moving package.json to root - [START]}`);

const packageJSON = {
  web: {
    ...pkg,
    name: '@skynexui/web',
  }, 
  native: {
    ...pkg,
    name: '@skynexui/native',
  }
}

const distNativePath = join(__dirname, '..', '..', './dist-native', 'package.json');
writeFileSync(
  distNativePath,
  `${JSON.stringify({
    ...packageJSON.native,
    private: true,
  }, null, 2)}\n`,
);

const distWebPath = join(__dirname, '..', '..', './dist-web', 'package.json');
writeFileSync(
  distWebPath,
  `${JSON.stringify({
    ...packageJSON.web,
    private: true,
  }, null, 2)}\n`,
);
