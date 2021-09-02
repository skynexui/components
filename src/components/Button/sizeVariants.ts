import { RecordOfThemeBasicSizes } from '../../theme/types/ThemeBasicSizes';
import { SpaceThemeNames } from '../../theme/foundation/space';
import { TypographyVariantsName } from '../../theme/foundation/typography/types';

export type SizeVariantName = keyof typeof sizeVariants;

interface SizeVariant {
  px: SpaceThemeNames;
  py: SpaceThemeNames;
  typographyVariant: TypographyVariantsName;
}

export const sizeVariants: RecordOfThemeBasicSizes<SizeVariant> = {
  xs: {
    px: 'x2.5',
    py: 'x1.5',
    typographyVariant: 'body_4',
  },
  sm: {
    px: 'x3',
    py: 'x2',
    typographyVariant: 'body_3',
  },
  md: {
    px: 'x4',
    py: 'x2',
    typographyVariant: 'body_3',
  },
  lg: {
    px: 'x4',
    py: 'x2',
    typographyVariant: 'body_2',
  },
  xl: {
    px: 'x8',
    py: 'x3',
    typographyVariant: 'body_2',
  },
};
