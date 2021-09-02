import { SpaceTheme } from './types';

export type { SpaceTheme, SpaceThemeNames } from './types';

const partition = {
  'x1/1': '100%',
  'x1/2': '50%',
  'x1/3': '33.333333%',
  'x2/3': '66.666667%',
  'x1/4': '25%',
  'x2/4': '50%',
  'x3/4': '75%',
  'x1/5': '20%',
  'x2/5': '40%',
  'x3/5': '60%',
  'x4/5': '80%',
  'x1/6': '16.666667%',
  'x2/6': '33.333333%',
  'x3/6': '50%',
  'x4/6': '66.666667%',
  'x5/6': '83.333333%',
  'x1/12': '8.333333%',
  'x2/12': '16.666667%',
  'x3/12': '25%',
  'x4/12': '33.333333%',
  'x5/12': '41.666667%',
  'x6/12': '50%',
  'x7/12': '58.333333%',
  'x8/12': '66.666667%',
  'x9/12': '75%',
  'x10/12': '83.333333%',
  'x11/12': '91.666667%',
};

const container = {
  xcontainer_xs: '0', // '440px'  /* 27.5rem */,
  xcontainer_sm: '640px'  /* 40rem */,
  xcontainer_md: '768px'  /* 48rem */,
  xcontainer_lg: '1024px' /* 64rem */,
  xcontainer_xl: '1280px' /* 80rem */,
};

const defaultSpace: SpaceTheme = {
  ...partition,
  ...container,
  x0: '0',
  xpx: '1px',
  'x0.5': '2px', // 0.125rem
  x1: '4px', // 0.25rem
  'x1.5': '6px', // 0.375rem
  x2: '8px', // 0.5rem
  'x2.5': '10px', // 0.625rem
  x3: '12px', // 0.75rem
  'x3.5': '14px', // 0.875rem
  x4: '16px', // 1rem
  x5: '20px', // 1.25rem'
  x6: '24px',// 1.5rem
  x7: '1.75rem',// 1.75rem
  x8: '32px', // 2rem
  x9: '36px', // 2.25rem
  x10: '40px', // 2.5rem
  x11: '44px', // 2.75rem
  x12: '48px', // 3rem
  x14: '56px', // 3.5rem
  x16: '64px', // 4rem
  x20: '80px', // 5rem
  x24: '96px', // 6rem
  x28: '112px', // 7rem
  x32: '128px', // 8rem
  x36: '144px', // 9rem
  x40: '160px', // 10rem
  x44: '176px', // 11rem
  x48: '192px', // 12rem
  x52: '208px', // 13rem
  x56: '224px', // 14rem
  x60: '240px', // 15rem
  x64: '256px', // 16rem
  x72: '288px', // 18rem
  x80: '320px', // 20rem
  x96: '384px', // 24rem
};

export default defaultSpace;
