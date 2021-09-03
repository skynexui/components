import { getAllFilePathsToPackageFrom } from './getAllFilePathsToPackageFrom/index';

function withOnlyFilesFor(platform, files) {
  const ignoreFilesStrategy = {
    web: 'native',
    native: 'web',
  }
  return files.filter((file) => {
    return !file.includes(`/${ignoreFilesStrategy[platform]}/`);
  });
}

function toRollupInputPaths(filePaths) {
  return filePaths.reduce((rollupInputPaths, filePath) => {
    const filePathKey = filePath
      .replace('.tsx', '')
      .replace('.ts', '')
      .replace('/web', '')
      .replace('/native', '')
      .replace('./src/', '');
    return {
      ...rollupInputPaths,
      [filePathKey]: filePath,
    };
  }, {});
}

export const rollupInputFiles = {
  web: {
    ...toRollupInputPaths(withOnlyFilesFor('web', getAllFilePathsToPackageFrom('components'))),
    ...toRollupInputPaths(withOnlyFilesFor('web', getAllFilePathsToPackageFrom('theme'))),
    ...toRollupInputPaths(withOnlyFilesFor('web', getAllFilePathsToPackageFrom('libs'))),
  },
  native: {
    ...toRollupInputPaths(withOnlyFilesFor('native', getAllFilePathsToPackageFrom('components'))),
    ...toRollupInputPaths(withOnlyFilesFor('native', getAllFilePathsToPackageFrom('theme'))),
    ...toRollupInputPaths(withOnlyFilesFor('web', getAllFilePathsToPackageFrom('libs'))),
  },
};

console.log(rollupInputFiles);
