/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/require-default-props */
import React, { Ref } from 'react';
import { renderCSS } from '@lib/utils/renderCSS';
import { theme } from '@lib/core/theme/theme';
import { StyleSheet } from '@lib/core/stylesheet/stylesheet';
import { Breakpoints } from '@lib/core/breakpoints/breakpoints';

interface BoxProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type?: any;
  as?: any;
  id?: string;
  name?: string;
  value?: string;
  target?: string;
  placeholder?: string;
  children?: React.ReactNode;
  className?: string;
  styleSheet?: StyleSheet | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onMouseDown?: unknown;
  onClick?: unknown;
}

export const BoxBase = React.forwardRef(
  (
    {
      as,
      styleSheet: { focus, hover, disabled, srOnly, ...styleSheet },
      ...props
    }: BoxProps,
    ref
  ) => {
    const Tag = as || 'div';
    const selector = `sknui-${Tag.toLowerCase()}`;
    const jsxValue = process.env.NODE_ENV === 'test' ? 'true' : true;
    const className = `${selector} ${props.className ? props.className : ''} ${
      srOnly ? 'sr-only' : ''
    }`.trim();

    return (
      <>
        <Tag ref={ref} {...props} className={className} />
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
          ${`${Tag}.${selector}`}:disabled {
            ${renderCSS(disabled, 'xs')};
          }
          @media screen and (min-width: ${theme.breakpoints[
              Breakpoints.sm
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
            ${`${Tag}.${selector}`}:disabled {
              ${renderCSS(disabled, 'sm')};
            }
          }
          @media screen and (min-width: ${theme.breakpoints[
              Breakpoints.md
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
            ${`${Tag}.${selector}`}:disabled {
              ${renderCSS(disabled, 'md')};
            }
          }
          @media screen and (min-width: ${theme.breakpoints[
              Breakpoints.lg
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
            ${`${Tag}.${selector}`}:disabled {
              ${renderCSS(disabled, 'lg')};
            }
          }
          @media screen and (min-width: ${theme.breakpoints[
              Breakpoints.xl
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
            ${`${Tag}.${selector}`}:disabled {
              ${renderCSS(disabled, 'xl')};
            }
          }
        `}</style>
      </>
    );
  }
);

BoxBase.defaultProps = {
  as: 'div',
  children: null,
  styleSheet: {},
  value: undefined,
  placeholder: undefined,
  className: '',
  target: '',
  name: '',
  id: '',
  onClick: undefined,
  onMouseDown: undefined,
};
