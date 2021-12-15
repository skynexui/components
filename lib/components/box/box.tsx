import React, { Ref } from 'react';
import { renderCSS } from '@lib/utils/renderCSS';
import { theme } from '@lib/core/theme/theme';
import { StyleSheet } from '@lib/core/stylesheet/stylesheet';

interface BoxProps {
  as?: any;
  children: any;
  className?: string;
  styleSheet?: StyleSheet;
  ref: Ref<any>;
}

export const Box = React.forwardRef(
  (
    {
      as,
      styleSheet: { focus, hover, srOnly, ...styleSheet },
      ...props
    }: BoxProps,
    ref
  ) => {
    const Tag = as || 'div';
    const selector = 'sknui-box';
    const jsxValue = process.env.NODE_ENV === 'test' ? 'true' : true;

    return (
      <>
        <Tag
          ref={ref}
          {...props}
          className={`sknui-box ${props.className ? props.className : ''} ${
            srOnly ? 'sr-only' : ''
          }`}
        />
        <style jsx={jsxValue}>{`
          ${`${Tag}.${selector}`} {
            ${renderCSS(styleSheet, 'xs')};
          }
          ${`${Tag}.${selector}`}:hover {
            ${renderCSS(hover, 'xs')};
          }
          ${`${Tag}.${selector}`}:focus {
            ${renderCSS(focus, 'xs')};
          }
          @media screen and (min-width: ${theme.breakpoints[
              'Breakpoints.sm'
            ]}px) {
            ${`${Tag}.${selector}`} {
              ${renderCSS(styleSheet, 'sm')};
            }
            ${`${Tag}.${selector}`}:hover {
              ${renderCSS(hover, 'sm')};
            }
            ${`${Tag}.${selector}`}:focus {
              ${renderCSS(focus, 'sm')};
            }
          }
          @media screen and (min-width: ${theme.breakpoints[
              'Breakpoints.md'
            ]}px) {
            ${`${Tag}.${selector}`} {
              ${renderCSS(styleSheet, 'md')};
            }
            ${`${Tag}.${selector}`}:hover {
              ${renderCSS(hover, 'md')};
            }
            ${`${Tag}.${selector}`}:focus {
              ${renderCSS(focus, 'md')};
            }
          }
          @media screen and (min-width: ${theme.breakpoints[
              'Breakpoints.lg'
            ]}px) {
            ${`${Tag}.${selector}`} {
              ${renderCSS(styleSheet, 'lg')};
            }
            ${`${Tag}.${selector}`}:hover {
              ${renderCSS(hover, 'lg')};
            }
            ${`${Tag}.${selector}`}:focus {
              ${renderCSS(focus, 'lg')};
            }
          }
          @media screen and (min-width: ${theme.breakpoints[
              'Breakpoints.xl'
            ]}px) {
            ${`${Tag}.${selector}`} {
              ${renderCSS(styleSheet, 'xl')};
            }
            ${`${Tag}.${selector}`}:hover {
              ${renderCSS(hover, 'xl')};
            }
            ${`${Tag}.${selector}`}:focus {
              ${renderCSS(focus, 'xl')};
            }
          }
        `}</style>
      </>
    );
  }
);

Box.defaultProps = {
  as: 'div',
  styleSheet: {},
  className: '',
};
