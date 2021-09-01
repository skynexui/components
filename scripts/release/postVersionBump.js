import { writeFileSync, readFileSync } from 'fs';
import { join } from 'path';

import chalk from 'chalk';

import spawnSyncWrapper from '../infra/spawnSyncWrapper';

const { log } = console;

const pkgPublished = JSON.parse(readFileSync(join(__dirname, '..', '..', 'dist-web', 'package.json')).toString());

log(chalk`{bgMagenta.white.bold [postVersionBump] Moving package.json to root - [START]}`);

spawnSyncWrapper('git', ['status']).log();

writeFileSync(
  join(__dirname, '..', '..', 'package.json'),
  `${JSON.stringify({
    ...pkgPublished,
    private: true,
  }, null, 2)}\n`,
);

spawnSyncWrapper('git', ['add', '-A']).log();
log(chalk`{bgMagenta.white.bold [postVersionBump] LOGGING CURRENT FILE CHANGES}`);
spawnSyncWrapper('git', ['status']).log();
log(chalk`{bgMagenta.white.bold [postVersionBump] LOGGING CURRENT FILE CHANGES}`);

log(chalk`{bgMagenta.white.bold [postVersionBump] Moving package.json to root  - [DONE]}`);
