import { writeFileSync, readFileSync } from 'fs';
import { join } from 'path';

import chalk from 'chalk';

const { log } = console;

const pkgPublished = JSON.parse(readFileSync(join(__dirname, '..', '..', 'dist', 'package.json')).toString());

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
spawnSyncWrapper('git', ['status']).log();

log(chalk`{bgMagenta.white.bold [postVersionBump] Moving package.json to root  - [DONE]}`);
