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
  xcontainer_sm: '640px' /* 40rem */,
  xcontainer_md: '768px' /* 48rem */,
  xcontainer_lg: '1024px' /* 64rem */,
  xcontainer_xl: '1280px' /* 80rem */,
};

const space = {
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
  x6: '24px', // 1.5rem
  x7: '1.75rem', // 1.75rem
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

export const theme = {
  breakpoints: {
    // %%[CODER_START]:Theme_breakpoints%%
    xl: 1200,
    lg: 992,
    md: 768,
    sm: 480,
    xs: 0,
    // %%[CODER_END]:Theme_breakpoints%%
  },
  colors: {
    // %%[CODER_START]:Theme_colors%%
    warning: {
      x050: '#FFFBEA',
      x100: '#FFF3C4',
      x200: '#FCE588',
      x300: '#FADB5F',
      x400: '#F7C948',
      x500: '#F0B429',
      x600: '#DE911D',
      x700: '#CB6E17',
      x800: '#B44D12',
      x900: '#8D2B0B',
    },
    negative: {
      x050: '#FFE3E3',
      x100: '#FFBDBD',
      x200: '#FF9B9B',
      x300: '#F86A6A',
      x400: '#EF4E4E',
      x500: '#E12D39',
      x600: '#CF1124',
      x700: '#AB091E',
      x800: '#8A041A',
      x900: '#610316',
    },
    positive: {
      x050: '#E3F9E5',
      x100: '#C1F2C7',
      x200: '#91E697',
      x300: '#51CA58',
      x400: '#31B237',
      x500: '#18981D',
      x600: '#0F8613',
      x700: '#0E7817',
      x800: '#07600E',
      x900: '#014807',
    },
    neutral: {
      x000: '#FFFFFF',
      x050: '#F7F7F7',
      x100: '#E1E1E1',
      x200: '#CFCFCF',
      x300: '#B1B1B1',
      x400: '#9E9E9E',
      x500: '#7E7E7E',
      x600: '#626262',
      x700: '#515151',
      x800: '#3B3B3B',
      x900: '#222222',
      x999: '#111111',
    },
    accent: {
      x050: '#FFE3EC',
      x100: '#FFB8D2',
      x200: '#FF8CBA',
      x300: '#F364A2',
      x400: '#E8368F',
      x500: '#DA127D',
      x600: '#BC0A6F',
      x700: '#A30664',
      x800: '#870557',
      x900: '#620042',
    },
    primary: {
      x050: '#FFE8D9',
      x100: '#FFD0B5',
      x200: '#FFB088',
      x300: '#FF9466',
      x400: '#F9703E',
      x500: '#F35627',
      x600: '#DE3A11',
      x700: '#C52707',
      x800: '#AD1D07',
      x900: '#841003',
    },
    // %%[CODER_END]:Theme_colors%%
  },
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    variants: {
      display1: {
        fontSize: {
          xs: '48px',
          md: '60px',
        },
        letterSpacing: {
          xs: '-0.04px',
        },
        fontWeight: {
          xs: '900',
        },
      },
      heading1: {
        fontSize: {
          xs: '36px',
          md: '48px',
        },
        letterSpacing: {
          xs: '-0.04px',
        },
        fontWeight: {
          xs: '900',
        },
      },
      heading2: {
        fontSize: {
          xs: '24px',
          md: '36px',
        },
        letterSpacing: {
          xs: '-0.04px',
        },
        fontWeight: {
          xs: '900',
        },
      },
      heading3: {
        fontSize: {
          xs: '20px',
          md: '30px',
        },
        letterSpacing: {
          xs: '-0.04px',
        },
        fontWeight: {
          xs: 'bold',
        },
      },
      heading4: {
        fontSize: {
          xs: '16px',
          md: '20px',
        },
        letterSpacing: {
          xs: '-0.04px',
        },
        fontWeight: {
          xs: 'bold',
        },
      },
      heading5: {
        fontSize: {
          xs: '14px',
          md: '16px',
        },
        letterSpacing: {
          xs: '-0.04px',
        },
        fontWeight: {
          xs: 'bold',
        },
      },
      body1: {
        fontSize: {
          xs: '18px',
        },
        fontWeight: {
          xs: '400',
        },
      },
      body2: {
        fontSize: {
          xs: '16px',
        },
        fontWeight: {
          xs: '400',
        },
      },
      body3: {
        fontSize: {
          xs: '14px',
        },
        fontWeight: {
          xs: '400',
        },
      },
      body4: {
        fontSize: {
          xs: '12px',
        },
        fontWeight: {
          xs: '400',
        },
      },
    },
  },
  space,
  components: {
    textField: {
      variant: 'basicBordered',
    },
  },
};

export type Theme = typeof theme;
