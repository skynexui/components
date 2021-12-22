enum Typography {
  display1 = 'display1',
  heading1 = 'heading1',
  heading2 = 'heading2',
  heading3 = 'heading3',
  heading4 = 'heading4',
  heading5 = 'heading5',
  body1 = 'body1',
  body2 = 'body2',
  body3 = 'body3',
  body4 = 'body4',
}

export type TypographyVariants = keyof typeof Typography;
