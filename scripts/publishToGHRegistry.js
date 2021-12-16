/* eslint-disable @typescript-eslint/no-var-requires */
const fetchModule = import('node-fetch');
const { execSync } = require('child_process');

Promise.allSettled([fetchModule]).then(async ([{ value: fetch }]) => {
  const lastTag = execSync('git describe --abbrev=0 --tags')
    .toString()
    .replace('\n', '')
    .replace('v', '')
    .trim();

  const response = await fetch
    .default('https://github.com/skynexui/components/packages/1146437/versions')
    .then((res) => res.text());

  if (!response.includes(lastTag)) {
    execSync(
      'npm publish --@skynexui:registry=https://npm.pkg.github.com --force'
    );
  }

  // eslint-disable-next-line no-console
  console.log(
    `Up to date with latest version [${lastTag}], nothing to publish`
  );
});
