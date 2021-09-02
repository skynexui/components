import { TypographyTheme } from './types';
import { fontSize, fontWeight, tracking } from './values';

export type { TypographyTheme } from './types';

const display = {
  display_1: {
    xs: {
      ...fontSize.text_5xl,
      fontWeight: fontWeight.extrabold,
      letterSpacing: tracking.tight,
    },
    md: {
      ...fontSize.text_6xl,
      fontWeight: fontWeight.extrabold,
      letterSpacing: tracking.tight,
    },
  },
};

const heading = {
  heading_1: {
    xs: {
      ...fontSize.text_4xl,
      letterSpacing: tracking.tight,
      fontWeight: fontWeight.extrabold,
    },
    md: {
      ...fontSize.text_5xl,
      fontWeight: fontWeight.extrabold,
    },
  },
  heading_2: {
    xs: {
      ...fontSize.text_2xl,
      letterSpacing: tracking.tight,
      fontWeight: fontWeight.bold,
    },
    md: {
      ...fontSize.text_4xl,
      fontWeight: fontWeight.bold,
    },
  },
  heading_3: {
    xs: {
      ...fontSize.text_xl,
      letterSpacing: tracking.tight,
      fontWeight: fontWeight.bold,
    },
    md: {
      ...fontSize.text_3xl,
      fontWeight: fontWeight.bold,
    },
  },
  heading_4: {
    xs: {
      ...fontSize.text_xl,
      fontWeight: fontWeight.bold,
      letterSpacing: tracking.tight,
    },
    md: {
      ...fontSize.text_base,
      fontWeight: fontWeight.bold,
    },
  },
  heading_5: {
    xs: {
      ...fontSize.text_sm,
      fontWeight: fontWeight.bold,
      letterSpacing: tracking.tight,
    },
    md: {
      ...fontSize.text_base,
      fontWeight: fontWeight.bold,
    },
  },
  heading_6: {
    xs: {
      ...fontSize.text_xs,
      fontWeight: fontWeight.bold,
      letterSpacing: tracking.tight,
    },
    md: {
      ...fontSize.text_sm,
      fontWeight: fontWeight.bold,
    },
  },
};

const body = {
  body_1: {
    xs: {
      ...fontSize.text_lg,
      fontWeight: fontWeight.normal,
    },
    md: {
      ...fontSize.text_lg,
      fontWeight: fontWeight.normal,
    },
  },
  body_2: {
    xs: {
      ...fontSize.text_base,
      fontWeight: fontWeight.normal,
    },
    md: {
      ...fontSize.text_base,
      fontWeight: fontWeight.normal,
    },
  },
  body_3: {
    xs: {
      ...fontSize.text_sm,
      fontWeight: fontWeight.normal,
    },
    md: {
      ...fontSize.text_sm,
      fontWeight: fontWeight.normal,
    },
  },
  body_4: {
    xs: {
      ...fontSize.text_xs,
      fontWeight: fontWeight.normal,
    },
    md: {
      ...fontSize.text_xs,
      fontWeight: fontWeight.normal,
    },
  },
};

const defaultTypography: TypographyTheme = {
  ...display,
  ...heading,
  ...body,
  inherit: {
    md: {
      fontSize: 'inherit',
      fontWeight: 'inherit',
      letterSpacing: 'inherit',
      lineHeight: 'inherit',
    },
    xs: {
      fontSize: 'inherit',
      fontWeight: 'inherit',
      letterSpacing: 'inherit',
      lineHeight: 'inherit',
    },
  },
};

export default defaultTypography;
