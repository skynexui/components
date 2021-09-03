const MATCH_START_FROM_FOLDER = /\.\//g;

function isDeniedPath(filePath) {
  const isTestFile = filePath.includes('.test.js');
  if (isTestFile) return true;

  const isStorybookStory = filePath.includes('.stories');
  if (isStorybookStory) return true;

  const isMacDIRFile = filePath.includes('.DS_Store');
  if (isMacDIRFile) return true;

  return false;
}



export function defaultStrategy(files, file) {
  if(isDeniedPath(file)) return files;

  return [
    ...files,
    file
  ];
}
