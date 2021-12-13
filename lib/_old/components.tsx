import React, { Ref } from 'react';
import NextLink from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as iconSet from "@fortawesome/free-solid-svg-icons";

import { theme } from '../core/theme/theme';

function capitalize(str: any) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function renderCSSValue(cssPropName: any, cssPropValue: any) {
  if (cssPropName.includes('horizontal')) {
    return `
      ${cssPropName.replace('horizontal', 'left')}: ${cssPropValue};
      ${cssPropName.replace('horizontal', 'right')}: ${cssPropValue};
    `;
  }
  if (cssPropName.includes('vertical')) {
    return `
      ${cssPropName.replace('vertical', 'top')}: ${cssPropValue};
      ${cssPropName.replace('vertical', 'bottom')}: ${cssPropValue};
    `;
  }

  return cssPropName + ':' + cssPropValue + ';';
}
function renderCSS(props: any, currentBreakpoint: any) {
  if (!props) return '';

  return Object
    .keys(props)
    .map((prop) => {
      const cssPropName = prop.split(/(?=[A-Z])/).join('-').toLowerCase();
      const cssPropValue = props[prop];
      const isCssPropValueAnObject = Object.prototype.toString.call(cssPropValue) === '[object Object]';
      const currentCssPropValue = cssPropValue[currentBreakpoint];

      if (currentBreakpoint == 'xs' && !isCssPropValueAnObject) {
        return renderCSSValue(cssPropName, cssPropValue);
      }

      if (currentCssPropValue) {
        return renderCSSValue(cssPropName, currentCssPropValue);
      }
    }).filter(Boolean).join('');
}


interface BoxProps {
  as?: any;
  children?: any;
  className?: string;
  styleSheet?: any;
  ref?: Ref<any>;
}
export const Box = React.forwardRef(({
  as,
  styleSheet: { focus, hover, srOnly, ...styleSheet },
  ...props
}: BoxProps, ref) => {
  const Tag = as || 'div';

  return (
    <React.Fragment>
      <Tag ref={ref} {...props} className={`${props.className ? props.className : ''} ${srOnly ? 'sr-only' : ''}`} />
      <style jsx>{`
        ${Tag} {
          ${renderCSS(styleSheet, 'xs')};
        }
        ${Tag}:hover {
          ${renderCSS(hover, 'xs')};
        }
        ${Tag}:focus {
          ${renderCSS(focus, 'xs')};
        }
        @media screen and (min-width: ${theme.breakpoints['Breakpoints.sm']}px) {
          ${Tag} {
            ${renderCSS(styleSheet, 'sm')};
          }
          ${Tag}:hover {
            ${renderCSS(hover, 'sm')};
          }
          ${Tag}:focus {
            ${renderCSS(focus, 'sm')};
          }
        }
        @media screen and (min-width: ${theme.breakpoints['Breakpoints.md']}px) {
          ${Tag} {
            ${renderCSS(styleSheet, 'md')};
          }
          ${Tag}:hover {
            ${renderCSS(hover, 'md')};
          }
          ${Tag}:focus {
            ${renderCSS(focus, 'md')};
          }
        }
        @media screen and (min-width: ${theme.breakpoints['Breakpoints.lg']}px) {
          ${Tag} {
            ${renderCSS(styleSheet, 'lg')};
          }
          ${Tag}:hover {
            ${renderCSS(hover, 'lg')};
          }
          ${Tag}:focus {
            ${renderCSS(focus, 'lg')};
          }
        }
        @media screen and (min-width: ${theme.breakpoints['Breakpoints.xl']}px) {
          ${Tag} {
            ${renderCSS(styleSheet, 'xl')};
          }
          ${Tag}:hover {
            ${renderCSS(hover, 'xl')};
          }
          ${Tag}:focus {
            ${renderCSS(focus, 'xl')};
          }
        }
      `}</style>
    </React.Fragment>
  )
});

Box.defaultProps = {
  styleSheet: {},
};

export function Icon({
  as,
  styleSheet: initialStyleSheet,
  ...props
}: any) {
  const Tag = 'svg';
  const {
    iconVariant,
    hover,
    focus,
    ...restStyleSheet
  } = initialStyleSheet;
  const styleSheet = {
    width: '1.5ch',
    height: '1.5ch',
    ...restStyleSheet
  };
  const icon = (iconSet as any)[`fa${capitalize(iconVariant)}`];

  return (
    <React.Fragment>
      <Box styleSheet={styleSheet}>
        <FontAwesomeIcon
          icon={icon}
          crossOrigin="anonymous"
          {...props}
        />
      </Box>
    </React.Fragment>
  )
}

export const Text = React.forwardRef(({ as, styleSheet, ...props }: any, ref) => {
  const {
    textVariant = {
      fontSize: 'inherit',
    },
    ...restStyleSheet
  } = styleSheet;
  const styleSheetUpdated = {
    display: 'inline-block',
    ...textVariant,
    ...restStyleSheet
  };
  const tag = as || 'span';
  return (
    <Box
      ref={ref}
      as={tag}
      styleSheet={styleSheetUpdated}
      {...props}
    />
  )
});
Text.defaultProps = {
  styleSheet: {},
};

export function Image({ as, ...props }: any) {
  const tag = 'img';
  const {
    children,
    dangerouslySetInnerHTML,
    ...imageProps
  } = props;


  return (
    <Box as={tag} {...imageProps} />
  );
}
Image.defaultProps = {
  styleSheet: {},
};


export function Input({ as, styleSheet, ...props }: any) {
  const tag = 'input';
  const finalStyleSheet = {
    transition: 'all 0.2s ease-in-out',
    outline: 0,
    textVariant: theme.typography.variants.body2,
    color: theme.colors.neutral[900],
    boxShadow: `0 5px 7px -5px ${theme.colors.neutral[999]}43`,
    display: 'block',
    width: theme.space["x1/1"],
    border: `1px solid ${theme.colors.neutral[300]}`,
    borderRadius: theme.space.x2,
    paddingHorizontal: theme.space.x5,
    paddingVertical: theme.space.x3,
    focus: {
      border: `1px solid ${theme.colors.primary[500]}`,
      boxShadow: `0 5px 10px -5px ${theme.colors.neutral[999]}43`,
    },
    ...styleSheet,
  };


  return (
    <Text as={tag} styleSheet={finalStyleSheet} {...props} />
  );
}
Input.defaultProps = {
  styleSheet: {},
};

export function Button({ as, styleSheet, ...props }: any) {
  const {
    buttonVariant = 'primary',
    ...restStyleSheet
  } = styleSheet;
  const tag = as || 'button';
  // TODO: fix this
  const currentColorTODO = theme.colors[buttonVariant as 'primary'];
  console.log('buttonVariant: ', buttonVariant);

  const finalStyleSheet = {
    cursor: 'pointer',
    textVariant: theme.typography.variants.body2,
    color: theme.colors.neutral["000"],
    boxShadow: `0 5px 7px -5px ${theme.colors.neutral["999"]}43`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 0,
    width: theme.space["x1/1"],
    border: `${theme.space.xpx} solid ${currentColorTODO[600]}`,
    borderRadius: theme.space.x2,
    paddingHorizontal: {
      xs: theme.space.x5,
      sm: theme.space.x10
    },
    paddingVertical: theme.space.x3,
    transition: 'all 0.2s ease-in-out',
    backgroundColor: currentColorTODO[600],
    hover: {
      backgroundColor: currentColorTODO[500],
      boxShadow: `0 5px 10px -5px ${theme.colors.neutral[999]}73`,
    },
    focus: {
      backgroundColor: currentColorTODO[700],
      boxShadow: `0 5px 10px -5px ${theme.colors.neutral[999]}93`,
    },
    ...restStyleSheet,
  };


  return (
    <Text as={tag} styleSheet={finalStyleSheet} {...props} />
  );
}
Button.defaultProps = {
  styleSheet: {},
};

export function Link({ children, href, styleSheet, as, ...props }: any) {
  return (
    <NextLink href={href} passHref>
      {
        as === 'button' ? (
          <Button as="a" styleSheet={styleSheet} {...props}>{children}</Button>
        ) : (
          <Text as="a" styleSheet={{ color: 'inherit', ...styleSheet }} {...props}>{children}</Text>
        )
      }
    </NextLink>
  );
}