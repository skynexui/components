
import fs from 'fs';

export function walkDirSync(dir) {
  const allFolderFiles = fs.readdirSync(dir);
  return allFolderFiles.reduce((files, file) => {
    const filePath = `${dir + file}`;
    const filePathWithLastSlash = `${filePath}/`;
    const isFileADirectory = fs.statSync(filePath).isDirectory();
    if (isFileADirectory) {
      return [
        ...files,
        ...walkDirSync(filePathWithLastSlash),
      ];
    }

    return [
      ...files,
      filePath,
    ];
  }, []);
}
