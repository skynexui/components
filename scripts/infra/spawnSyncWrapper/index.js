/* eslint-disable no-console */
import { spawnSync } from 'child_process';

import chalk from 'chalk';

const { log } = console;

export default function spawnSyncWrapper(command = '', args = [], options = {}) {
  log(chalk`{bgMagenta.white Running: ${command} ${args.join(' ')}}`);
  const SUCESS_STATUS = 0;
  const process = spawnSync(command, args, options);
  if (process.status !== SUCESS_STATUS) {
    throw new Error(`[spawnSyncWrapper:error] \n ${process.stderr}`);
  }
  return {
    ...process,
    log() {
      console.info(process.stdout.toString());
      console.warn(process.stderr.toString());
    },
  };
}
