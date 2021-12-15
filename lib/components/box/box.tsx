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

    return (
      <>
        <Tag
          ref={ref}
          {...props}
          className={`${props.className ? props.className : ''} ${
            srOnly ? 'sr-only' : ''
          }`}
        />
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
          @media screen and (min-width: ${theme.breakpoints[
              'Breakpoints.sm'
            ]}px) {
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
          @media screen and (min-width: ${theme.breakpoints[
              'Breakpoints.md'
            ]}px) {
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
          @media screen and (min-width: ${theme.breakpoints[
              'Breakpoints.lg'
            ]}px) {
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
          @media screen and (min-width: ${theme.breakpoints[
              'Breakpoints.xl'
            ]}px) {
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
      </>
    );
  }
);

Box.defaultProps = {
  as: 'div',
  styleSheet: {},
  className: '',
};
