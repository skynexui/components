export const TypographyVariants = {
  display_1: 'display_1',

  heading_1: 'heading_1',
  heading_2: 'heading_2',
  heading_3: 'heading_3',
  heading_4: 'heading_4',
  heading_5: 'heading_5',
  heading_6: 'heading_6',

  body_1: 'body_1',
  body_2: 'body_2',
  body_3: 'body_3',
  body_4: 'body_4',

  inherit: 'inherit',
};

export type TypographyVariantsName = keyof typeof TypographyVariants;

interface Text {
  fontSize: string;
  fontWeight?: string;
  lineHeight?: string;
  letterSpacing?: string;
}

interface Typography {
  xs: Text;
  md: Text;
}

export interface TypographyTheme {
  display_1: Typography;
  heading_1: Typography;
  heading_2: Typography;
  heading_3: Typography;
  heading_4: Typography;
  heading_5: Typography;
  heading_6: Typography;
  body_1: Typography;
  body_2: Typography;
  body_3: Typography;
  body_4: Typography;
  inherit: Typography;
}
