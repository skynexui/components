import { walkDirSync } from '../walkDirSync';

import { defaultStrategy } from './reduceStrategies';

const skynexUIFolders = {
  components(walkDir) {
    return walkDir('./src/components/').reduce(defaultStrategy, []);
  },
};

export function getAllFilePathsToPackageFrom(skynexUIFolderName, walkDir = walkDirSync) {
  const hasStrategyToHandleGivenFolder = Boolean(skynexUIFolders[skynexUIFolderName]) && typeof skynexUIFolders[skynexUIFolderName] === 'function';
  if (!hasStrategyToHandleGivenFolder) {
    return walkDir(`./src/${skynexUIFolderName}/`).reduce(defaultStrategy, [])
  }

  return skynexUIFolders[skynexUIFolderName](walkDir);
}
